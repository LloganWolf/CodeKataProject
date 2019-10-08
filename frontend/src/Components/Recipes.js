import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import RecipesItem from "./RecipesItem";

class Recipes extends Component {
  constructor(props) {
		super(props);
		this.state = {
      recipes:    [],
		};
  }

  componentDidMount() {
    axios.get(`http://localhost:6002/api/recipes/user/${this.props.userDatas[0].id}`)
      .then(res => {
        console.log(res.data)
        console.log(res.data.result)
        console.log(res.data.result[0].title)
        this.setState({
          recipes: res.data.result,
        })
      })
  }

  render() {
    let { recipes } = this.state
    console.log(recipes)
    return (
        <Fragment>
          {
            recipes ?
              recipes.map(recipe => {
                const { id, title, category, description, image, created_at} = recipe
                return(
                  <div class="col-md-6 col-sm-6">
                    <div class="posts">
                      <RecipesItem titre={title} datecreation={created_at} auteur={this.props.userDatas[0].login} categorie={category} image_url={image} image_alt={title}
                      description={description}
                      lien_url={`/recipe/${id}`} />
                    </div>
                  </div>
                )

              }) : (
                <div>RIEN</div>
              )
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
