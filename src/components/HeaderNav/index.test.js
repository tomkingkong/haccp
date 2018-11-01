import React from 'react';
import { shallow } from 'enzyme';

import { HeaderNav } from '.';

describe('HeaderNav', () => {
  let wrapper;
  let history;

  it('should match snapshot with path /', () => { 
    history = { location: { pathname: '/'} }
    const wrapper = shallow(<HeaderNav history={history} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    history = { location: { pathname: '/dashboard'} }
    const wrapper = shallow(<HeaderNav history={history} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should send a user to /login if clicked Log In', () => {
    const mockFn = jest.fn();
    history = { location: { pathname: '/'}, push: mockFn };
    const wrapper = shallow(<HeaderNav history={history} />);
    wrapper.find('.log').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('/login');
  });

  it('should send a user to /signup if clicked Sign Up', () => {
    const mockFn = jest.fn();
    history = { location: { pathname: '/'}, push: mockFn };
    wrapper = shallow(<HeaderNav history={history} />);
    wrapper.find('.sign').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('/signup');
  });

  it('should send a user to / if clicked title card', () => {
    const mockFn = jest.fn();
    history = { location: { pathname: '/'}, push: mockFn };
    wrapper = shallow(<HeaderNav history={history} />);
    wrapper.find('.header-text').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('/');
  });

  it('should send a user to / if clicked Log Out', async () => {
    const mockFn = jest.fn();
    history = { location: { pathname: '/dashboard'}, replace: mockFn };
    wrapper = shallow(<HeaderNav history={history} />);
    await wrapper.find('.logout').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('/');
  });
  
});

