import React, {Component, Fragment} from 'react';

class UpdatePost extends Component {

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
                <h2>Mettre à jour une recette</h2>
                <p class="big grey">Mettez votre recette au gôut du jour</p>
                {/* End Title */}

                <div class="row make-post">
                    <div class="col-md-8 col-sm-8">

                        <div class="formy">
                            <div class="form">
                                {/* Updateform */}
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label class="control-label col-md-3" htmlFor="new-recipe_title">Titre</label>
                                        <div class="col-md-9">
                                            <input id="new-recipe_title" name="title" type="text" class="form-control" />
                                        </div>
                                    </div>   
                                    
                                    <div class="form-group">
                                        <label class="control-label col-md-3" htmlFor="new-recipe_picture">Image</label>
                                        <div class="col-md-9">
                                            <input id="new-recipe_picture" name="picture" type="file" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-md-3" htmlFor="new-recipe_category">Catégorie</label>
                                        <div class="col-md-9">                               
                                            <select id="new-recipe_category" name="category" class="form-control">
                                                <option>&nbsp;</option>
                                                <option>Entrée</option>
                                                <option>Plats</option>
                                                <option>Desserts</option>
                                                <option>Hors-d'oeuvre</option>
                                                <option>Encas</option>
                                            </select>  
                                        </div>
                                    </div>     

                                    <div class="form-group">
                                        <label class="control-label col-md-3" htmlFor="new-recipe_ingredient">Ingrédients</label>
                                        <div class="col-md-9">
                                            <input id="new-recipe_ingredient" name="ingredient" class="form-control" type="text" placeholder="Separés par des ;" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label col-md-3" htmlFor="new-recipe_description">Description</label>
                                        <div class="col-md-9">
                                            <input id="new-recipe_description" name="description" class="form-control" type="text" placeholder="Etapes de réalisation de la recette" />
                                        </div>
                                    </div>
              
                      
                                    <div class="form-group">
                                        <div class="col-md-3 col-md-offset-3"> 
                                            <button id="publication" name="publication" type="submit" className="btn cb-bouton_connexion">Publier</button>
                                        </div>
                                        <div class="col-md-3"> 
                                            <input type="reset" className="btn cb-bouton_initialisation" />
                                        </div>
                                    </div>
                                    
                                </form>
                                {/* End Updateform */}
                            </div> 
                        </div>

                    </div>

                </div>
            </div>
        </div>

      </Fragment>
    );
  }
}
export default UpdatePost;
