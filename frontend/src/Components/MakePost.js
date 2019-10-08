import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from "./Header";
import Navbar from "./Navbar";
import Title from "./Title";
import PostForm from "../Forms/PostForm";

class MakePost extends Component {
  constructor(props) {
		super(props);
		this.state = {
			logged_in:  this.props.userDatas[0] ? true : false,
		};
  }

  render() {
    let {logged_in} = this.state

    if(logged_in === true) {
      return (
        <Fragment>
          <Header />
            
          <Navbar logged_in={logged_in} />
  
          <div class="content">
            <div class="container">
              <Title titre="Nouvelle recette" accroche="Créer toute de suite votre recette" />    
              <div class="row make-post">
                <div class="col-md-8 col-sm-8">
                  <div class="formy">
                    <PostForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </Fragment>
      );
    } else {
      console.log(this.props.userDatas[0])
      return (<div>TOTO</div>);
    }
    
  }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
  return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(MakePost);