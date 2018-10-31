import React from 'react';
import { shallow } from 'enzyme';

import { Products, mapDispatchToProps, mapStateToProps } from '.';

describe('Products', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should default state', () => {
    expect(wrapper.state()).toEqual({ name: '' });
  });

  describe('handleChange', () => {
    it('should change state on input or checkbox changes', () => {
      let event = {
        target: {
          name: 'name',
          value: 'MeatSticks'
        }
      };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().name).toEqual('MeatSticks');
    });
  });

  describe('handleNextClick', () => { });

  describe('mapStateToProps', () => {
    it('should be provided with a company object from props', () => {
      const mockState = {
        editProduct: 1,
	      ingredients: [
          { id: 1, name:'MeatSticks' }
        ],
        companyInfo: {
          name: 'illegalPancakes',
          address: 'here-now'
        },
        products: [],
        receiving: [],
        inventory: [],
        processing: [],
        packaging: [],
      };
      const expected = { 
        companyInfo: {
          name: 'illegalPancakes',
          address: 'here-now'
        }
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with editProduct when editProduct is called', () => {
      const mockDispatch = jest.fn();
      const mockEditProduct = { id: 1, type: 'EDIT_PRODUCT' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.editProduct(1);
      expect(mockDispatch).toHaveBeenCalledWith(mockEditProduct);
    });

    it('should call dispatch with addProduct when addProduct is called', () => {
      const mockDispatch = jest.fn();
      const mockAddProduct = { id: 1, name:'MeatSticks', type: 'ADD_PRODUCT' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProduct(1, 'MeatSticks');
      expect(mockDispatch).toHaveBeenCalledWith(mockAddProduct);
    });
  });
});