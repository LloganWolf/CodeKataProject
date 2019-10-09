import React, {Component} from 'react';
import ConnectionForm from '../Forms/ConnectionForm';
import RegisterForm from '../Forms/RegisterForm';

class Subscription extends Component {

    render() {
        return (
            <div className="container content-wrapper">
                <div className="row cb-cadre_form">

                    {/* Contenus de gauche */}
                    <div className="col-md-6 cb-cadre_titre">
                        <p className="cb-titre cb-color">Ma boite<br/><br/><br/><span className="cb-effet"> à recette</span></p>
                    </div>

                    {/* Contenus de droite */}
                    <div className="col-md-6">
                        <div className="content-article">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">

                                    {/* Formulaire de connexion */}
                                    <ConnectionForm />

                                    {/* ENSEMBLE DES BOITES MODALES */}
                                    {/* Contenus de la boite modale "modal_inscription" */}
                                    <div id="modal_inscription" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="formy" style={{background: "#6f1718"}}>
                                                        <RegisterForm />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end:modal_inscription */}
                                </div>

                            </div>
                        </div>
                        {/* end:contact */}
                    </div>
                    {/* end:article */}
                </div>
            </div>
        )
    }

}

export default Subscription