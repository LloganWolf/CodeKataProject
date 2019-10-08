import React from 'react';

const RecipesItem = (props) => {
    return(
        <div class="entry">
            <h2><a href={`${props.lien_url}`}>{props.titre}</a></h2>

            <div class="meta clearfix">
                <i class="fa fa-calendar"></i> {props.datecreation} <i class="fa fa-user"></i> {props.auteur} <i class="fa fa-folder-open"></i> <a href={`/recipes#keywords=${props.categorie}`}>{props.categorie}</a> <span class="pull-right"></span>
            </div>

            <div class="bthumb">
                <img src={`${props.image_url}`} alt={`${props.image_alt}`} class="img-responsive" />
            </div>

            <p>{props.description}</p>

            <div class="button"><a href={`${props.lien_url}`}>Voir la recette...</a></div>
        </div>
    )
}

export default RecipesItem
