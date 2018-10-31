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
});