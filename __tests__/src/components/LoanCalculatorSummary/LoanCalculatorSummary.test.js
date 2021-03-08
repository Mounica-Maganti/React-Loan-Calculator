import React from 'react';
import { shallow } from 'enzyme';
import LoanCalculatorSummary from '../../../../src/components/LoanCalculatorSummary/LoanCalculatorSummary';


describe('Loan Calculator Summary Tests', () => {
    let props;
    beforeEach(() => {
        props = {
            loanInfo: [
                {
                    monthCount: 1,
                    balance: 123,
                    interest: 2,
                    principle: 2354
                }
            ],
            summaryData: {}
        }
    });

    it('should render Loan Calculator Component', () => {
        const renderedModule = shallow(<LoanCalculatorSummary {...props} />);
        expect(renderedModule).toMatchSnapshot();
        expect(renderedModule.find('#MonthColumnHeader').length).toBe(1);
        expect(renderedModule.find('#BalanceColumnHeader').length).toBe(1);
        expect(renderedModule.find('#InterestColumnHeader').length).toBe(1);
        expect(renderedModule.find('#PrincipalColumnHeader').length).toBe(1);
        expect(renderedModule.find('.loan-summary-container').length).toBe(1);
        expect(renderedModule.find('#tableBody').length).toBe(1);
    });

});