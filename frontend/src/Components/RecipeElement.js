import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

/* Affichage d'une recette en entière */
class RecipeElement extends Component {
    constructor(props) {
		super(props);
		this.state = {
            error_message: "",
            success_message: false,
		};
    }

    // Methode de suppression d'une recette
    handleSuppress = (id) => {
        axios.delete(`http://localhost:6002/api/recipes/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': this.props.userDatas[0].token
            }
        })
        .then(res => {
            console.log(res.data)
            this.setState({
                success_message: true,
            })
        })
        .catch(err => {
            console.log(err.message)
            this.setState({
                error_message: err.message,
            })
        })

    }

    // Rendu
    render() {
        const { titre, image_url, image_alt, categorie, ingredients, datecreation, description, auteur, id} = this.props
        const { success_message, error_message} = this.state

        if(success_message) {
            return <Redirect push to={`/accueil`} />
        }

        return(
            <div className="col-md-8 col-sm-8">
                <div className="posts">
                    <div className="entry">
                        <h2>{titre}</h2>
                        
                        <div className="meta clearfix">
                            <i className="fa fa-calendar"></i> {datecreation} <i className="fa fa-user"></i> {auteur} <span className="pull-right"><i className="fa fa-folder-open"></i> {categorie}</span>
                        </div>

                        <div className="bthumb">
                            <img src={ `${process.env.PUBLIC_URL}/img/upload/${image_url}`} alt={`${image_alt}`} className="img-responsive" style={{ width: '100%'}} />
                        </div>

                        <ol>
                        {
                        ingredients && (
                            ingredients.map(elt => {
                                return (
                                    <li key={elt}>{elt}</li>
                                )
                            })
                        )
                        }
                        </ol>

                        <p>{description}</p>
                        <br/>
                        <div className="post-foot well">
                            <div>
                                <h6>Actions disponibles</h6>
                                <a href={`/update/${id}`} className="btn btn-warning">Modifier</a>
                                <button className="btn btn-danger" onClick={() => this.handleSuppress(id)}>Supprimer</button>
                            </div>
                        </div>

                        {error_message !== "" &&
                        <div className="alert alert-danger" role="alert">
                            Erreur lors de la suppression de la recette : {error_message}
                        </div>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

// Méthode qui permet de mettre à jour la state globale du store automatiquement
const mapStateToProps = (state) => {
    return {userDatas: state.userDatas}
  }
  
export default connect(mapStateToProps)(RecipeElement);