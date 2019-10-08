import React, {Component, Fragment} from 'react';
import './App.css';

class Users extends Component {

  render() {
    return (
      <Fragment>
        {/* Header */}
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="logo">
                  <h1><a href="/accueil">Ma boite <span className="color">à recette</span></a></h1>
                  <div className="hmeta">Votre gestionnaire de recette</div>
                </div>
              </div>
              <div className="col-md-5 col-md-offset-3 col-sm-6 col-sm-offset-2">
                <form className="form-inline">
                  <div className="form-group">
                    <input type="text" className="form-control" id="search" placeholder="Recherche..." />
                  </div>
                  <button type="submit" className="btn btn-default">Rechercher</button>
                </form>
              </div>
            </div>
          </div>
        </header>
        {/* End Header */}

        {/* Navbar */}
        <div class="navbar bs-docs-nav" role="banner">
          <div class="container">
            <div class="navbar-header">
              <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
               
            <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
              <ul class="nav navbar-nav">
					      <li class="dropdown">
                  <a href="/" class="dropdown-toggle" data-toggle="dropdown">Recettes <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="/accueil">Toutes mes recettes</a></li>
                    <li><a href="/shares">Recettes partagées</a></li>
                    <li><a href="/create">Créer une recette</a></li>
                  </ul>
                </li> 

                <li class="dropdown">
                  <a href="/" class="dropdown-toggle" data-toggle="dropdown">Membres <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="/members">Tous les membres</a></li>
                    <li><a href="/friends">Mon reseaux</a></li>
                  </ul>
                </li>                   
                      
                                           
                <li><a href="/contactus">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* End Navbar */}

        <div class="content">
          <div class="container">
            {/* Title */}
            <h2>Mes recettes</h2>
            <p class="big grey">Retrouver toute vos recettes</p>
            {/* End Title */}

            {/* Usersitem */}
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="col-l">
                        <div class="pic">
                             <img src="http://placehold.it/400x400" alt="" class="img-responsive" />
                        </div>
                    </div>

                    <div class="col-r">
                        <div class="sinfo">
                            <h4>Prenom nom</h4>
                            <h6 class="grey">Role</h6>
                        </div>
                    </div>

                    <div class="clearfix"></div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <p class="ainfo">Description de l'utilisateur</p>
                    <button className="btn cb-bouton_connexion"><a href="/users/1">Voir profil</a></button>
                    <button className="btn cb-bouton_inscription">Se connecter</button>
                </div>
            </div>
            <hr/>
            {/* End Usersitem */}

            {/* Usersitem */}
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="col-l">
                        <div class="pic">
                             <img src="http://placehold.it/400x400" alt="" class="img-responsive" />
                        </div>
                    </div>

                    <div class="col-r">
                        <div class="sinfo">
                            <h4>Prenom nom</h4>
                            <h6 class="grey">Role</h6>
                        </div>
                    </div>

                    <div class="clearfix"></div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <p class="ainfo">Description de l'utilisateur</p>
                    <button className="btn cb-bouton_connexion"><a href="/users/1">Voir profil</a></button>
                    <button className="btn cb-bouton_inscription">Se connecter</button>
                </div>
            </div>
            {/* End Usersitem */}

          </div>
        </div>

      </Fragment>
    );
  }
}
export default Users;
