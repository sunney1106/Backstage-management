/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Navleft extends  Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
    };
    

    render(){
        return (
          <div className="navleft">
            <div className="header">
                <img src="../../resource/img/logo.jpg.jpg" alt=""/>
                111111
            </div>
            <Menu
                mode="inline"
                style={{ width: 256 }}
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="1">Option 1</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
        )
    }
}
export default Navleft;