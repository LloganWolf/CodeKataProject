import React from 'react';

const Header = () => {
    return(
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
    )
}

export default Header