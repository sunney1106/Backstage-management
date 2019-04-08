import React,{Component} from 'react';
import {HashRouter ,Route ,Switch ,Redirect} from 'react-router-dom';
import App from '@/App';
import Admin from '@/pages/admin/admin';
// import Login from '@/pages/login/login'  
import Home from '@/components/components/home/home';
import UserList from '@/components/components/user/userList/userList'; 
import UserInfo from '@/components/components/user/userInfo/userInfo'; 
import GoodsList from '@/components/components/goods/goodsList/goodsList';
import GoodsInfo from '@/components/components/goods/goodsInfo/goodsInfo'; 
import Photo from '@/components/components/photo/photo';
import Setting from '@/components/components/setting/setting';

class IRouter extends Component{
    render(){
        return (
            <App>
                <HashRouter>
                    <Switch>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/userList" component={UserList}></Route>
                                <Route path="/admin/userInfo" component={UserInfo}></Route>
                                <Route path="/admin/goodsList" component={GoodsList}></Route>
                                <Route path="/admin/goodsInfo" component={GoodsInfo}></Route>
                                <Route path="/admin/photo" component={Photo}></Route>
                                <Route path="/admin/setting" component={Setting}></Route>
                                <Redirect path='/' to='/admin/home'></Redirect>
                            </Admin>
                        } />
                        <Redirect path='/' to='/admin'></Redirect>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}
export default IRouter;