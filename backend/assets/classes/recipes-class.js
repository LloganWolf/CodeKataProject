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

  //Methode de récupération de toutes mes recettes
  static getAll(max) {
    return new Promise((next) => {
			// Si le params 'max' est un chiffre et est superieur à 0
      if(max!=undefined && max > 0) {
        // On récupère les recettes de la base de données avec un max
        db.query('SELECT * FROM recipes LIMIT 0, ?', [parseInt(max)])
          .then((result) => {
            next(result)
          })
          .catch((err) => {
            next(err)
          })

      // Cas d'erreur dans le Max
      } else if(max != undefined) {
        next( new Error(config.errors.badMaxValue) );

      // Valeur par defaut
      } else {
        // On récupère les recettes de la base de données avec un max
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

  // Méthode de récupération d'une recette
  static getOneByID(id) {
    return new Promise((next) => {
      // On récupère la recette de la base de données
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

  //Methode de modification d'une recette
  static update(id, title, ingredient, description, category, image, header_auth) {
    // Retourne une Promise
    return new Promise((next) => {
			// On récupère le user_id qui a son token valide
			let user_id = jwtUtils.getUserId(header_auth);

			// On vérifie que le userId pas valide
			if(user_id < 0 ) {
				next( new Error(config.errors.badToken) );
			}

      // On récupère les recettes de la base de données
      db.query('SELECT * FROM recipes WHERE id=?', [id])
        .then((result) => {
          // On vérifie si le nom est déjà utilisé
          if (result[0] != undefined) {
            return db.query('SELECT * FROM recipes WHERE title != ?', [title])

          // Erreur
          } else {
            next(new Error(config.errors.recipeDoesntExist));
          }
        })
        .then((result) => {
          // Erreur
          if (result[0] != undefined) {
            next(new Error(config.errors.titleAlreadyTaken));

          // On met a jour
          } else {
            return db.query('UPDATE recipes SET title = ?, ingredient = ?, description = ?, category = ?, image = ? WHERE id = ?', [title, ingredient, description, category, image, id])
          }
        })
        .then(() => {
          next(true)
        })
        .catch((err) => next(err))
    })
  }

  //Methode de suppression d'une recette
  static delete(id, header_auth) {
    // Retourne une Promise
    return new Promise((next) => {
			// On récupère le user_id qui a son token valide
			let user_id = jwtUtils.getUserId(header_auth);

			// On vérifie que le userId pas valide
			if(user_id < 0 ) {
				next( new Error(config.errors.badToken) );
			}

      // On récupère les utilisateurs de la base de données
			db.query('SELECT * FROM recipes WHERE id=? AND user_id=?', [id, user_id])
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
