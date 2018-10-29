import React from 'react';
import { shallow } from 'enzyme';

import { HazardPlan } from '.';

describe('HazardPlan Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<HazardPlan />);
    expect(wrapper).toMatchSnapshot();
  });
});