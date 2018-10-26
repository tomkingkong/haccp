import React from 'react';
import { shallow } from 'enzyme';

import { Inventory } from '.';

describe('Inventory', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Inventory />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});