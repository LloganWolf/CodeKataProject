let db, config
const jwtUtils = require('../../utils/jwt.utils');

module.exports = (_db, _config) => {
		db = _db
		config = _config
		// Pour que ce soit la Class Recipes dans le fichier app.js, on retourne Recipes
		return Recipes
}

let Recipes = class {

  static getConfig() {
    return config;
  }

  //Methode de récupération de toutes les tâches OK
  static getAll(max) {
    return new Promise((next) => {
      // Render de la route avec les données des paramètres
      // req.query permet de récupérer les paramètres URL
      if(max!=undefined && max > 0) {
        // On récupère les tâches de la base de données avec un max
        db.query('SELECT * FROM recipes LIMIT 0, ?', [parseInt(max)])
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
        db.query('SELECT * FROM recipes')
          .then((result) => {
            next(result)
          })
          .catch((err) => {
            next(err)
          })
      }
    });
  }

  //Methode de récupération d'une tâche OK
  static getOneByID(id) {
    return new Promise((next) => {
      // On récupère les utilisateurs de la base de données
      db.query('SELECT * FROM recipes WHERE id=?', [id])
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

  //Methode de récupération d'une tâche OK

  //Methode de modification d'une tâche OK
  static updateRecipe(id, job_id, title) {
    // Retourne une Promise
    return new Promise((next) => {
      // On vérifie si le titre est renseigné
      if(title != undefined && title.trim() != '') {
        title = title.trim()

        // On récupère les users de la base de données
        db.query('SELECT * FROM recipes WHERE id=?', [id])
          .then((result) => {
            // On vérifie si le nom est déjà utilisé
            if (result[0] != undefined) {
              return db.query('SELECT * FROM recipes WHERE id != ?', [id])

            // Erreur
            } else {
              next(new Error(config.errors.taskAlreadyExist));
            }
          })
          .then((result) => {
            // Erreur
            if (result[0] != undefined) {
              next(new Error(config.errors.taskAlreadyExist));

            // On met a jour
            } else {
              return db.query('UPDATE recipes SET title = ? WHERE id = ?', [title, id])
            }
          })
          .then(() => {
            next(true)
          })
          .catch((err) => next(err))

      // Erreur
      } else {
        next(new Error(config.errors.noTitleValue));
      }
    })
  }

  //Methode de suppression d'une tâche KO
  static deleteRecipe(id, headerAuth) {
    // Retourne une Promise
    return new Promise((next) => {
			// On récupère le UserId qui a son token valide
			let userId = jwtUtils.getUserId(headerAuth);

			// On vérifie que le userId pas valide
			if(userId < 0 ) {
				next( new Error(config.errors.badToken) );
			}

      // On récupère les utilisateurs de la base de données
			db.query('SELECT * FROM recipes WHERE id=? AND user_id=?', [id, userId])
        .then((result) => {
          // Si pas de résultat
					if(result[0] != undefined) {
						return db.query('DELETE FROM recipes WHERE id = ?', [id])
          } else {
             next(new Error(config.errors.badID));
          }

        })
        .then(() => next(true))
        .catch((err) => next(err))
    })
  }

}
