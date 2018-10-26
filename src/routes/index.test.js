import React from 'react';
import { shallow } from 'enzyme';

import Routes from '.';

describe('Routes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});