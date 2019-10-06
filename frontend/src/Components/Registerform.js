import React, {Component} from 'react';

class Registerform extends Component {

    render() {
        return (
            <form method="post" name="inscriptionForm" action="">
                <div className="form">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 style={{textAlign: 'center'}}><b>INSCRIPTION</b></h4>
                        </div>
                    </div>
                    <br />

                    {/* Champ Login */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="login">Login<sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_login" name="login" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* Champ Email */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="email">Email <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_email" name="email" type="email" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Champ Mot de passe */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="password">Mot de passe <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_password" name="password" type="password" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Champ Prénom */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="firstname">Prénom<sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_firstname" name="firstname" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* Champ Nom */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="lastname">Nom<sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <div className="col-md-9">
                                <input id="register_lastname" name="lastname" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* Image avatar */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="picture">Photo profil</label>
                            <div className="col-md-9">
                                <input id="register_picture" name="picture" type="file" />
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* Champ Description */}
                    <div className="row">
                        <div className="form-group">
                            <label className="control-label col-md-3" style={{textAlign: 'center'}} htmlFor="description">Description</label>
                            <div className="col-md-9">
                                <textarea id="register_description" name="description" row="5" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <br />

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

export default Registerform