import React from 'react';
import { shallow } from 'enzyme';

import { Packaging } from '.';

describe('Packaging', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Packaging />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});