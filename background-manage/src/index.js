import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router ,Route,Redirect} from 'react-router-dom';
import App from './App'


ReactDOM.render(
    <Router>
        <Route path="/admin/" component={App} />
    </Router>
    , document.getElementById('root'));


serviceWorker.unregister();
