import React from 'react';
import { shallow } from 'enzyme';

import { Login, mapDispatchToProps } from '.';
import { parseCompanyData } from '../../thunks/parseCompanyData';

describe('Login Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
    const wrapper = shallow(<Login />);
    const expected = {
      email: '',
			password: '',
			passwordType: 'password'
    }
    expect(wrapper.state()).toEqual(expected);
  });

  it('should handle a change', () => {
		const wrapper = shallow(<Login />);
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
		const mockFn = jest.fn();
		const mockHistory = {
			push: mockFn
    };
    const mockParse = jest.fn();
		const wrapper = shallow(<Login 
			history={mockHistory} 
      parseCompanyData={mockParse} />);

		const mockEvent = {
			preventDefault: jest.fn()
		};
		await wrapper.instance().handleSubmit(mockEvent);
		expect(mockParse).toHaveBeenCalled();
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn).toHaveBeenCalledWith('/dashboard');
  });
  
  it('should toggle password visibility', () => {
    const wrapper = shallow(<Login />);
		wrapper.instance().toggleVisibility();
    expect(wrapper.state('passwordType')).toEqual('text');
    wrapper.instance().toggleVisibility();
		expect(wrapper.state('passwordType')).toEqual('password');
  });

  it('should match snapshot with password visibile', () => {
    const wrapper = shallow(<Login />);
		wrapper.instance().toggleVisibility();
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    xit('should call dispatch with parseCompanyData when parseCompanyData is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = parseCompanyData();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.parseCompanyData();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});