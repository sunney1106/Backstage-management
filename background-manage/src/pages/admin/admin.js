import React, { Component } from 'react';
import { BrowserRouter as Router ,Route,Redirect,Switch} from 'react-router-dom';
import NavLeft from '@/components/navLeft/navleft'
import Header from '@/components/header/header'
// import Center from '@/components/center/center'
import Footer from '@/components/footer/footer'
import Home from '@/components/components/home/home.js';
import GoodsList from '@/components/components/goods/goodsList/goodsList';
import GoodsInfo from '@/components/components/goods/goodsInfo/goodsInfo';
import UserList from '@/components/components/user/userList/userList.js';
import UserInfo from '@/components/components/user/userInfo/userInfo';
import Photo from '@/components/components/photo/photo';
import Setting from '@/components/components/setting/setting';
import { Link } from 'react-router-dom';

class Admin extends Component{
    render(){
        return (
            <div className = "home">
                <NavLeft></NavLeft>
                <Header></Header>
                        <div className="main">
                <Router>
                            <Switch>
                                <Route path="/admin/home" exact render={()=>{
                                    return "home"
                                }}></Route>
                                <Route path="/admin/goodsList" component={GoodsList}></Route>
                                <Route path="/admin/goodsInfo" component={GoodsInfo}></Route>
                                <Route path="/admin/userList" exact render={()=>{
                                    return "user"
                                }}></Route>
                                <Route path="/admin/userInfo" component={UserInfo}></Route>
                                <Route path="/admin/photo" component={Photo}></Route>
                                <Route path="/admin/setting" component={Setting}></Route>
                                <Redirect path="/" to="/admin/home"></Redirect>
                            </Switch>
                </Router>
                        </div>
                {/* <Center>
                <Router>
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
                </Router>
                </Center> */}
                <Footer></Footer>
            </div> 
        )
    }
}
export default Admin;