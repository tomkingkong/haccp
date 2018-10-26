import React from 'react';
import { shallow } from 'enzyme';

import { Summary } from '.';

describe('Summary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Summary />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});