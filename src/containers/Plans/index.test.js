import React from 'react';
import { shallow } from 'enzyme';

import { Plans } from '.';

describe('Plans Container', () => {
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

  it('should match snapshot with receiving path', () => {
    history = {location: { pathname: 'receiving'} };
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with inventory path', () => {
    history = {location: { pathname: 'inventory'} };
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with processing path', () => {
    history = {location: { pathname: 'processing'} };
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with packaging path', () => {
    history = {location: { pathname: 'packaging'} };
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
		const categories = ['receiving', 'inventory', 'processing', 'packaging', 'summary'];
    expect(wrapper).toMatchSnapshot();
  });
});