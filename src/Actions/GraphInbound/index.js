import axios from 'axios';
import {
  ahtAPI,
  callsHandledAPI,
  callsOfferedAPI,
  qualifiedLeadsAPI,
  salesInboundAPI,
  serviceLevelAPI,
} from '../../config';
import {
  GRAPH_INBOUND_AHT,
  GRAPH_INBOUND_CALLS_HANDLED,
  GRAPH_INBOUND_CALLS_OFFERED,
  GRAPH_INBOUND_QUALIFIED_LEADS,
  GRAPH_INBOUND_SALES,
  GRAPH_INBOUND_SERVICE_LEVEL,
} from '../constants';

export const callsOffered = () => {
  return dispatch => {
    axios
      .get(callsOfferedAPI)
      .then(response => {
        callsOfferedSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const callsOfferedSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_INBOUND_CALLS_OFFERED,
    payload: result,
  });
};

export const callsHandled = () => {
  return dispatch => {
    axios
      .get(callsHandledAPI)
      .then(response => {
        callsHandledSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const callsHandledSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_INBOUND_CALLS_HANDLED,
    payload: result,
  });
};

export const qualifiedLeads = () => {
  return dispatch => {
    axios
      .get(qualifiedLeadsAPI)
      .then(response => {
        qualifiedLeadsSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const qualifiedLeadsSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_INBOUND_QUALIFIED_LEADS,
    payload: result,
  });
};

export const sales = () => {
  return dispatch => {
    axios
      .get(salesInboundAPI)
      .then(response => {
        salesSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const salesSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_INBOUND_SALES,
    payload: result,
  });
};

export const aht = () => {
  return dispatch => {
    axios
      .get(ahtAPI)
      .then(response => {
        ahtSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const ahtSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_INBOUND_AHT,
    payload: result,
  });
};

export const serviceLevel = () => {
  return dispatch => {
    axios
      .get(serviceLevelAPI)
      .then(response => {
        serviceLevelSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const serviceLevelSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_INBOUND_SERVICE_LEVEL,
    payload: result,
  });
};
