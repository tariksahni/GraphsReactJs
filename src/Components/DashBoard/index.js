import React, { Component } from 'react';
import Header from '../Header';
import Routes from '../Routes';

import './styles.css';

class DashBoard extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default DashBoard;
