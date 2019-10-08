import React, {Component} from 'react';

class PostForm extends Component {

    render() {
        return (
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_title">Titre</label>
                    <div class="col-md-9">
                        <input id="new-recipe_title" name="title" type="text" class="form-control" />
                    </div>
                </div>   
                
                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_picture">Image</label>
                    <div class="col-md-9">
                        <input id="new-recipe_picture" name="picture" type="file" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_category">Catégorie</label>
                    <div class="col-md-9">                               
                        <select id="new-recipe_category" name="category" class="form-control">
                            <option>&nbsp;</option>
                            <option>Entrée</option>
                            <option>Plats</option>
                            <option>Desserts</option>
                            <option>Hors-d'oeuvre</option>
                            <option>Encas</option>
                        </select>  
                    </div>
                </div>     

                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_ingredient">Ingrédients</label>
                    <div class="col-md-9">
                        <input id="new-recipe_ingredient" name="ingredient" class="form-control" type="text" placeholder="Separés par des ;" />
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_description">Description</label>
                    <div class="col-md-9">
                        <input id="new-recipe_description" name="description" class="form-control" type="text" placeholder="Etapes de réalisation de la recette" />
                    </div>
                </div>

    
                <div class="form-group">
                    <div class="col-md-3 col-md-offset-3"> 
                        <button id="publication" name="publication" type="submit" className="btn cb-bouton_connexion">Publier</button>
                    </div>
                    <div class="col-md-3"> 
                        <input type="reset" className="btn cb-bouton_initialisation" />
                    </div>
                </div>
                
            </form>  
        )
    }

}

export default PostForm