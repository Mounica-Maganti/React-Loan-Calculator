import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import LoanCalculatorContainer from '../../../src/containers/LoanCalculatorContainer';
import reducers from '../../../src/reducers/index';


describe('Loan Calculator Container Tests', () => {
    let props;
    beforeEach(() => {
        props = {
            loanCalculator: {
                loanInfo: [],
                showLoanCalculator: true,
                showLoanSummary: false,
                updateLoanInfo: jest.fn(),
                clearSummaryData: jest.fn()
            }
        }
    });

    it('should render Loan Calculator Component', () => {
        const renderedModule = shallow(<LoanCalculatorContainer {...props} store={createStore(reducers)} />);
        expect(renderedModule).toMatchSnapshot();
    })

    it('should render Loan Summary Component', () => {
        props.showLoanSummary = true;
        const renderedModule = shallow(<LoanCalculatorContainer {...props} store={createStore(reducers)} />);
        expect(renderedModule).toMatchSnapshot();
    })
});