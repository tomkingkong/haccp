import React from 'react';
import { shallow } from 'enzyme';

import { IngredientsForm } from '.';

describe('IngredientsForm Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<IngredientsForm ingredients={[]} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with ingredients', () => {
    const mockIngredients = [
      {id:1, name:'meat'},
      {id:2, name:'carrots'}
    ]
    wrapper = shallow(<IngredientsForm ingredients={mockIngredients}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
    wrapper = shallow(<IngredientsForm />);
    const expected = {
      ingredientName: '',
      ingredients: []
    }
    expect(wrapper.state()).toEqual(expected);
  });

  it('should update state with ingredients on mount', () => {
    const mockIngredients = [
      {id:1, name:'meat'},
      {id:2, name:'carrots'}
    ]
    wrapper = shallow(<IngredientsForm ingredients={mockIngredients}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state().ingredients).toEqual(mockIngredients);
  });

  describe('handleChange', () => {
    it('should change state on input changes', () => {
      const event = {
        target: {
          name: 'ingredientName',
          value: 'booberries'
        }
      };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().ingredientName).toEqual('booberries');
    });
  });
});