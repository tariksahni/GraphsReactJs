import { combineReducers } from 'redux';
import graphDataInboundReducer from './graphDataInboundReducer';
import graphDataOutboundReducer from './graphDataOutboundReducer';

export default combineReducers({
  graphDataInbound: graphDataInboundReducer,
  graphDataOutbound: graphDataOutboundReducer,
});
