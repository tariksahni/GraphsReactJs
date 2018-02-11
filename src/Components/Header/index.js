import React, { Component } from 'react';
import notificationImage from '../../assets/images/ic-notifications.png';
import messageImage from '../../assets/images/ic-messages.png';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="titleContainer">
          <p className="titleText">Telesales Dashboard</p>
        </div>
        <div className="contentNotifications">
          <div className="messagesContainer">
            <img src={messageImage} className="messageImage" alt="" />
            <div id="message">
              <span id="countMessage">2</span>
            </div>
          </div>
          <div className="notificationsContainer">
            <img src={notificationImage} className="notificationImage" alt="" />
            <div id="notification">
              <span id="countNotification">4</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
