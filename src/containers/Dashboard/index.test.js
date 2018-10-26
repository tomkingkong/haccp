import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from '.';

describe('Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});