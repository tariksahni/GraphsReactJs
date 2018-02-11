import React, { Component } from 'react';
import SideBar from '../SideBar';
import GraphInboundContent from '../../Containers/GraphInboundContent';
import GraphOutboundContent from '../../Containers/GraphOutboundContent';
import './styles.css';

class Content extends Component {
  render() {
    return (
      <div className="containerMain">
        <div className="sideBar">
          <SideBar screenMain={'Home'} />
        </div>
        <div className="content">
          <GraphInboundContent />
          <GraphOutboundContent />
        </div>
      </div>
    );
  }
}

export default Content;
