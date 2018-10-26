import React from 'react';
import { shallow } from 'enzyme';

import { Product } from '.';

describe('Product Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });
});