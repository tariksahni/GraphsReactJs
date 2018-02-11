import axios from 'axios';
import { callsMadeAPI, contactedAPI, salesOutboundAPI } from '../../config';
import {
  GRAPH_OUTBOUND_CALLS_MADE,
  GRAPH_OUTBOUND_CONTACTED,
  GRAPH_OUTBOUND_SALES,
} from '../constants';

export const callsMade = () => {
  return dispatch => {
    axios
      .get(callsMadeAPI)
      .then(response => {
        callsMadeSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const callsMadeSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_OUTBOUND_CALLS_MADE,
    payload: result,
  });
};

export const contacted = () => {
  return dispatch => {
    axios
      .get(contactedAPI)
      .then(response => {
        contactedSuccess(dispatch, response.data);
      })
      .catch(err => {
        return err;
      });
  };
};

const contactedSuccess = (dispatch, result) => {
  dispatch({
    type: GRAPH_OUTBOUND_CONTACTED,
    payload: result,
  });
};

export const sales = () => {
  return dispatch => {
    axios
      .get(salesOutboundAPI)
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
    type: GRAPH_OUTBOUND_SALES,
    payload: result,
  });
};
