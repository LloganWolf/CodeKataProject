import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from "./Header";
import Navbar from "./Navbar";
import Title from "./Title";
import UpdateForm from "../Forms/UpdateForm";

class UpdatePost extends Component {
  constructor(props) {
		super(props);
		this.state = {
      id_recipe: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf("/")+1),
		};
  }

  render() {
    let {id_recipe} = this.state
    if(this.props.userDatas[0] === null || this.props.userDatas[0] === undefined) {
      return <Redirect push to={`/`} />
    }
    
    return (
      <Fragment>
        <Header />
          
        <Navbar />

        <div className="content">
          <div className="container">
            <Title titre="Modification de recette" accroche="Mettre sa recette à jour" />    
            <div className="row make-post">
              <div className="col-md-8 col-sm-8">
                <div className="formy">
                  <UpdateForm id={id_recipe}/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
  return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(UpdatePost);