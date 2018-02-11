import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarElement from '../SidebarElement';
import './styles.css';

const propTypes = {
  screenMain: PropTypes.string,
};

const defaultProps = {
  screenMain: 'Home',
};

class SideBar extends Component {
  render() {
    const { screenMain } = this.props;
    return (
      <div>
        <SidebarElement
          screenName={'Home'}
          path={'home'}
          screenMain={screenMain}
        />
        <SidebarElement
          screenName={'Section 2'}
          path={'section2'}
          screenMain={screenMain}
        />
      </div>
    );
  }
}

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;
export default SideBar;
