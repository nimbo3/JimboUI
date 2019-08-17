import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchResult from "./SearchResult";
import Register from "./Register";

ReactDOM.render((
    <Router>
        <Route exact path="/" component={App}/>
        <Route exact path={"/search"} component={SearchResult}/>
        <Route exact path={"/register"} component={Register}/>
    </Router>

    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
