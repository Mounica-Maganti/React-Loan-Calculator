import * as Actions from '../actions/Constants';

const initialState = {
    showLoanCalculator: true,
    showLoanSummary: false,
    loanInfo: [],
    summaryData: {}
};

export const loanCalculatorReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.UPDATE_LOAN_INFO:
            return {
                ...state, loanInfo: action.loanCalculatedInfo,
                summaryData: action.summaryData,
                showLoanSummary: true
            };
        case Actions.CLEAR_SUMMARY_DATA:
            return { ...state, loanInfo: action.data, showLoanSummary: action.showLoanSummary }
        default: return state;
    }
}