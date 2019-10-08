import React, {Component} from 'react';

class ConnectionForm extends Component {

    render() {
        return (
            <form name="connexionForm">
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
                            <input id="connect_login" name="login" type="text" className="form-control" required="required" placeholder="Identifiant de l'utilisateur" pattern="[A-Za-z-]{1,}" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="connect_email">Email <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="connect_email" name="email" type="email" className="form-control" required="required" placeholder="Email de l'utilisateur" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="connect_password" name="password" type="password" className="form-control" required="required" placeholder="Mot de passe de l'utilisateur" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-12">
                        <label id="err_message" name="err_message" htmlFor="err_message" style={{color: '#71394d', display: '#block'}}></label>
                    </div>
                </div>
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
                <br />
                <br />
                {/* Message d'erreur 
                {this.state.error_message !== "" &&
                    <div className="alert alert-danger" role="alert">
                {this.state.error_message}
                </div>
                }*/}
            </form>    
        )
    }

}

export default ConnectionForm