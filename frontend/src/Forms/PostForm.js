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
            .post(`http://localhost:6002/api/recipes`, data, {
              headers: {
                'Content-Type': 'application/json',
                'authorization': this.props.userDatas[0].token
              }
            })
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
      let {title, category, ingredient, description, success_post} = this.state
        return (
            <form class="form-horizontal" onSubmit={e => this.handleSubmit(e, this.state)} onReset={this.handleReset}>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="new-recipe_title">Titre <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="new-recipe_title" name="title" type="text" className="form-control" required="required" value={title} onChange={this.handleChange} placeholder="Nom de la recette" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="new-recipe_category">Catégorie <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <select id="new-recipe_category" name="category" class="form-control" value={category} onChange={this.handleChange}>
                                <option value="">&nbsp;</option>
                                <option value="entree">Entrée</option>
                                <option value="plat">Plat</option>
                                <option value="dessert">Dessert</option>
                                <option value="hors">Hors-d'oeuvre</option>
                                <option value="encas">Encas</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="new-recipe_ingredient">Ingrédients <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <input id="new-recipe_ingredient" name="ingredient" type="text" className="form-control" required="required" value={ingredient} onChange={this.handleChange} placeholder="Liste des ingrédients" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="new-recipe_description">Etapes <sup className="cb-asterisque"><i className="fa fa-asterisk"></i></sup></label>
                            <textarea id="new-recipe_description" name="description" type="text" className="form-control" required="required" value={description} onChange={this.handleChange} placeholder="Etape de la recette"></textarea>
                        </div>
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
