import _ from 'lodash';

export const sumOfCalls = (data, dataKey) => {
  let sum = 0;
  _.map(data, element => {
    element[dataKey] = parseInt(element[dataKey], 10);
    sum += element[dataKey];
  });
  return sum;
};
