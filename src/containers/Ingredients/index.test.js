import React from 'react';
import { shallow } from 'enzyme';

import { Ingredients, mapDispatchToProps, mapStateToProps } from '.';
import { addIngredient } from '../../actions';

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
});