import React, { Component } from 'react';
// import Navleft from "./components/navleft/navleft"
// import Home from "./components/containerright/inde
import Home from './components/home/home'
import "@/resource/style/navleft/navleft.css"
import '@/resource/style/containerright/index.css'
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div className="App">   
       <Home></Home>
      </div>
    );
  }
}

export default App;
