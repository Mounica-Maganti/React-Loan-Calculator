import React from 'react';
import { shallow } from 'enzyme';
import LoanCalculator from '../../../../src/components/LoanCalculator/LoanCalculator';


describe('Loan Calculator Container Tests', () => {
    let props;
    beforeEach(() => {
        props = {
            loanInfo: {},
            updateLoanInfo: jest.fn(),
            clearSummaryData: jest.fn()
        }
    });

    it('should render Loan Calculator Component', () => {
        const renderedModule = shallow(<LoanCalculator {...props} />);
        expect(renderedModule).toMatchSnapshot();
        expect(renderedModule.find('h3').text()).toEqual('Loan Calculator');
        expect(renderedModule.find('#loanAmount').length).toBe(1);
        expect(renderedModule.find('#depositAmount').length).toBe(1);
        expect(renderedModule.find('#duration').length).toBe(1);
        expect(renderedModule.find('.custom-button').length).toBe(1);
    });

    it('should update Loan amount', () => {
        const renderedModule = shallow(<LoanCalculator {...props} />);
        expect(renderedModule).toMatchSnapshot();
        renderedModule.find('#loanAmount').simulate('change', { target: { value: '4567' } }, 'Loan Amount');
    });

    it('should update Deposit amount', () => {
        const renderedModule = shallow(<LoanCalculator {...props} />);
        expect(renderedModule).toMatchSnapshot();
        renderedModule.find('#depositAmount').simulate('change', { target: { value: '4567' } }, 'Deposit Amount');
    });
    it('should update error', () => {
        const renderedModule = shallow(<LoanCalculator {...props} />);
        expect(renderedModule).toMatchSnapshot();
        renderedModule.find('#depositAmount').simulate('change', { target: { value: 'sample' } }, 'Deposit Amount');
    });
    it('should update Duration', () => {
        const renderedModule = shallow(<LoanCalculator {...props} />);
        expect(renderedModule).toMatchSnapshot();
        renderedModule.find('#duration').simulate('change', { target: { value: '12' } }, 'Duration');
    });

    it('should submit Loan Details', () => {
        const renderedModule = shallow(<LoanCalculator {...props} />);
        expect(renderedModule).toMatchSnapshot();
        renderedModule.find('.custom-button').simulate('click', { preventDefault: jest.fn() });
    });
});