import React from 'react';
import { shallow } from 'enzyme';

import { HeaderNav } from '.';

describe('HeaderNav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderNav />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

