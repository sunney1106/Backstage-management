import React,{Component} from 'react';
import {BrowserRouter as Router ,Route ,Switch ,Redirect} from 'react-router-dom';
import Login from '@/pages/login/login' ;
import Admin from '@/pages/admin/admin' ;
import App from '../App';


class IRouter extends Component{
    render(){
        return (
            <App>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Redirect path="/" to='/login'></Redirect>
                    </Switch>
                </Router>
            </App>
        )
    }
}
export default IRouter;