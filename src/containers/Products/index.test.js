import React from 'react';
import { shallow } from 'enzyme';

import { Products } from '.';

describe('Products', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});