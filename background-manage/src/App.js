import React, { Component } from 'react';
import 'antd/dist/antd.css'
import "./components/manage.css"
import Navleft from "./components/navleft/navleft"
// import Management from "./components/manage"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navleft></Navleft>
        {/* <Management></Management> */}
      </div>
    );
  }
}

export default App;
