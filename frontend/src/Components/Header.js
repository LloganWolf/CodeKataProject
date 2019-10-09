import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
		super(props);
		this.state = {
			logged_in: this.props.logged_in
		};
  }

  handle_logout = () => {
    // Action sur le store
    const action = { 
      type: "REMOVE_USER_CREDENTIALS",
      value: this.props.userDatas
    }
    this.props.dispatch(action)

    // On vide le State
		this.setState({
			logged_in: false,
    });

    return <Redirect push to={`/`} />
    
  };
  
  render() {
    return(
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="logo">
                  <h1><a href="/accueil">Ma boite <span className="color">à recette</span></a></h1>
                  <div className="hmeta">Votre gestionnaire de recette</div>
                </div>
              </div>
              {/* RECHERCHE */}
               <div className="col-md-3 col-md-offset-3 col-sm-4">
                
                 <form className="form-inline">
                  <div className="form-group">
                    <input type="text" className="form-control" id="search" placeholder="Recherche..." />
                  </div>
                  <button type="submit" className="form-control btn cb-bouton_rouge"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form> 
                
              </div>
              {/* End RECHERCHE */}

              <div className="col-md-1 col-sm-1">
                <form onSubmit={this.handle_logout}>
                  <button id="deconnexion" type="submit" className="btn cb-bouton_rouge"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
          </div>
        </header>
    )
  }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
  return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(Header)