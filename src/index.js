import React from 'react';
import ReactDOM from 'react-dom';
import LoanCalculatorContainer from '../src/containers/LoanCalculatorContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <LoanCalculatorContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
