import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
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

class BarGraphInbound extends Component {
  getIntegersData = (data, dataKey) => {
    _.map(data, element => {
      element[dataKey] = parseInt(element[dataKey], 10);
    });
  };
  render() {
    const { data, dataKey } = this.props;
    this.getIntegersData(data, dataKey);
    return (
      <div className="graphOne">
        {data ? (
          <ResponsiveContainer width="90%" height={300}>
            <BarChart
              data={data}
              barCategoryGap={20}
              margin={{ top: 0, right: 10, bottom: 0, left: -15 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#5398D0"
              />
              <XAxis dataKey="channel" tickLine={false} />
              <YAxis tickLine={false} />
              <Tooltip />
              <Bar dataKey={dataKey} fill="#5398D0" />
            </BarChart>
          </ResponsiveContainer>
        ) : null}
      </div>
    );
  }
}

BarGraphInbound.propTypes = propTypes;
BarGraphInbound.defaultProps = defaultProps;
export default BarGraphInbound;
