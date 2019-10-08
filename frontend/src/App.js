import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Recipes from "./Components/Recipes";
import './App.css';
import MakePost from './Components/MakePost';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			logged_in:  this.props.userDatas[0] ? true : false,
			id:         this.props.userDatas[0] ? this.props.userDatas[0].id : "",
      login:      this.props.userDatas[0] ? this.props.userDatas[0].login : "",
      email:      this.props.userDatas[0] ? this.props.userDatas[0].email : "",
			firstname:  this.props.userDatas[0] ? this.props.userDatas[0].firstname : "",
      lastname:   this.props.userDatas[0] ? this.props.userDatas[0].lastname : "",
      image_user: this.props.userDatas[0] ? this.props.userDatas[0].image_user : "",
      token:      this.props.userDatas[0] ? this.props.userDatas[0].token : "",
      role:       this.props.userDatas[0] ? this.props.userDatas[0].role : "",
      description:this.props.userDatas[0] ? this.props.userDatas[0].description : "",
		};
  }

  componentDidMount() {
    console.log("id : " + this.state.id)
    console.log("login : " + this.state.login)
    console.log("email : " + this.state.email)
    console.log("firstname : " + this.state.firstname)
    console.log("lastname : " + this.state.lastname)
    console.log("image_user : " + this.state.image_user)
    console.log("token : " + this.state.token)
    console.log("role : " + this.state.role)
    console.log("description : " + this.state.description)
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
              <Title titre="Mes recettes" accroche="Retrouver toute vos recettes" />

              <div class="row">
                <Recipes id={this.state.id} />
              </div>
              <div className="col-md-12">
                <div className="content-article">
                  <div class="row">
                    <MakePost/>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </Fragment>

      );
    } else {
      return (<Redirect push to={`/`} />);
    }
  }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
  return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(App);
