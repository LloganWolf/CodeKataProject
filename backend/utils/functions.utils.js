require('babel-register');
const config = require('../assets/config');

// Fonctions de création d'un datetime
exports.newDate = () => {
	let newDate = new Date()
	let year = newDate.getFullYear()
	let month = newDate.getMonth()
	let day = newDate.getDate()<10 ? "0" + ( newDate.getDate() ) : newDate.getDate()
	let hour = newDate.getHours()<10 ? "0" + (newDate.getHours() ) : newDate.getHours()
	let minute = newDate.getMinutes()<10 ? "0" + ( newDate.getMinutes() ) : newDate.getMinutes()
	let seconde = newDate.getSeconds()<10 ? "0" + ( newDate.getSeconds() ) : newDate.getSeconds()

  const nomMois = ["janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];

	return (day + " " + nomMois[month] + " " + year + " à " + hour + "h" + minute)
}
