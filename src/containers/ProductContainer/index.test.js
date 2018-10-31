import React from 'react';
import { shallow } from 'enzyme';

import { ProductContainer } from '.';

describe('ProductContainer', () => {
  let wrapper;

  it('should match snapshot without products', () => {
    wrapper = shallow(<ProductContainer userProducts={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with products', () => {
    const mockProducts = [
      { id: 1, name:'MeatSticks' }
    ]
    wrapper = shallow(<ProductContainer userProducts={mockProducts} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('selectProduct', () => {
    it('should call editProduct', () => {
      const mockFn = jest.fn();
      wrapper = shallow(<ProductContainer userProducts={[]} editProduct={mockFn} />);
      wrapper.instance().selectProduct(1);
      expect(mockFn).toHaveBeenCalled();
    });
  });
});