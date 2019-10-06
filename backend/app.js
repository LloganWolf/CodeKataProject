require('babel-register');
const http = require('http');
const express = require('express');
const multer = require('multer')
const path = require('path');
const fs = require('fs');
const util = require('util');
const mysql = require('promise-mysql');
const socketio = require("socket.io");
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./assets/swagger.json');
const expressOasGenerator = require('express-oas-generator');

const config = require('./assets/config');
const utils = require('./utils/functions.utils');


//Informations de connexion à la base de données
mysql.createConnection({
		host: config.db.host,
		database: config.db.database,
		user: config.db.user,
		password: config.db.password,

// Connexion à la base de données
}).then((db) => {

	// Initialisation de l'application
	const app = express()
	// Création d'un server pour interrogation en temps réel
	const server = http.Server(app);
	// Chargement de socket.io
	const io = socketio(server);

	// Morgan permet de débugger les requêtes en console
	app.use(morgan('dev'));
	// Pour permet le Cross-origin resource sharing
	app.use(cors())
	// Pour parse le JSON
	app.use(bodyparser.json() )
	// Pour l'encodage URL
	app.use(bodyparser.urlencoded({ extended: true }) );
	// Permet d'acceder à la documentation Swagger sur 'http://localhost:6002/api/documentation' grace au fichier Swagger.json
	//app.use(`${config.api_path}documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))

	// Création des routers
	let ApiRouter = express.Router();
	let UsersRouter = express.Router();
	let RecipesRouter = express.Router();

	// Appel des classes
	let Users = require('./assets/classes/users-class')(db, config)
	let Recipes = require('./assets/classes/recipes-class')(db, config)


	// http://localhost:6002/api/
	ApiRouter.route('/')
		.get((req, res) => {
			res.send({ response: "Serveur OK" }).status(200);
		})

	// http://localhost:6002/api/users?max=0
	UsersRouter.route('/')
		// GET
		// Récupérer tous les utilisateurs
		.get(async(req, res) => {
			let max = req.query.max
			// On appelle la methode getAll() de la classe Users(){}
			let allUsers = await Users.getAll(max)
			// Gestion des erreurs fait dans le fichier function.js
			res.json(utils.checkAndChange(allUsers))
		})

		// On définit l'URL de la route
		// http://localhost:6002/api/users/<id>
		UsersRouter.route('/:id')
			//GET
			// Afficher un utilisateur
			.get(async(req, res) => {
				let id = req.params.id
				// On récupère l'entete autorisation
				let headerAuth = req.headers['authorization'];
				// On appelle la methode getOneByID() de la classe Users(){}
				let user = await Users.getOneByID(id, headerAuth)
				// Gestion des erreurs fait dans le fichier function.js
				res.json(utils.checkAndChange(user))
			})

			// PUT
			// Modifier un utilisateur
			.put(async(req, res) => {
				let id = req.params.id
				let login = req.body.login
				let email = req.body.email
				let firstname = req.body.firstname
				let lastname = req.body.lastname
				let image_user = req.body.picture ? req.body.picture : "default_profil.jpg"
				let description = req.body.description
				// On récupère l'entete autorisation
				let header_auth = req.headers['authorization'];
				// On appelle la methode update(id, login, email, firstname, lastname, image_user, description, header_auth) de la classe Users(){}
				let update_user = await Users.update(id, login, email, firstname, lastname, image_user, description, header_auth)
				// Gestion des erreurs fait dans le fichier function.js
				res.json(utils.checkAndChange(update_user))

			})

			// DELETE
			// Supprimer un utilisateur
			.delete(async(req, res) => {
				let id = req.params.id
				// On récupère l'entete autorisation
				let header_auth = req.headers['authorization'];
				// On appelle la methode delete(id) de la classe Users(){}
				let delete_user = await Users.delete(id, header_auth)
				// Gestion des erreurs fait dans le fichier function.js
				res.json(utils.checkAndChange(delete_user))
			})

			// http://localhost:6002/api/user/signin
			UsersRouter.route('/signin')
				// POST
				// On ajoute un utilisateur
				.post(async(req, res) => {
					let login = req.body.login
					let email = req.body.email
					let password = req.body.password
					let connected_at = utils.newDate()

					// On appelle la methode loginUser() de la classe Users(){}
					let login_user = await Users.login(login, email, password, connected_at)
					// Gestion des erreurs fait dans le fichier function.js
					res.json(utils.checkAndChange(login_user))
				})

			// http://localhost:6002/api/users/signup
			UsersRouter.route('/signup')
				// POST
				// On ajoute un utilisateur
				.post(async(req, res) => {
					let login = req.body.login
					let email = req.body.email
					let password = req.body.password
					let firstname = req.body.firstname
					let lastname = req.body.lastname
					let description = req.body.description
					let image_user = "default_profil.jpg"
					let created_at = utils.newDate()
					let connected_at = utils.newDate()
					let active = 1
					let role = "ROLE_LVL_1"

					// On appelle la methode register() de la classe Users(){}
				 	let register_user = await Users.register(login, email, password, firstname, lastname, description, image_user, created_at, connected_at, active, role)
				 	// Gestion des erreurs fait dans le fichier function.js
				 	res.json(utils.checkAndChange(register_user))
				})

			/****** TÂCHES ******/
			// http://localhost:6002/api/recipes
			RecipesRouter.route('/')
				//GET
				// Récupérer toutes les tâches
				.get(async(req, res) => {
					let max = req.query.max
					// On appelle la methode getAll() de la classe Recipes(){}
					let allRecipes = await Recipes.getAll(max)
					// Gestion des erreurs fait dans le fichier function.js
					res.json(utils.checkAndChange(allRecipes))
				})

			// On définit l'URL de la route
			// http://localhost:6002/api/recipes/<id>
			RecipesRouter.route('/:id')
				//GET
				// Afficher une recette
				.get(async(req, res) => {
					// On appelle la methode getOneByID() de la classe Recipes(){}
					let recipe = await Recipes.getOneByID(req.params.id)
					// Gestion des erreurs fait dans le fichier function.js
					res.json(utils.checkAndChange(recipe))
				})

				// PUT
				// Modifier une recette
				.put(async(req, res) => {
					let id = req.params.id
					let title = req.body.title
					let ingredient = req.body.ingredient
					let description = req.body.description
					let category = req.body.category
					let image = req.body.image

					// On récupère l'entete autorisation
					let header_auth = req.headers['authorization'];
					// On appelle la methode update(id, title, ingredient, description, category, image, header_auth) de la classe Recipes(){}
					let update_recipe = await Recipes.update(id, title, ingredient, description, category, image, header_auth)
					// Gestion des erreurs fait dans le fichier function.js
					res.json(utils.checkAndChange(update_recipe))

				})

				// DELETE
				// Supprimer une recette
				.delete(async(req, res) => {
					let id = req.params.id
					// On récupère l'entete autorisation
					let header_auth = req.headers['authorization'];
					// On appelle la methode delete(id, header_auth) de la classe Recipes(){}
					let delete_recipe = await Recipes.delete(id, header_auth)
					// Gestion des erreurs fait dans le fichier function.js
					res.json(utils.checkAndChange(delete_recipe))
				})

	// On définit l'URL racine des routers
	app.use(`${config.api_path}`, ApiRouter)
	app.use(`${config.api_path}${config.recipes_path}`, RecipesRouter)
	app.use(`${config.api_path}${config.users_path}`, UsersRouter)

	/****** LANCEMENT DE L'APPLICATION ******/
	server.listen(config.api_port, () => {
		console.log(`Application lancé sur le port ${config.api_port}`);
	})
// ERREUR DE CONNEXION DE L'APPLICATION
}).catch((err) => {
	console.log("Erreur de connexion : " + err.message);
});
