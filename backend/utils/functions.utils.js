require('babel-register');
const config = require('../assets/config');

// Fonctions de formatage de la réponse "success"
exports.success =  function(result) {
	return {
		status: 'success',
		result: result,
	}
}

// Fonctions de formatage de la réponse "error"
exports.error =  function(message) {
	return {
		status: 'error',
		message: message
	}
}

// Fonctions de création d'une erreur
exports.isErr = (err) => {
	return err instanceof Error
}

// Fonctions de vérification de l'etat d'une Promise (success ou error)
exports.checkAndChange = (obj) => {
	if(this.isErr(obj)) {
		return this.error(obj.message)
	} else {
		return this.success(obj)
	}
}

// Fonctions de création d'un datetime
exports.newDate = () => {
	let newDate = new Date()
	let year = newDate.getFullYear()
	let month = newDate.getMonth()<10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1
	let day = newDate.getDate()<10 ? "0" + ( newDate.getDate() ) : newDate.getDate()
	let hour = newDate.getHours()<10 ? "0" + (newDate.getHours() ) : newDate.getHours()
	let minute = newDate.getMinutes()<10 ? "0" + ( newDate.getMinutes() ) : newDate.getMinutes()
	let seconde = newDate.getSeconds()<10 ? "0" + ( newDate.getSeconds() ) : newDate.getSeconds()

	return (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconde)
}
