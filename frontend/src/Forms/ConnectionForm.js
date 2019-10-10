import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import history from "../history";

class ConnectionForm extends Component {
    constructor(props) {
		super(props);
        this.state = {
            login: "",
            email: "",
            password: "",
            error_message: "",
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
        })
    }

    // Méthode de gestion de la connexion
    handleLogin = (e, data) => {
        e.preventDefault();
        axios
            .post(`http://localhost:6002/api/users/signin`, data)
            .then(res => {
                if(res.status === 200) {
                    if(res.data.status !== "error") {
                        
						const action = { 
							type: "ADD_USER_CREDENTIALS",
							value: res.data.result
						}
						this.props.dispatch(action)
                        if( this.props.userDatas[2] !== null ) {
                            this.setState({
                                logged_in: true,
                            })
                            history.push('/accueil')
                        }
					} else {
						this.setState({
							error_message: res.data.message,
						})
					}
                }
            })
            .catch(err => {
                console.log(err.message)
                this.setState({
                    error_message: err.message,
                })
            })	
    }
    
    render() {
        let {error_message, login, email, password} = this.state;

        return (
            <form name="connexionForm" onSubmit={e => this.handleLogin(e, this.state)} onReset={this.handleReset}>
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="cb-color" style={{textAlign: 'center'}}><b>FORMULAIRE DE CONNEXION</b></h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="connect_login">Login <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="connect_login" name="login" type="text" className="form-control" required="required" value={login} onChange={this.handleChange} placeholder="Identifiant de l'utilisateur" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="connect_email">Email <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="connect_email" name="email" type="email" className="form-control" required="required" value={email} onChange={this.handleChange} placeholder="Email de l'utilisateur" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="connect_password" name="password" type="password" className="form-control" required="required" value={password} onChange={this.handleChange} placeholder="Mot de passe de l'utilisateur" />
                        </div>
                    </div>
                </div>
                {error_message !== "" &&
                <div className="form-group">
                    <div className="col-md-12">
                        <label id="err_message" name="err_message" htmlFor="err_message" style={{color: '#71394d', display: '#block'}}>{error_message}</label>
                    </div>
                </div>
                }
                <br />

                <div className="form-group">
                    <div className="col-md-3 col-xs-3">
                        <button id="connexion" name="connexion" type="submit" className="btn cb-bouton_connexion">Connexion</button>
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <a data-toggle="modal" href="#modal_inscription" className="btn cb-bouton_inscription" style={{marginTop: '0%', textDecoration: 'none'}}>Inscription</a>
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <input type="reset" className="btn cb-bouton_initialisation" />
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <input type="checkbox" name="memoriser" /> Se souvenir
                    </div>
                </div>
            </form>    
        )
    }

}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
    return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(ConnectionForm)