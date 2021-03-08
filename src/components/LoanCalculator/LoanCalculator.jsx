import React, { useState } from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { LoanCalculatorLocale } from '../../locale/index';
import ErrorAlert from '../../commons/ErrorAlert';
import '../../custom.css';


const LoanCalculator = props => {
  const { updateLoanInfo, clearSummaryData } = props;
  const [loanAmount, setLoanAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [duration, setDuration] = useState(_.get(LoanCalculatorLocale, 'durationArray[0]', 12));
  const [error, setError] = useState({ isError: false, message: '' })

  const handleChange = (e, key) => {
    const { target: { value } } = e;
    const errorObj = {
      isError: isNaN(value) ? true : false,
      message: isNaN(value) ? _.get(LoanCalculatorLocale, 'errorMessage', '') : ''
    };

    switch (key) {
      case 'Loan Amount':
        setLoanAmount(value);
        break;
      case 'Deposit Amount': setDepositAmount(value);
        break;
      case 'Duration': setDuration(value);
        break;
      default: return;
    }
    setError(errorObj);
    clearSummaryData([], false);
  }

  const submitLoanDetails = event => {
    event.preventDefault();
    const loanCalculatedData = getCalculatedResult(loanAmount, depositAmount, duration);
    const monthlyRate = depositAmount / 12;
    const payment = loanAmount * (monthlyRate / (1 - Math.pow(
      1 + monthlyRate, -duration)));
    const summaryData = {
      loanAmount,
      interestRate: parseInt(depositAmount * 100).toFixed(2),
      totalMonths: duration,
      monthlyPayment: payment.toFixed(2),
      totalPaid: (payment * duration).toFixed(2)
    };

    updateLoanInfo(loanCalculatedData, summaryData);
  }

  const getCalculatedResult = (loanAmount, depositAmount, duration) => {
    const resultArray = [];
    const monthlyRate = depositAmount / 12;
    const payment = loanAmount * (monthlyRate / (1 - Math.pow(
      1 + monthlyRate, -duration)));

    for (let count = 0; count < duration; ++count) {
      const resultObject = {};
      let interest = 0;
      let monthlyPrincipal = 0;

      resultObject.monthCount = count + 1;
      resultObject.balance = parseInt(loanAmount).toFixed(2);
      interest = loanAmount * monthlyRate;
      resultObject.interest = parseInt(interest).toFixed(2);
      monthlyPrincipal = payment - interest;
      resultObject.principal = parseInt(monthlyPrincipal).toFixed(2);
      loanAmount = loanAmount - monthlyPrincipal;
      resultArray.push(resultObject);
    }
    return resultArray;
  }

  return (
    <form className="loan-calculator-container">

      <h3 className="margin-0">{_.get(LoanCalculatorLocale, 'header', '')}</h3>
      {
        _.get(error, 'isError', false) && (<ErrorAlert errorMessage={_.get(error, 'message', '')} />)
      }
      <label for="loanAmount">
        {_.get(LoanCalculatorLocale, 'amountLabel', '')}
      </label>
      <input
        className="custom-input"
        type="text"
        name="loanAmount"
        id="loanAmount"
        value={loanAmount}
        autoComplete='off'
        onChange={(e) => handleChange(e, 'Loan Amount')}
      />
      <br />

      <label for="depositAmount">
        {_.get(LoanCalculatorLocale, 'depositLabel', '')}
      </label>
      <input
        className="custom-input"
        type="text"
        id="depositAmount"
        name="depositAmount"
        autoComplete='off'
        value={depositAmount}
        onChange={(e) => handleChange(e, 'Deposit Amount')}
      />
      <br />

      <label for="duration">
        {_.get(LoanCalculatorLocale, 'durationLabel', '')}
      </label>
      <select
        className="custom-input custom-select"
        name="duration"
        id="duration"
        value={duration}
        onChange={(e) => handleChange(e, 'Duration')}
      >
        {
          _.get(LoanCalculatorLocale, 'durationArray', []).map((months, index) => {
            return (<option key={index} value={months}>{months}</option>)
          })
        }
      </select>
      <br />
      <button
        className="custom-button"
        type="submit"
        disabled={loanAmount.length === 0 || depositAmount.length === 0
          || isNaN(loanAmount) || isNaN(depositAmount)
          || error.isError}
        onClick={(e) => submitLoanDetails(e)}
      >
        {_.get(LoanCalculatorLocale, 'submitBtnLabel', '')}
      </button>
    </form>
  );
}

LoanCalculator.propTypes = {
  updateLoanInfo: PropTypes.func.isRequired,
  clearSummaryData: PropTypes.func.isRequired,
};

export default LoanCalculator;