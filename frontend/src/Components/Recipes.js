import React, {Component} from 'react';
import RecipesItem from "./RecipesItem";

class Recipes extends Component {

  render() {
    return (
        <div class="col-md-6 col-sm-6">
            <div class="posts">
                <RecipesItem titre="Titre de la recette" datecreation="26-2-2012" auteur="Admin" categorie="General" image_url="http://placehold.it/750x450" image_alt="recette1"
                description="Texte d'accroche : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. "
                lien_url="/recipe" />
            </div>
        </div>
    );
  }
}
export default Recipes;
