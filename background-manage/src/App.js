import React, { Component } from 'react';
import Navleft from "./components/navleft/navleft"
import Home from "./components/containerright/index"
import "@/resource/style/navleft/navleft.css"
import '@/resource/style/containerright/index.css'
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navleft></Navleft>
      
       <Home></Home>
        
      </div>
    );
  }
}

export default App;
