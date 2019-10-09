import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from "./Header";
import Navbar from "./Navbar";
import Title from "./Title";
import RecipeElement from './RecipeElement';
/*import Comments from './Comments';*/

RecipeElement.propTypes = {
  datecreation: PropTypes.string,
  auteur: PropTypes.string,
  categorie: PropTypes.string,
  image_url: PropTypes.string,
  image_alt: PropTypes.string,
  ingredients: PropTypes.array,
  id: PropTypes.number,
}

class Recipe extends Component {
  constructor(props) {
		super(props);
		this.state = {
      identifiant: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf("/")+1),
      id: "",
      title: "",
      ingredient: "",
      category: "",
      image: "",
      created_at: "",
      description: "",
      error_message: "",
		};
  }

  componentDidMount() {
    axios.get(`http://localhost:6002/api/recipes/`+ this.state.identifiant)
        .then(res => {
            this.setState({
              id: res.data.result.id,
              title: res.data.result.title,
              ingredient: res.data.result.ingredient,
              category: res.data.result.category,
              image: res.data.result.image,
              created_at: res.data.result.created_at,
              description: res.data.result.description,
            })
          })
          .catch(err => {
            this.setState({
                error_message: err.message,
            })
          })
  }
  

  render() {
    const { id, title, ingredient, category, image, created_at, description } = this.state
    const ingredients = ingredient.split("; ");
    const date_creation = created_at.substring(0, created_at.lastIndexOf('T'));

    if(this.props.userDatas[0] === undefined || this.props.userDatas[0] === null) {
      return <Redirect push to={`/`} />
    }

    return (
      <Fragment>
        <Header />
        <Navbar />
        <div className="content">
          <div className="container">
            <Title titre="Ma recette" accroche="Votre recette en détail" />
          
            <div className="row">
              <RecipeElement titre={title}
               datecreation={date_creation}
               auteur="Admin"
               categorie={category}
               image_url={image}
               image_alt={title}
               ingredients={ingredients}
               description={description}
               id={id} />  
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

export default connect(mapStateToProps)(Recipe);
