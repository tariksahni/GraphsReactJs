import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sumOfCalls } from '../../utils/helper/sumOfCalls';
import BarGraphInbound from '../BarGraphInbound';
import Dropdown from '../Dropdown';
import SurveyText from '../SurveyText';
import './styles.css';

const propTypes = {
  aht: PropTypes.func,
  callsHandled: PropTypes.func,
  callsOffered: PropTypes.func,
  graphDataInbound: PropTypes.object,
  qualifiedLeads: PropTypes.func,
  sales: PropTypes.func,
  serviceLevel: PropTypes.func,
};

const defaultProps = {
  graphDataInbound: {},
};

class GraphInboundContent extends Component {
  componentWillMount = () => {
    this.props.callsOffered();
    this.props.callsHandled();
    this.props.qualifiedLeads();
    this.props.sales();
    this.props.aht();
    this.props.serviceLevel();
  };

  render() {
    const {
      aht,
      calls_handled,
      calls_offered,
      qualified_leads,
      sales,
      service_level,
    } = this.props.graphDataInbound;
    const sumOfCallsOffered = sumOfCalls(calls_offered, 'calls_offered');
    const sumOfCallsHandled = sumOfCalls(calls_handled, 'calls_handled');
    const sumOfQualifiedLeads = sumOfCalls(qualified_leads, 'qualified_leads');
    const sumOfSales = sumOfCalls(sales, 'sales');
    const sumOfAht = sumOfCalls(aht, 'aht');
    const sumOfServiceLevel = sumOfCalls(
      service_level,
      'calls_within_service_level',
    );
    return (
      <div>
        <div className="whiteCardIncoming">
          <div className="topLabel">
            <p className="inboundText">INBOUND CALLS (000s)</p>
            <div className="filterDiv">
              <Dropdown />
            </div>
          </div>
          <div className="borderLineInbound" />
          <div className="legendContainer">
            <div className="legend" />
            <p className="legendText">Actual</p>
          </div>
          <div className="graphsInbound">
            <BarGraphInbound data={calls_offered} dataKey={'calls_offered'} />
            <BarGraphInbound data={calls_handled} dataKey={'calls_handled'} />
            <BarGraphInbound
              data={qualified_leads}
              dataKey={'qualified_leads'}
            />
            <BarGraphInbound data={sales} dataKey={'sales'} />
          </div>
          <ul id="progressInbound">
            <li className="li callsOffered ">Calls Offered</li>
            <li className="li callsHandled">Calls Handled</li>
            <li className="li callsLeads">Qualified Leads</li>
            <li className="salesArrow">Sales</li>
          </ul>

          <div className="surveyDataContainerWhite">
            <div className="surveyTextInboundOne">
              <SurveyText
                percentage={Math.round(
                  (sumOfCallsOffered - sumOfCallsHandled) *
                    100 /
                    sumOfCallsOffered,
                )}
                isPercentage
                value="Abandoned/ Deflected"
                colorPercentage="green"
              />
            </div>
            <div className="surveyTextInboundTwo">
              <SurveyText
                percentage={Math.round(
                  sumOfQualifiedLeads / sumOfCallsHandled * 100,
                )}
                isPercentage
                value="Qualification Rate"
                colorPercentage="red"
              />
            </div>
            <div className="surveyTextInboundThree">
              <SurveyText
                percentage={Math.round(sumOfSales / sumOfQualifiedLeads * 100)}
                isPercentage
                value="Conversion Rate"
                colorPercentage="green"
              />
            </div>
          </div>
          <div className="surveyDataContainerGrey">
            <div className="surveyTextOneInboundGrey">
              <SurveyText
                percentage={Math.round(
                  sumOfServiceLevel / sumOfCallsOffered * 100,
                )}
                isPercentage
                value="Service Level"
                colorPercentage="red"
              />
            </div>
            <div className="surveyTextTwoInboundGrey">
              <SurveyText
                percentage={sumOfAht}
                value="AHT"
                colorPercentage="green"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GraphInboundContent.propTypes = propTypes;
GraphInboundContent.defaultProps = defaultProps;
export default GraphInboundContent;
