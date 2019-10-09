import React from 'react';

const RecipesItem = (props) => {
    return(
        <div className="entry">
            <h2><a href={`${props.lien_url}`}>{props.titre}</a></h2>
            
            <div className="meta clearfix">
                <i className="fa fa-calendar"></i> {props.datecreation} <i className="fa fa-user"></i> {props.auteur} <i className="fa fa-folder-open"></i> <a href={`/recipes#keywords=${props.categorie}`}>{props.categorie}</a>
            </div>

            <div className="bthumb">
                <img src={ `${process.env.PUBLIC_URL}/img/upload/${props.image_url}`} alt={`${props.image_alt}`} className="img-responsive" style={{ width: '100%'}} />
            </div>

            <p>{props.description}</p>

            <div className="button"><a href={`/recipe/${props.id}`}>Voir la recette...</a></div>
        </div>
    )
}

export default RecipesItem