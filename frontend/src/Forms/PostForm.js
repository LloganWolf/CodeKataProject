import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class PostForm extends Component {
    constructor(props) {
		super(props);
        this.state = {
            title: "",
            category: "",
            ingredient: "",
            description: "",
            success_post: false,
            error_message: "",
        }
    }

    // Méthode de gestion des champs de formulaire
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        })
    }

    // Methode de gestion de remise à zero des champs du formulaire
    handleReset = () => {
        this.setState({ 
            title: "",
            category: "",
            ingredient: "",
            description: "",
        })
    }

    // Méthode de gestion de la connexion
    handleSubmit = (e, data) => {
        e.preventDefault();
        axios
            .post(`http://localhost:6002/api/recipes`, data)
            .then(res => {
                if(res.status === 200) {
                    console.log(res.data)
                }
            })
            .catch(err => {
                console.log(err.message)
                this.setState({
                    error_message: err.message,
                })
        })	
    }

    render() {
        let {title, category, ingredient, description, success_post, error_message} = this.state

        return (
            <form class="form-horizontal" onSubmit={e => this.handleSubmit(e, this.state)} onReset={this.handleReset}>
                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_title">Titre</label>
                    <div class="col-md-9">
                        <input id="new-recipe_title" name="title" type="text" class="form-control" />
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

                {success_post &&
                <div class="alert alert-success" role="alert">
                    Votre recette a bien été ajoutée
                </div>
                }

    
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

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
    return {userDatas: state.userDatas}
}
  
export default connect(mapStateToProps)(PostForm);
