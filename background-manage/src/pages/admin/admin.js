import React, { Component } from 'react';
import { BrowserRouter as Router ,Route,Redirect,Switch} from 'react-router-dom';
import NavLeft from '@/components/navLeft/navleft'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Home from '@/components/components/home/home.js';
import GoodsList from '@/components/components/goods/goodsList/goodsList';
import GoodsInfo from '@/components/components/goods/goodsInfo/goodsInfo';
import UserList from '@/components/components/user/userList/userList.js';
import UserInfo from '@/components/components/user/userInfo/userInfo';
import Photo from '@/components/components/photo/photo';
import Setting from '@/components/components/setting/setting';

class Admin extends Component{
    render(){
        return (
            <div className = "home">
            <Router>
                <NavLeft></NavLeft>
                <Header></Header>
                <div className="main">
                    <Switch>
                        <Route path="/admin/home" component={Home}></Route>
                        <Route path="/admin/goodsList" component={GoodsList}></Route>
                        <Route path="/admin/goodsInfo" component={GoodsInfo}></Route>
                        <Route path="/admin/userList" component={UserList}></Route>
                        <Route path="/admin/userInfo" component={UserInfo}></Route>
                        <Route path="/admin/photo" component={Photo}></Route>
                        <Route path="/admin/setting" component={Setting}></Route>
                        <Redirect path="/" to="/admin/home"></Redirect>
                    </Switch>
                </div>
                <Footer></Footer>
                </Router>
            </div> 
        )
    }
}
export default Admin;