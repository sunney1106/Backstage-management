/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

class Navleft extends  Component{
    constructor(){
        super();
        this.state = {
             arr : [
                {
                    "id":1,
                    "tittle":"首页",
                    "path":"./home"
                },
                {
                    "id":2,
                    "tittle":"用户信息",
                    "path":"./home/info",
                    "children":[
                        {
                            "id":21,
                            "tittle":"用户列表",
                            "path":"./home/list"
                        },
                        {
                            "id":22,
                            "tittle":"用户统计",
                            "path":"./home/sta"
                        }
                    ]
                },
                {
                    "id":3,
                    "tittle":"商品信息",
                    "path":"./home/goods",
                    "children":[
                        {
                            "id":31,
                            "tittle":"商品列表",
                            "path":"./home/list"
                        },
                        {
                            "id":32,
                            "tittle":"商品统计",
                            "path":"./home/sta"
                        }
                    ]
                },
                {
                    "id":4,
                    "tittle":"留言",
                    "path":"./home/mesa"
                },
                {
                    "id":5,
                    "tittle":"相册",
                    "path":"./home/photo"
                },
                {
                    "id":6,
                    "tittle":"权限管理",
                    "path":"./home/per"
                }
        
            ]
        }
    }
    renderNav(){
        let arr = this.state.arr;
        return this.renderMenuItem(arr);
    }
    renderMenuItem(arr){
        return arr.map((item,key)=>{
            if(item.children){
               return  <SubMenu key={item.id} title={item.tittle}>
                  this. renderMenuItem({item.children})
                </SubMenu>
            }else{
                return <Menu.Item key={item.id}>{item.tittle}</Menu.Item>
            }
        })
    }
    render(){
        return (
            <div className="navleft">
                <Menu style={{ width: 256 }} >
                    this. renderMenuItem(this.state.arr)
                </Menu>
            </div>
        )
    }
}
export default Navleft;