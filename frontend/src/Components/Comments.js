import React from 'react';

const Comments = () => {
    return(
        <div class="comments">
            <div class="title"><h5>2 Comments</h5></div>         
            <ul class="comment-list">
                <li class="comment">
                    <a class="pull-left" href="/">
                        <img class="avatar" src="http://placehold.it/40x40" alt="Nom de l'utilsateur" />
                    </a>
                    <div class="comment-author"><a href="/users/1">Ashok</a></div>
                    <div class="cmeta">Commented on 25/12/2012</div>
                    <p>Nulla facilisi. Sed justo dui, scelerisque ut consectetur vel, eleifend id erat. Phasellus condimentum rutrum aliquet. Quisque eu consectetur erat.</p>
                    <div class="clearfix"></div>
                </li>
                <li class="comment reply">
                    <a class="pull-left" href="/">
                        <img class="avatar" src="http://placehold.it/40x40" alt="Nom de l'utilsateur" />
                    </a>
                    <div class="comment-author"><a href="/users/1">Ashok</a></div>
                    <div class="cmeta">Commented on 25/12/2012</div>
                    <p>Nulla facilisi. Sed justo dui, scelerisque ut consectetur vel, eleifend id erat. Phasellus condimentum rutrum aliquet. Quisque eu consectetur erat.</p>
                    <div class="clearfix"></div>
                </li>
            </ul>
        </div>
    )
}

export default Comments