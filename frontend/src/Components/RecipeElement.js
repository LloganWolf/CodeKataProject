import React from 'react';

const RecipeElement = (props) => {
    return(
        <div class="col-md-8 col-sm-8">
            <div class="posts">
                <div class="entry">
                <h2>{props.titre}</h2>
                
                <div class="meta clearfix">
                    <i class="fa fa-calendar"></i> {props.datecreation} <i class="fa fa-user"></i> {props.auteur} <i class="fa fa-folder-open"></i> <a href={`/recipe#keywords=${props.categorie}`}>{props.categorie}</a> <span class="pull-right"><i class="fa fa-comment"></i> 2 Comments</span>
                </div>

                <div class="bthumb">
                    <img src={`${props.image_url}`} alt={`${props.image_alt}`} class="img-responsive" />
                </div>

                <p>
                    <ol>
                    {
                        props.ingredients ? (
                            
                            props.ingredients.map(elt => {
                                return (
                                    <li>{elt}</li>
                                )
                            })
                        ) : ( 
                            <p className="black" style={{textAlign: 'center'}}>
                                <img className="loader-logo" src={process.env.PUBLIC_URL + '/img/loader.png'} alt="chargement" /> loading...
                            </p>
                        )
                    }

                    </ol>
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet.</p>
                <br/>
                <div class="post-foot well">
                    <div>
                        <h6>Actions disponibles</h6>
                        <a href="/delete/1" className="btn btn-danger">Supprimer</a>
                        <a href="/modify/1" className="btn btn-warning">Modifier</a>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default RecipeElement