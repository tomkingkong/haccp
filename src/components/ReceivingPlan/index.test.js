import React from 'react';
import { shallow } from 'enzyme';

import { ReceivingPlan } from '.';

describe('ReceivingPlan Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ReceivingPlan />);
    expect(wrapper).toMatchSnapshot();
  });
});