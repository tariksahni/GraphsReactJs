import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sumOfCalls } from '../../utils/helper/sumOfCalls';
import BarGraphOutbound from '../BarGraphOutbound';
import SurveyText from '../SurveyText';
import Dropdown from '../Dropdown';
import './styles.css';

const propTypes = {
  callsMade: PropTypes.func,
  contacted: PropTypes.func,
  graphDataOutbound: PropTypes.object,
  sales: PropTypes.func,
};

const defaultProps = {
  graphDataOutbound: {},
};

class GraphOutboundContent extends Component {
  componentWillMount = () => {
    this.props.callsMade();
    this.props.contacted();
    this.props.sales();
  };

  render() {
    const { calls_made, contacted, sales } = this.props.graphDataOutbound;
    const sumOfCallsMade = sumOfCalls(calls_made, 'calls_made');
    const sumOfContacted = sumOfCalls(contacted, 'contacted');
    const sumOfSales = sumOfCalls(sales, 'sales');
    return (
      <div>
        <div className="whiteCardIncomingOutbound">
          <div className="topLabel">
            <p className="inboundText">OUTBOUND CALLS (000s)</p>
            <div className="filterDivision">
              <Dropdown />
            </div>
          </div>
          <div className="borderLine" />

          <div className="graphs">
            <BarGraphOutbound data={calls_made} dataKey={'calls_made'} />
            <BarGraphOutbound data={contacted} dataKey={'contacted'} />
            <BarGraphOutbound data={sales} dataKey={'sales'} />
          </div>
          <div className="arrowContainer">
            <ul id="progress">
              <li className="li callsMade ">Calls Made</li>
              <li className="li callsContacted">Contacted</li>
              <li className="salesArrow">Sales</li>
            </ul>
          </div>
          <div className="surveyDataContainerOutbound">
            <div className="surveyTextOne">
              <SurveyText
                percentage={Math.round(sumOfContacted / sumOfCallsMade * 100)}
                isPercentage
                value="Reach Out"
                colorPercentage="red"
              />
            </div>
            <div className="surveyTextTwo">
              <SurveyText
                percentage={Math.round(sumOfSales / sumOfContacted * 100)}
                isPercentage
                value="Conversion Rate"
                colorPercentage="green"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GraphOutboundContent.propTypes = propTypes;
GraphOutboundContent.defaultProps = defaultProps;
export default GraphOutboundContent;
