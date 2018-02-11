import {
  GRAPH_OUTBOUND_CALLS_MADE,
  GRAPH_OUTBOUND_CONTACTED,
  GRAPH_OUTBOUND_SALES,
} from '../Actions/constants';

const INITIAL_STATE = {
  calls_made: [],
  contacted: [],
  sales: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GRAPH_OUTBOUND_CALLS_MADE:
      return { ...state, calls_made: action.payload };
    case GRAPH_OUTBOUND_CONTACTED:
      return { ...state, contacted: action.payload };
    case GRAPH_OUTBOUND_SALES:
      return { ...state, sales: action.payload };
    default:
      return state;
  }
};
