import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from '.';

describe('Signup Component', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
	});

	it('should have default states', () => {
		const wrapper = shallow(<Signup />);
		const expected = {
			password: '',
			email: ''
		}
    expect(wrapper.state()).toEqual(expected);
	});
	
	it('should handle a change', () => {
		const wrapper = shallow(<Signup />);
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

	it('should handle submit', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({id:1}));
		const mockFn = jest.fn();
		const mockHistory = {
			push: mockFn
		};
		const wrapper = shallow(<Signup 
			history={mockHistory} />);

		const mockEvent = {
			preventDefault: jest.fn()
		};
		await wrapper.instance().handleSubmit(mockEvent);
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn).toHaveBeenCalledWith('/companyinfo');
	});

	describe('goToLogin', () => {
		it('should send the user to login page', () => {
			const mockFn = jest.fn();
			const mockHistory = {
				push: mockFn
			};
			const wrapper = shallow(<Signup 
				history={mockHistory}/>);
			wrapper.instance().goToLogin();
			expect(mockFn).toHaveBeenCalled();
			expect(mockFn).toHaveBeenCalledWith('/login');
		});
	});
});