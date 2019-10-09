import React, {Component} from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {
        return(
            <div className="navbar bs-docs-nav" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                   
                    <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">Recettes <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/accueil">Toutes mes recettes</a></li>
                                    <li><a href="/shares">Recettes partagées</a></li>
                                    <li><a href="/create">Créer une recette</a></li>
                                </ul>
                            </li> 
    
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown">Membres <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/users">Tous les membres</a></li>
                                    <li><a href="/friends">Mon reseaux</a></li>
                                </ul>
                            </li>                                      
                            <li><a href="/contactus">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
    return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(Navbar);