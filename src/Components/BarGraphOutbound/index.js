import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  BarChart,
  XAxis,
  YAxis,
  LabelList,
  Bar,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import './styles.css';

const propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
};

const defaultProps = {
  data: [],
  dataKey: '',
};

class BarGraphOutbound extends Component {
  getIntegersData = (data, dataKey) => {
    _.map(data, element => {
      element[dataKey] = parseInt(element[dataKey], 10);
    });
  };

  render() {
    const { data, dataKey } = this.props;
    const indexOfMax = _.findIndex(data, _.maxBy(data, dataKey));
    this.getIntegersData(data, dataKey);
    return (
      <div className="graphOne">
        {data ? (
          <ResponsiveContainer width="90%" height={300}>
            <BarChart
              data={this.props.data}
              margin={{ top: 30, right: 10, bottom: 0, left: 15 }}
              barCategoryGap={40}
            >
              <XAxis dataKey="channel" tickLine={false} />
              <YAxis hide={true} />
              <Bar dataKey={dataKey} fill="#5398D0">
                <LabelList dataKey={dataKey} position="top" />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === indexOfMax ? '#0079c8' : '#5398D0'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : null}
      </div>
    );
  }
}

BarGraphOutbound.propTypes = propTypes;
BarGraphOutbound.defaultProps = defaultProps;
export default BarGraphOutbound;
