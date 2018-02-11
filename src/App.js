import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './Reducers';
import DashBoard from './Components/DashBoard';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DashBoard />
      </Provider>
    );
  }
}

export default App;
