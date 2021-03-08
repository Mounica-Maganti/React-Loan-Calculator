import * as Constants from './Constants';

export const updateLoanInfo = (loanCalculatedInfo, summaryData) => (
    {
        type: Constants.UPDATE_LOAN_INFO,
        loanCalculatedInfo,
        summaryData
    }
);

export const clearSummaryData = (data, showLoanSummary) => (
    {
        type: Constants.CLEAR_SUMMARY_DATA,
        data,
        showLoanSummary
    }
);


