import React from 'react';
import { shallow } from 'enzyme';

import { Ingredients } from '.';

describe('Ingredients', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Ingredients ingredients={[]} addIngredient={() => jest.fn()}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});