import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from '.';

describe('Signup Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});