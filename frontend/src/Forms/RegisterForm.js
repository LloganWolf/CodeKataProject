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
            //image_user: "",
            description: "",
            logged_in: false,
            error_message: "",
            success_message: "",
        }
    }

    // Méthode de gestion des champs de formulaire
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
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
            <form name="registerForm" onSubmit={e => this.handleSignup(e, this.state)} onReset={this.handleReset}>
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
                    {/*<div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="register_image_user">Photo profil</label>
                            <div className="col-md-9">
                                <input id="register_image_user" name="image_user" type="file" />
                            </div>
                        </div>
                    </div>
                    <br /> */}

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
                    <div class="alert alert-info" role="alert">
                        {success_message}
                    </div>
                    }

                    {error_message !== "" &&
                    <div class="alert alert-danger" role="alert">
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