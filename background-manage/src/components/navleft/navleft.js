/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Navleft extends  Component{
    // let arr = [
    //     {
    //         "id":1,
    //         "tittle":"首页",
    //         "path":"./home"
    //     },
    //     {
    //         "id":2,
    //         "tittle":"商品管理",
    //         "path":"./management",
    //         "children":[
    //             {
    //                 "id":21,
    //                 "tittle":"猜我喜欢",
    //                 "path":"./my"
    //             },
    //             {
    //                 "id":22,
    //                 "tittle":"猜你喜欢",
    //                 "path":"./you"
    //             },
    //             {
    //                 "id":23,
    //                 "tittle":"猜他喜欢",
    //                 "path":"./it"
    //             },
    //         ]
    //     },
    //     {
    //         "id":3,
    //         "tittle":"商品信息",
    //         "path":"./information"
    //     },
    //     {
    //         "id":4,
    //         "tittle":"用户信息",
    //         "path":"./user"
    //     }
    // ]
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         arr
    //     }
    // }
    renderNav(){
        let {arr} = this.state
        return this.renderMenu(arr)
    } 
    renderMenu(arr){
        return arr.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.key} title={item.title}>
                        this.renderMenu(item.children)
                    </SubMenu>
                )
            }else{
                return <Menu.Item key={item.key}>{item.title}</Menu.Item>
            }
        })
    }
    render(){
        return (
          <div className="navleft">
            <div className="header">
                <img src="../../resource/img/logo.jpg" alt=""/>
                111111
            </div>
            <Menu
                mode="inline"
                style={{ width: 256 }}
            >
                this.renderNav()
            </Menu>
        </div>
        )
    }
}
export default Navleft;