import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

/* Formulaire de mise à jour de recette */
class UpdateForm extends Component {
    constructor(props) {
		super(props);
        this.state = {
            id: this.props.id,
            title: "",
            category: "",
            ingredient: "",
            image_name: "",
            file: null,
            description: "",
            success_message: false,
            error_message: "",
        }
    }

    componentDidMount() {
        if(this.props.userDatas[0] !== undefined) {
          axios.get(`http://localhost:6002/api/recipes/${this.state.id}`)
              .then(res => {
                  console.log(res.data)
                  this.setState({
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
        } else {
          return <Redirect push to={`/`} />
        }
          
    }

    // Methode de vérification des Mimetypes
    checkMimeType = (event) => {
        let files = event.target.files
        let err = ''
        const types = ['image/jpeg', 'image/png', '']
        
        // Boucle sur l'array des autorisations
        for(let x = 0; x < files.length; x++) {
            if (types.every(type => files[x].type !== type)) {
                err += files[x].type+' n\'est pas accepté comme format de fichier\n';
            }
        };
        
        // Si il y a un message d'erreur
        if(err !== '') {
            event.target.value = null // On vide la sélection
            console.log(err)
            return false;
        }

    return true;

    }

    // Méthode de gestion des champs de formulaire
    handleChange = event => {
        let target = event.target; // On instancie le target
		let value = target.value;
        
        if(target.type === 'checkbox') {
            value = target.checked
        } else if(target.type === 'file') {
            value = target.files[0]
        }
        const name = target.name;
        this.setState({
          [name]: value
        })
    }

    // Methode de gestion des uploads
    handleChangeFile = event => {
        console.log(event.target.files)
        let files = event.target.files
        console.log(files.length)
        if(this.checkMimeType(event)){
            this.setState({
                file: files,
                image_name: files[0].name
            })
        }
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

    //Evenement métier handleSubmit
	handleClick = () => {
        const data = new FormData()
    
        // Test de présence d'un fichier
        if(this.state.file === null) {
            data.append('file', '')
        } else {
            for(let i = 0; i < this.state.file.length; i++) {
                data.append('file', this.state.file[i])
            }
        }
    
        // On met a jour la BDD
        axios.post("http://localhost:6002/upload", data, {})
             .then(res => {
               console.log(res.statusText)
        })
    }

    // Méthode de gestion de la connexion
    handleSubmit = (e, data) => {
        e.preventDefault();

        axios.put(`http://localhost:6002/api/recipes/${this.state.id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': this.props.userDatas[0].token
                }
            })
            .then(res => {
                if(res.status === 200) {
                    this.setState({
                        success_message: true,
                    })
                }
            })
            .catch(err => {
                this.setState({
                    error_message: err.message,
                })
        })	
    }

    render() {
        let { title, category, ingredient, description, success_message, error_message } = this.state
        if(success_message) {
            return <Redirect push to={`/accueil`} />
        }

        return (
            <form className="form-horizontal" onSubmit={e => this.handleSubmit(e, this.state)} onReset={this.handleReset} onClick={this.handleClick}>
                <div className="form-group">
                    <label className="control-label col-md-3" htmlFor="new-recipe_title">Titre</label>
                    <div className="col-md-9">
                        <input id="new-recipe_title" name="title" type="text" className="form-control" required="required" value={title} onChange={this.handleChange} />
                    </div>
                </div>   

                <div className="form-group">
                    <label className="control-label col-md-3" htmlFor="new-recipe_category">Catégorie</label>
                    <div className="col-md-9">                               
                        <select id="new-recipe_category" name="category" className="form-control" value={category} onChange={this.handleChange}>
                            <option value="">&nbsp;</option>
                            <option value="entree">Entrée</option>
                            <option value="plat">Plat</option>
                            <option value="dessert">Dessert</option>
                            <option value="hors">Hors-d'oeuvre</option>
                            <option value="encas">Encas</option>
                        </select>  
                    </div>
                </div>     

                <div class="form-group">
                    <label class="control-label col-md-3" htmlFor="new-recipe_image">Photo</label>
                    <div class="col-md-9">
                        <input id="new-recipe_image" name="image" type="file" onChange={this.handleChangeFile} ref={this.fileInput} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" htmlFor="new-recipe_ingredient">Ingrédients</label>
                    <div className="col-md-9">
                        <input id="new-recipe_ingredient" name="ingredient" type="text" className="form-control" required="required" value={ingredient} onChange={this.handleChange} placeholder="Separés par des ;" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" htmlFor="new-recipe_description">Description</label>
                    <div className="col-md-9">
                        <textarea id="new-recipe_description" name="description" rows="10" className="form-control" required="required" value={description} onChange={this.handleChange} placeholder="Etape de la recette"></textarea>
                    </div>
                </div>

                {success_message &&
                <div className="alert alert-success" role="alert">
                    Votre recette a bien été modifiée
                </div>
                }

                {error_message !== "" &&
                <div className="alert alert-danger" role="alert">
                    Erreur lors de la modification de la recette
                </div>
                }

                <div className="form-group">
                    <div className="col-md-3 col-md-offset-3"> 
                        <button id="publication" name="publication" type="submit" className="btn cb-bouton_connexion">Modifier</button>
                    </div>
                    <div className="col-md-3"> 
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
  
export default connect(mapStateToProps)(UpdateForm);
