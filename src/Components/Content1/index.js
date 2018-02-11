import React, { Component } from 'react';
import SideBar from '../SideBar';
import './styles.css';

class Content1 extends Component {
  render() {
    return (
      <div className="containerMain">
        <div className="sideBar">
          <SideBar screenMain={'Section 2'} />
        </div>
        <div className="contentTwo">
          <p className="comimgSoonText">Coming Soon</p>
        </div>
      </div>
    );
  }
}

export default Content1;
