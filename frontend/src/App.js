import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Recipes from "./Components/Recipes";
import './App.css';

Title.propTypes = {
  titre: PropTypes.string,
  accroche: PropTypes.string,
}

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
      recipes:    [],
		};
  }

  componentDidMount() {
	  if(this.props.userDatas[0] !== null) {
		  axios.get(`http://localhost:6002/api/recipes/user/${this.state.id}`)
           .then(res => {	
			      this.setState({
			        recipes: res.data,
			      })
		      })
	  }
  }

  render() {
    if(this.props.userDatas[0] === null || this.props.userDatas[0] === undefined) {
      return <Redirect push to={`/`} />
    }

    return (
      <Fragment>
        <Header />
        
        <Navbar />
        
        <div className="content">
          <div className="container">
            <Title titre="Mes recettes" accroche="Retrouver toute vos recettes" />
            
            <div className="row">
				<Recipes />
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

export default connect(mapStateToProps)(App);
