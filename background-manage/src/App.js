import React, { Component } from 'react';
import "@/resource/style/navleft/navleft.scss"
import '@/resource/style/containerright/index.css'
import 'antd/dist/antd.css'
// import Admin from "@/pages/admin/admin"
// import Login from '@/pages/login/login';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <IRouter></IRouter>
        <Admin></Admin> */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
