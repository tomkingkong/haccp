import React from 'react';
import { shallow } from 'enzyme';

import { Receiving } from '.';

describe('Receiving', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Receiving />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});