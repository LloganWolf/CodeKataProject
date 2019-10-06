import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Subscription from './Components/Subscription';
import NotFound from './Components/NotFound';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Subscription} />
            <Route path='/accueil/' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
