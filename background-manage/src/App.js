import React, { Component } from 'react';
import 'antd/dist/antd.css'
import "./components/manage.css"
import Management from "./components/manage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Management></Management>
      </div>
    );
  }
}

export default App;
