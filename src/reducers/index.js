import { combineReducers } from 'redux';
import { loanCalculatorReducer } from './LoanCalculatorReducer';

export default combineReducers({
    loanCalculator: loanCalculatorReducer
});