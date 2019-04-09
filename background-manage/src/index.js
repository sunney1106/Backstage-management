import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IRouter from './router/router'


ReactDOM.render(
    <IRouter></IRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
