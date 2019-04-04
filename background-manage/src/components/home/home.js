import React, { Component } from 'react';
import NavLeft from './navleft/navleft'
import Containerright from './containerright/index'

class Home extends Component{
    render(){
        return (
            <div className = "home">
                <NavLeft></NavLeft>
                <Containerright></Containerright>
            </div> 
        )
    }
}
export default Home;