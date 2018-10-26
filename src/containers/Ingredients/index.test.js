import React from 'react';
import { shallow } from 'enzyme';

import { Ingredients } from '.';

describe('Ingredients', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Ingredients />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});