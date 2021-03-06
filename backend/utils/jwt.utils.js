const jwt = require ('jsonwebtoken');
const JWT_SIGN_SECRET = 'hdeR9fx8UuO-Tm7tYthvCvqmrB3lXSj7HeijoeedOmpKFmBWQTj2yM4nui-bZ';
// Pour générer une clé secrete : https://mkjwk.org/

// Fonctions Exportées
module.exports = {
  // Fonction de génération d'un token
  generateTokenForUser: ((userData) => {
    return jwt.sign({
      userId: userData.id
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  }),

  // Fonction de parsing de l'entete d'autorisation
  parseAuthorization: ((authorization) => {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  }),

  // Fonction de récupération d'un utilisateur
  getUserId:((authorization) => {
    let userId = -1;
    let token = module.exports.parseAuthorization(authorization);

    // Si il y a un token
    if(token != null) {
      try {
        // On validité du token
        let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        // Si le JWT est valide
        if(jwtToken != null) {
          userId = jwtToken.userId;
        }
      } catch(err) {
        console.log(err.message)
      }
    }

    return userId;
  })
}
