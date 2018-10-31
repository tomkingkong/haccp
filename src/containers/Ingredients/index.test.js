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

});