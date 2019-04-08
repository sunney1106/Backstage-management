import React, { Component } from 'react';
import Admin from '@/pages/admin/admin'
import "@/resource/style/navleft/navleft.scss"
import '@/resource/style/containerright/index.css'
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin></Admin>
      </div>
    );
  }
}

export default App;
