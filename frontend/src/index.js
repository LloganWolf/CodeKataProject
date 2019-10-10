import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './Store/configureStore';

import './index.css';
import history from "./history";

import App from './App';
import Recipe from './Components/Recipe';
import MakePost from './Components/MakePost';
import UpdatePost from './Components/UpdatePost';
import Subscription from './Components/Subscription';
import NotFound from './Components/NotFound';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Subscription} />
                    <Route path='/accueil/' component={App} />
                    <Route path='/create/' component={MakePost} />
                    <Route path='/update/' component={UpdatePost} />
                    <Route path='/recipe/' component={Recipe} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
