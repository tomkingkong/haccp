import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from '.';

describe('Signup Component', () => {
let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
	});
	
	it('should handle a change', () => {
		wrapper = shallow(<Signup />);
		const mockEvent = {
			target: {
				name: 'email',
				value: 'ben@gmail.com'
			}
		};
		expect(wrapper.state('email')).toEqual('');
		wrapper.instance().handleChange(mockEvent);
		expect(wrapper.state('email')).toEqual('ben@gmail.com');

	});

	xit('should handle submit', () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			json: () => Promise.resolve({id:1})
			})
		);
		
		const mockHistory = {};
		const mockSetCompanyInfo = jest.fn();
		wrapper = shallow(<Signup 
			history={mockHistory}
			setCompanyInfo={mockSetCompanyInfo}/>);

		const mockEvent = {
			preventDefault: jest.fn()
		};
		wrapper.instance().handleSubmit(mockEvent);
		expect(mockSetCompanyInfo).toHaveBeenCalled();
		// expect(mockHistory).toEqual(['/companyinfo']);
	});
});