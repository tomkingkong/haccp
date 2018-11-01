import React from 'react';
import { shallow } from 'enzyme';

import { ProductContainer, mapDispatchToProps } from '.';

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

  describe('addNewProduct', () => {
    it('should push to products page', () => {
      const mockFn = jest.fn();
      const history = { push: mockFn }
      wrapper = shallow(<ProductContainer history={history} userProducts={[]} />);
      wrapper.instance().addNewProduct();
      expect(mockFn).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalledWith('/products');
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with editProduct when editProduct is called', () => {
      const mockDispatch = jest.fn();
      const mockEditProduct = { id:1, type: 'EDIT_PRODUCT' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.editProduct(1);
      expect(mockDispatch).toHaveBeenCalledWith(mockEditProduct);
    });
  });
});