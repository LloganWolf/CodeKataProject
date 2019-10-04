let db, config
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{4,20}$/
const bcrypt = require ('bcrypt');
const jwtUtils = require('../../utils/jwt.utils');

module.exports = (_db, _config) => {
		db = _db
		config = _config
		// Pour que ce soit la Class Users dans le fichier app.js, on retourne Users
		return Users
}

let Users = class {

  static getConfig() {
    return config;
  }

  //Methode de récupération de tous les utilisateurs OK
  static getAll(max) {
    return new Promise((next) => {
      // Render de la route avec les données des paramètres
      // req.query permet de récupérer les paramètres URL
      if(max!=undefined && max > 0) {
        // On récupère les utilisateurs de la base de données avec un max
        db.query('SELECT * FROM users LIMIT 0, ?', [parseInt(max)])
          .then((result) => {
            next(result)
          })
          .catch((err) => {
            next(err)
          })

      //Cas d'erreur dans le Max
      } else if(max != undefined) {
        next( new Error(config.errors.badMaxValue) );

      //Valeur par defaut
      } else {
        // On récupère les utilisateurs de la base de données avec un max
        db.query('SELECT * FROM users')
          .then((result) => {
            next(result)
          })
          .catch((err) => {
            next(err)
          })
      }
    });
  }

  //Methode de récupération d'un utilisateur OK
  static getOneByID(id, headerAuth) {
    return new Promise((next) => {
			// On récupère le UserId qui a son token valide
			let userId = jwtUtils.getUserId(headerAuth);
			// On vérifie que le userId pas valide
			if(userId < 0 ) {
				next( new Error(config.errors.badToken) );
			}

      // On récupère les utilisateurs de la base de données
      db.query('SELECT * FROM users WHERE id=?', [id])
        // On affiche le resultat
        .then((result) => {
          // Si pas de résultat
          if(result[0] != undefined) {
  					next(result[0]);
  				} else {
  					next( new Error(config.errors.badID) );
  				}
        })
        .catch((err) => next(err))
    })
  }

  //Methode d'inscription d'un utilisateur OK
  static registerUser(login, email, password, name, lastname, creation_date, last_connection, actif, profil_pic, description, role) {
    // Retourne une Promise
    return new Promise((next) => {
			// On teste si parametres manquants
      if(email == null || login == null || password == null) {
				next( new Error(config.errors.missingParameters) ); // errors.missingParameters
      }

			// On teste la legibilité des données
			if(login >= 20 || login <= 3) {
				next( new Error(config.errors.loginData) ); // errors.loginData
			}

			// On teste la legibilité des données
			if(!EMAIL_REGEX.test(email)) {
				next( new Error(config.errors.emailData) ); // errors.emailData
			}

			if(!PASSWORD_REGEX.test(password)) {
				next( new Error(config.errors.passwordData) ); // errors.passwordData
			}

      // On verifie si il y a bien un parametre
      login = login.trim()
			// On récupère les users de la base de données
			db.query('SELECT * FROM users WHERE email=?', [email])
        .then((result) => {
          // Si pas de résultat
					if(result[0] != undefined) {
						// CONTROLE
						console.log(result[0])
						next( new Error(config.errors.emailAlreadyTaken) ); // errors.emailAlreadyTaken
					} else {
						/*bcrypt.hash(password, 5).then( (hashedPassword) => {
							console.log("bcrypt")
							// On ajoute le nouvel utilisateur de la base de données
							return db.query('INSERT INTO users(login, email, password, name, lastname, creation_date, last_connection) VALUES(?, ?, ?, ?, ?, ?, ?)', [login, email, hashedPassword, name, lastname, creation_date, last_connection])
						}) */

						bcrypt.hash(password, 5, (err, hashedPassword) => {
							// On ajoute le nouvel utilisateur de la base de données
							return db.query('INSERT INTO users(login, email, mot_de_passe, nom, prenom, date_creation, date_connexion, actif, photo_profil, description, role) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [login, email, hashedPassword, name, lastname, creation_date, last_connection, actif, profil_pic, description, role])
						});

					}
        })
        .then(() => {
          // On renvoie la response formateur de l'ajout
          return db.query('SELECT * FROM users WHERE email=?', [email])
        })
        // On affiche le resultat
        .then((result) => {
					console.log(result)
          next({
						id: result.id,
            login: result.login,
						email: result.email,
						nom: result.nom,
						prenom: result.prenom,
						date_creation: result.date_creation,
						date_connexion: result.date_connexion,
						actif: result.actif,
						name: result.name,
						photo_profil: result.photo_profil,
						description: result.description,
						role: result.role
          })
        })
        .catch((err) => next(err))

    })
  }

	//Methode de login d'un utilisateur KO
  static loginUser(login, email, password, last_connection) {
    // Retourne une Promise
    return new Promise((next) => {
			// On teste si parametres manquants
      if(email == null || login == null || password == null) {
				next( new Error(config.errors.missingParameters) ); // errors.missingParameters
      }

			// On récupère les users de la base de données
			db.query('SELECT * FROM users WHERE login=? AND email=?', [login, email])
        .then((result) => {
          // Si pas de résultat
					if(result[0] == undefined) {
						// CONTROLE
						next( new Error(config.errors.credentialError) ); // errors.credentialError
					} else {
						bcrypt.compare(password, result[0].password, (errBycrypt, resBycrypt) => {
							console.log(resBycrypt)
							if(resBycrypt) {
								return db.query('UPDATE users SET date_connexion=? WHERE login=? AND email=?', [last_connection, login, email])
							}
						});
					}
        })
        .then(() => {
          // On renvoie la response formateur de l'ajout
          return db.query('SELECT * FROM users WHERE email=? AND login=?', [email, login])
        })
        // On affiche le resultat
        .then((result) => {
					//console.log("OK")
          next({
						id: result[0].id,
            login: result[0].login,
						email: result[0].email,
						nom: result[0].nom,
						prenom: result[0].prenom,
						date_creation: result[0].date_creation,
						date_connexion: result[0].date_connexion,
						actif: result[0].actif,
						name: result[0].name,
						photo_profil: result[0].photo_profil,
						description: result[0].description,
						role: result[0].role,
						token: jwtUtils.generateTokenForUser(result[0])
          })
        })
        .catch((err) => next(err))

    })
  }

  //Methode de modification d'un utilisateur OK
  static updateUser(id, login, email, name, lastname, last_connection, profil_pic, description, headerAuth) {
    // Retourne une Promise
    return new Promise((next) => {
			// On récupère le UserId qui a son token valide
			let userId = jwtUtils.getUserId(headerAuth);

			// On vérifie que le userId pas valide
			if(userId < 0 ) {
				next( new Error(config.errors.badToken) );
			}

      // On vérifie si l'ID est egale à 'userId'
      if(id == userId) {

        // On récupère l'utilisateur de la base de données dont l'ID
        db.query('SELECT * FROM users WHERE id=?', [id])
          .then((result) => {
            // On vérifie si le nom est déjà utilisé
            if (result[0] != undefined) {
              return db.query('SELECT * FROM users WHERE email=? AND id != ?', [email, id])

            // Erreur
            } else {
              next(new Error(config.errors.emailAlreadyTaken));
            }
          })
          .then((result) => {
            // Erreur
            if (result[0] != undefined) {
              next(new Error(config.errors.emailAlreadyTaken));

            // On met a jour
            } else {
              return db.query('UPDATE users SET login = ?, email = ?, nom = ?, prenom = ?, date_connexion = ?, photo_profil = ?, description = ? WHERE id = ?', [login, email, name, lastname, last_connection, profil_pic, description, id])
            }
          })
          .then(() => {
            next(true)
          })
          .catch((err) => next(err))

      // Erreur
      } else {
        next(new Error(config.errors.noUserid));
      }
    })
  }

  //Methode de suppression d'un utilisateur OK
  static deleteUser(id, headerAuth) {
    // Retourne une Promise
    return new Promise((next) => {
			// On récupère le UserId qui a son token valide
			let userId = jwtUtils.getUserId(headerAuth);

			// On vérifie que le userId pas valide
			if(userId < 0 ) {
				next( new Error(config.errors.badToken) );
			}

			// On vérifie si l'ID est egale à 'userId'
      if(id == userId) {
	      // On récupère les utilisateurs de la base de données
				db.query('SELECT * FROM users WHERE id=?', [id])
	        .then((result) => {
	          // Si pas de résultat
						if(result[0] != undefined) {
							return db.query('DELETE FROM users WHERE id = ?', [id])
	          } else {
	             next(new Error(config.errors.badID));
	          }

	        })
	        .then(() => next(true))
	        .catch((err) => next(err))
			// Erreur
      } else {
        next(new Error(config.errors.noUserid));
      }
    })
  }

}
