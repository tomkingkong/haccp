import React from 'react';
import { shallow } from 'enzyme';

import { Product, handleEditing } from '.';

describe('Product Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set current product to edit by calling selectProduct', () => {
    const mockFn = jest.fn();
    const mockPush = jest.fn();
    const event = {
      target: {
        id: 'Receiving'
      }
    }
    const history = { push: mockPush}
    const wrapper = shallow(<Product history={history} selectProduct={mockFn} id={1} />);
    wrapper.instance().handleEditing(event)
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith(1);
  });

  it('should set current product to edit by calling selectProduct', () => {
    const mockFn = jest.fn();
    const mockPush = jest.fn();
    const event = {
      target: {
        id: 'Receiving'
      }
    }
    const history = { push: mockPush}
    const wrapper = shallow(<Product history={history} selectProduct={mockFn} id={1}/>);
    wrapper.instance().handleEditing(event)
    expect(mockPush).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith('/plans/receiving');
  });
});