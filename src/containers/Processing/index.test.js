import React from 'react';
import { shallow } from 'enzyme';

import { Processing } from '.';

describe('Processing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Processing />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});