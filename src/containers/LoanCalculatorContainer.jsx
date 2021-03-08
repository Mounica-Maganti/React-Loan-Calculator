import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoanCalculator from '../components/LoanCalculator/LoanCalculator';
import LoanCalculatorSummary from '../components/LoanCalculatorSummary/LoanCalculatorSummary';
import * as mapDispatchToProps from '../actions/index';
import '../custom.css';

class LoanCalculatorContainer extends Component {

  render() {
    const { loanCalculator: { loanInfo, showLoanCalculator, showLoanSummary, summaryData }, updateLoanInfo, clearSummaryData } = this.props;

    return (
      <div className="loan-calculator-wrapper">
        {
          showLoanCalculator && (
            <LoanCalculator
              updateLoanInfo={updateLoanInfo}
              clearSummaryData={clearSummaryData}
            />
          )
        }
        {
          showLoanSummary && (
            <LoanCalculatorSummary
              loanInfo={loanInfo}
              summaryData={summaryData}
            />
          )
        }

      </div>
    )
  }
}

const mapStateToProps = ({ loanCalculator }) => {
  return ({
    loanCalculator
  })
}

LoanCalculatorContainer.propTypes = {
  loanCalculator: PropTypes.object.isRequired,
  updateLoanInfo: PropTypes.func.isRequired,
  clearSummaryData: PropTypes.func.isRequired,
};

LoanCalculatorContainer.defaultProps = {
  loanCalculator: {
    loanInfo: [],
    showLoanCalculator: true,
    showLoanSummary: false,
    summaryData: {}
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoanCalculatorContainer);
