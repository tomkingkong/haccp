import React from 'react';
import { shallow } from 'enzyme';

import { CompanyInfo } from '.';

describe('CompanyInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyInfo />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});