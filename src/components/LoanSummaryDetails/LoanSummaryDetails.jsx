import React from 'react';
import '../../custom.css';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { LoanSummaryDetailsLocale } from '../../locale/index';


const LoanSummaryDetails = ({ loanAmount, interestRate, monthlyPayment, totalMonths, totalPaid }) => {

    return (
        <div className="loan-calculator-container loan-summary-details">
            <h4>{_.get(LoanSummaryDetailsLocale, 'header', '')}</h4>
            <div id='principal'>{`Loan Amount - ${loanAmount}`}</div>
            <div id='interestRate'>{`Interest Rate - ${interestRate}`}</div>
            <div id='monthlyPayment'>{`Monthly Payment - ${monthlyPayment}`}</div>
            <div id='totalMonths'>{`Total Months - ${totalMonths}`}</div>
            <div id='totalPaid'>{`Total Paid - ${totalPaid}`}</div>
        </div>
    )
}

LoanSummaryDetails.propTypes = {
    loanAmount: PropTypes.number.isRequired,
    interestRate: PropTypes.number.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
    totalMonths: PropTypes.number.isRequired,
    totalPaid: PropTypes.number.isRequired
};

LoanSummaryDetails.defaultProps = {
    loanAmount: 0,
    interestRate: 0,
    monthlyPayment: 0,
    totalMonths: 0,
    totalPaid: 0
};

export default LoanSummaryDetails;