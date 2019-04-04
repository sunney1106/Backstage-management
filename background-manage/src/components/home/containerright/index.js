import React, { Component } from 'react';
import Header from "./header/header"
import Footer from "./footer/footer"
import Main from './main/main'

class Home extends Component {
  render() {
    return (
      <div className="index">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </div>
    );
  }
}

export default Home;
