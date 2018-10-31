import React from 'react';
import { shallow } from 'enzyme';

import { Ingredients, mapDispatchToProps, mapStateToProps } from '.';

describe('Ingredients', () => {
  let wrapper;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<Ingredients ingredients={[]} addIngredient={mockFn}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe.skip('handleNewIngredient', () => {
    it('should call addIngredient', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve());
      wrapper = shallow(<Ingredients 
        ingredients={[]} 
        addIngredient={mockFn} 
        editProduct={1} />);
      await wrapper.instance().handleNewIngredient('name');
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('handleNextClick', () => {
    it('should call history to push to next page', () => {
      const mockHistory = {
        push: jest.fn()
      }
      wrapper = shallow(<Ingredients 
        ingredients={[]}
        history={mockHistory} />);
      wrapper.instance().handleNextClick();
      expect(mockHistory.push).toHaveBeenCalled();
    });
  });

  describe('editIngredients', () => {
    it('should return an array of editable ingredients', () => {
      const mockIngredients = [
        { productId: 1, name: 'carrots' },
        { productId: 2, name: 'fish' },
        { productId: 2, name: 'cheese' },
      ];
      const expected = [
        { productId: 1, name: 'carrots' }
      ];
      wrapper = shallow(<Ingredients 
        editProduct={1}
        ingredients={mockIngredients} />);
      const results = wrapper.instance().editIngredients();
      expect(results).toEqual(expected);
    });
  });

  describe('mapStateToProps', () => {
    it('should be provided with a editProduct number and ingredients array from props', () => {
      const mockState = {
        editProduct: 1,
	      ingredients: [
          { id: 1, name:'MeatSticks' }
        ],
        companyInfo: {},
        products: [],
        receiving: [],
        inventory: [],
        processing: [],
        packaging: [],
      };
      const expected = { 
        editProduct: 1, 
        ingredients: [
          { id: 1, name:'MeatSticks' }
        ] 
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with addIngredient when addIngredient is called', () => {
      const mockDispatch = jest.fn();
      const mockAddIngredient = { id: 1, name: 'carrots', productId: 2, type: 'ADD_INGREDIENT' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addIngredient(1, 'carrots', 2);
      expect(mockDispatch).toHaveBeenCalledWith(mockAddIngredient);
    });
  });
});