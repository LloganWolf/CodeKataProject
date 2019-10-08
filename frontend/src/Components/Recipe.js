import React, {Component, Fragment} from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Title from "./Title";
import RecipeElement from './RecipeElement';
import Comments from './Comments';

class Recipe extends Component {

  render() {
    const ingredients = ["Ingrédient 1", "Ingrédient 6", "Ingrédient 3", "Ingrédient 4", "Ingrédient 5"];

    return (
      <Fragment>
        <Header />
        <Navbar />
        <div class="content">
          <div class="container">
            <Title titre="Ma recette" accroche="Votre recette en détail" />
          
            <div class="row">
              <RecipeElement titre="Titre de la recette"
              datecreation="26-2-2012"
              auteur="Admin"
              categorie="General"
              image_url="http://placehold.it/850x450"
              image_alt="recette1"
              ingredients={ingredients}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet."
              />  
            </div>
            
            <Comments />
            
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Recipe;
