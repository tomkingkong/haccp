import React from 'react';
import { shallow } from 'enzyme';

import { ProductContainer } from '.';

describe('ProductContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProductContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});