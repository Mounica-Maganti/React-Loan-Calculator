import React from 'react';
import { shallow } from 'enzyme';
import LoanSummaryDetails from '../../../../src/components/LoanSummaryDetails/LoanSummaryDetails';


describe('Loan Calculator Summary Tests', () => {
    let props;
    beforeEach(() => {
        props = {
            loanAmount: 2345,
            interestRate: 2,
            monthlyPayment: 200,
            totalMonths: 12,
            totalPaid: 1099
        }
    });

    it('should render Loan Calculator Component', () => {
        const renderedModule = shallow(<LoanSummaryDetails {...props} />);
        expect(renderedModule).toMatchSnapshot();
        expect(renderedModule.find('#principal').length).toBe(1);
        expect(renderedModule.find('#totalMonths').text()).toEqual('Total Months - 12');
        expect(renderedModule.find('#interestRate').text()).toEqual('Interest Rate - 2');
        expect(renderedModule.find('h4').text()).toEqual('Loan Summary');
    });
});