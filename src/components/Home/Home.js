import React, { Component } from 'react';

import HomeJumbotron from './HomeJumbotron';
import CarduriHome from './CarduriHome';

import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeJumbotron />
        <CarduriHome />
      </div>
    );
  }
}

export default Home;
