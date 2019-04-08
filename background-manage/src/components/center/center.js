import React, { Component } from 'react';
// import {BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom'
// import Home from '../components/home/home';
// import GoodsList from '../components/goods/goodsList/goodsList';
// import GoodsInfo from '../components/goods/goodsInfo/goodsInfo';
// import UserList from '../components/user/userList/userList';
// import UserInfo from '../components/user/userInfo/userInfo';
// import Photo from '../components/photo/photo';
// import Setting from '../components/setting/setting';

class Center extends Component {
    render(){
        return (
            <div className="main">
                {/* // <Router>
                //         <div className="main">
                //             <Switch>
                //                 <Route path="/admin/home" component={Home}></Route>
                //                 <Route path="/admin/goodsList" component={GoodsList}></Route>
                //                 <Route path="/admin/goodsInfo" component={GoodsInfo}></Route>
                //                 <Route path="/admin/userList" component={UserList}></Route>
                //                 <Route path="/admin/userInfo" component={UserInfo}></Route>
                //                 <Route path="/admin/photo" component={Photo}></Route>
                //                 <Route path="/admin/setting" component={Setting}></Route>
                //                 <Redirect path="/" to="/admin/home"></Redirect>
                //             </Switch>
                //             <NavLink to='https://www.baidu.com'>hahhahaha</NavLink>
                //         </div>
                // </Router> */}
                { this.props.children}
             </div>
        )
    }
}

export default Center;