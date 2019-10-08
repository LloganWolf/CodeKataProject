import React from 'react';

const Navbar = () => {
    return(
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

export default Navbar