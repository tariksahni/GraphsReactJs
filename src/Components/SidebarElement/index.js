import React, { Component } from 'react';
import homeImage from '../../assets/images/home.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  path: PropTypes.string,
  screenMain: PropTypes.string,
  screenName: PropTypes.string,
};

const defaultProps = {
  path: 'home',
  screenMain: '',
  screenName: '',
};

class SidebarElement extends Component {
  getClassName = text => {
    const { screenMain } = this.props;
    const isActive = screenMain === text ? 'highlight' : '';
    return isActive;
  };
  render() {
    const { screenName, path } = this.props;
    return (
      <div className={`containerSideBar ${this.getClassName(screenName)}`}>
        {screenName !== 'Home' ? (
          <div className="circleImage" />
        ) : (
          <img className="imageIcon" src={homeImage} alt="" />
        )}
        <div className="screenText">
          <NavLink to={path}>{screenName}</NavLink>
        </div>
      </div>
    );
  }
}

SidebarElement.propTypes = propTypes;
SidebarElement.defaultProps = defaultProps;
export default SidebarElement;
