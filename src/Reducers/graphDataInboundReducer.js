import {
  GRAPH_INBOUND_CALLS_OFFERED,
  GRAPH_INBOUND_CALLS_HANDLED,
  GRAPH_INBOUND_QUALIFIED_LEADS,
  GRAPH_INBOUND_SALES,
  GRAPH_INBOUND_AHT,
  GRAPH_INBOUND_SERVICE_LEVEL,
} from '../Actions/constants';

const INITIAL_STATE = {
  calls_offered: [],
  calls_handled: [],
  qualified_leads: [],
  sales: [],
  aht: [],
  service_level: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GRAPH_INBOUND_CALLS_OFFERED:
      return { ...state, calls_offered: action.payload };
    case GRAPH_INBOUND_CALLS_HANDLED:
      return { ...state, calls_handled: action.payload };
    case GRAPH_INBOUND_QUALIFIED_LEADS:
      return { ...state, qualified_leads: action.payload };
    case GRAPH_INBOUND_SALES:
      return { ...state, sales: action.payload };
    case GRAPH_INBOUND_AHT:
      return { ...state, aht: action.payload };
    case GRAPH_INBOUND_SERVICE_LEVEL:
      return { ...state, service_level: action.payload };
    default:
      return state;
  }
};
