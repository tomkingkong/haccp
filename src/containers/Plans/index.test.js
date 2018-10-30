import React from 'react';
import { shallow } from 'enzyme';

import { Plans } from '.';

describe('Plans', () => {
  let wrapper;
  let history;
  beforeEach(() => {
    history = {
      location: {
        pathname: 'receiving'
      }
    };
    wrapper = shallow(<Plans history={history} ingredients={[]}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});