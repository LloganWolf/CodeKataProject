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

//const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./assets/swagger.json');
//const expressOasGenerator = require('express-oas-generator');

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

	// Création du router type ApiRouter
	let ApiRouter = express.Router();

	// http://localhost:6002/api/
	ApiRouter.route('/')
		.get((req, res) => {
			res.send({ response: "Serveur OK" }).status(200);
		})

	// On définit l'URL racine des routers
	app.use('/api', ApiRouter)
	
	/****** LANCEMENT DE L'APPLICATION ******/
	server.listen(config.api_port, () => {
		console.log(`Application lancé sur le port ${config.api_port}`);
	})
// ERREUR DE CONNEXION DE L'APPLICATION
}).catch((err) => {
	console.log("Erreur de connexion : " + err.message);
});