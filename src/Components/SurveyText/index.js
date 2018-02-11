import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  colorPercentage: PropTypes.string,
  isPercentage: PropTypes.bool,
  percentage: PropTypes.number,
  value: PropTypes.string,
};

const defaultProps = {
  percentage: 0,
  value: '',
  colorPercentage: '',
  isPercentage: false,
};
class SurveyText extends Component {
  getClassName = text => {
    const className = text ? 'value' : 'valueLeft';
    return className;
  };
  render() {
    const { percentage, value, colorPercentage, isPercentage } = this.props;
    return (
      <div className="surveyContainer">
        <div className="percentageContainer">
          <div className={`percentage ${colorPercentage}`}>{percentage}</div>
          {isPercentage ? (
            <div className={`percentageSign ${colorPercentage}`}>%</div>
          ) : null}
        </div>
        <div className={this.getClassName(isPercentage)}>{value}</div>
      </div>
    );
  }
}

SurveyText.propTypes = propTypes;
SurveyText.defaultProps = defaultProps;
export default SurveyText;
