import React, {Component} from 'react';
import axios from 'axios';

class RegisterForm extends Component {

    constructor(props) {
		super(props);
        this.state = {
            login: "",
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            image_name: "",
            file: null,
            description: "",
            logged_in: false,
            error_message: "",
            success_message: "",
        }
    }
	
	// Methode de vérification des Mimetypes
    checkMimeType = (event) => {
        let files = event.target.files
        let err = ''
        const types = ['image/jpeg', 'image/png', '']
        
        // Boucle sur l'array des autorisations
        for(let x = 0; x < files.length; x++) {
            if (types.every(type => files[x].type !== type)) {
                err += files[x].type+' n\'est pas accepté comme format de fichier\n';
            }
        };
        
        // Si il y a un message d'erreur
        if(err !== '') {
            event.target.value = null // On vide la sélection
            console.log(err)
            return false;
        }

    return true;

    }
	
	// Methode de gestion des uploads
    handleChangeFile = event => {
        console.log(event.target.files)
        let files = event.target.files
        console.log(files.length)
        if(this.checkMimeType(event)){
            this.setState({
                file: files,
                image_name: files[0].name
            })
        }
    }
	
    // Méthode de gestion des champs de formulaire
    handleChange = event => {
        let target = event.target; // On instancie le target
		let value = target.value;
        
        if(target.type === 'checkbox') {
            value = target.checked
        } else if(target.type === 'file') {
            value = target.files[0]
        }
        const name = target.name;
        this.setState({
          [name]: value
        })
    }

    // Methode de gestion de remise à zero des champs du formulaire
    handleReset = () => {
        this.setState({ 
            login: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            description: '',
        })
    }
	
	//Evenement métier handleSubmit
	handleClick = () => {
        const data = new FormData()
    
        // Test de présence d'un fichier
        if(this.state.file === null) {
            data.append('file', '')
        } else {
            for(let i = 0; i < this.state.file.length; i++) {
                data.append('file', this.state.file[i])
            }
        }
    
        // On met a jour la BDD
        axios.post("http://localhost:6002/upload", data, {})
             .then(res => {
               console.log(res.statusText)
        })
    }
	
    // Méthode de gestion de la connexion
    handleSignup = (e, data) => {
        e.preventDefault();
        axios
            .post(`http://localhost:6002/api/users/signup`, data)
            .then(res => {
                this.setState({
                    success_message: res.data.message,
                })
            })
            .catch(err => {
                console.log("err" + err)
                this.setState({
                    error_message: err.message,
                })
        })	
    }

    render() {
        let {login, email, password, firstname, lastname, description, success_message, error_message} = this.state;

        return (
            <form name="registerForm" onSubmit={e => this.handleSignup(e, this.state)} onReset={this.handleReset} onClick={this.handleClick}>
                <div className="form">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 style={{color: "#ffe5e5", textAlign: 'center'}}><b>INSCRIPTION</b></h4>
                        </div>
                    </div>
                    <br />

                    {/* Champ Login */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="login">Login<sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_login" name="login" type="text" className="form-control" required="required" value={login} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* Champ Email */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="email">Email <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_email" name="email" type="email" className="form-control" required="required" value={email} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Champ Mot de passe */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="password">Mot de passe <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_password" name="password" type="password" className="form-control" required="required" value={password} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Champ Prénom */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="firstname">Prénom<sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_firstname" name="firstname" type="text" className="form-control" required="required" value={firstname} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* Champ Nom */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="lastname">Nom<sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_lastname" name="lastname" type="text" className="form-control" required="required" value={lastname} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* Image avatar */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="register_image_user">Photo profil</label>
                            <div className="col-md-9">
                                <input id="register_image_user" name="image" type="file" onChange={this.handleChangeFile} ref={this.fileInput} />
                            </div>
                        </div>
                    </div>
                    <br />
				
                    {/* Champ Description */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="description">Description</label>
                            <div className="col-md-9">
                                <textarea id="register_description" name="description" row="5" className="form-control" value={description} onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <br />
                    {success_message !== "" &&
                    <div className="alert alert-info" role="alert">
                        Votre profil a bien été enregistré
                    </div>
                    }

                    {error_message !== "" &&
                    <div className="alert alert-danger" role="alert">
                        {error_message}
                    </div>
                    }


                    <div className="form-group">
                        {/* Bouton de connexion */}
                        <div className="col-md-3 col-md-offset-3">
                            <button id="registration" name="registration" type="submit" className="btn cb-bouton_connexion">Valider</button>
                        </div>

                        {/* Bouton de réinitialisation */}
                        <div className="col-md-3">
                            <input type="reset" className="btn cb-bouton_initialisation" />
                        </div>
                    </div>
                    <br />
                </div>
            </form>         
        )
    }

}

export default RegisterForm