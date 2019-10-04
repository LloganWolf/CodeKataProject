const jwt = require ('jsonwebtoken');
const JWT_SIGN_SECRET = 'aBgWPpYpIJd5EVD_3AIieDVyrgO3upp606NlnUyDZf7wgreFzbzfY3JuA_uv60p2IRvQK6s4uuCRzd966yA';
// Pour générer une clé secrete : https://mkjwk.org/

// Fonctions Exportées
module.exports = {
  generateTokenForUser: ((userData) => {
    return jwt.sign({
      userId: userData.id
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  }),
  parseAuthorization: ((authorization) => {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  }),
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
