import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from './Store/configureStore';

import './index.css';
import App from './App';
import Recipe from './Components/Recipe';
import MakePost from './Components/MakePost';
import Users from './Users';
import Subscription from './Components/Subscription';
import NotFound from './Components/NotFound';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Subscription} />
                <Route path='/accueil/' component={App} />
                <Route path='/shares/' component={App} />
                <Route path='/create/' component={MakePost} />
                <Route path='/users/' component={Users} />
                <Route path='/friends/' component={Users} />
                <Route path='/recipe/' component={Recipe} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
