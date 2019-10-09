import React, {Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import RecipesItem from "./RecipesItem";

RecipesItem.propTypes = {
  titre: PropTypes.string,
  datecreation: PropTypes.string,
  auteur: PropTypes.string,
  categorie: PropTypes.string,
  image_url: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

class Recipes extends Component {
  constructor(props) {
		super(props);
		this.state = {
      recipes: [],
		};
  }

  componentDidMount() {
    if(this.props.userDatas[0] !== undefined) {
      axios.get(`http://localhost:6002/api/recipes/user/${this.props.userDatas[0].id}`)
        .then(res => {
          this.setState({
            recipes: res.data.result,
          })
        })
    }
  }

  render() {
    let { recipes } = this.state
    if(this.props.userDatas[0] === undefined) {
      return <Redirect push to={`/`} />
    }
    
    return (
        <Fragment>
          {
            recipes &&
              recipes.map(recipe => {
                const { id, title, category, description, image, created_at} = recipe
                return(
                  <div key={id} className="col-md-6 col-sm-6">
                    <div className="posts">
                      <RecipesItem titre={title} datecreation={created_at} auteur={this.props.userDatas[0].login} categorie={category} image_url={image} image_alt={title}
                      description={description}
                      id={id} />
                    </div>
                  </div>
                )

            })
          }
        </Fragment>
    );
  }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
  return {userDatas: state.userDatas}
}

export default connect(mapStateToProps)(Recipes);
