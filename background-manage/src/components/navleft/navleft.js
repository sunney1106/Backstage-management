/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Navleft extends  Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
      }
    render(){
        return (
                <Menu
                    mode="inline"
                    style={{ width: 256 ,minHeight: 800 }}
                    theme = "dark"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                      <Menu.Item key="1">Option 1</Menu.Item>
                    </SubMenu>
                </Menu>
        )
    }
}
export default Navleft;