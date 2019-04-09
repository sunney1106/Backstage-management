/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import NavList from '@/util/navlist';
import logo from '@/resource/img/logo.svg';

const SubMenu = Menu.SubMenu;


class Navleft extends  Component{
    renderNav(){
        let arr = this.state.arr;
        return this.renderMenuItem(arr);
    }
    renderMenuItem(data){
        return data.map((item,key)=>{
            if(item.children){
               return  (
                        <SubMenu key={item.id} title={<span><Icon type={item.type} /><span>{item.title}</span></span>}>
                             {this.renderMenuItem(item.children)}
                        </SubMenu>
                        )
            }else{                           
                return (
                        <Menu.Item key={item.id}>
                            <Icon type={item.type} />
                            {item.title}
                           <Link to={item.path}>{item.title}</Link>
                        </Menu.Item>
                        )
            }
        })
    }
    render(){
        return (
            <div className="navleft">
                <div className="navHead" style={{background:"#001529"}}>
                    <img src={logo} className="App-logo" alt="logo" style={{width:60,height:60}}/>
                    <p>Backstage</p>
                </div>
                <div className="menulist">
                    <Menu style={{ width: 256,height:600 }} theme='dark'>
                        {this.renderMenuItem(NavList)}
                    </Menu>
                </div>
            </div>
        )
    }
}
export default Navleft;