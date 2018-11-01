import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '.';

describe('Home Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should send user to signup on get started click', () => {
    const mockFn = jest.fn();
    const history = { push: mockFn };
    const wrapper = shallow(<Home history={history} />);
    wrapper.find('.get-started').simulate('click');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('/signup');
  });
});