import React from 'react';
import { shallow } from 'enzyme';

import { Packaging } from '.';

describe('Packaging', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Packaging ingredients={[]}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});