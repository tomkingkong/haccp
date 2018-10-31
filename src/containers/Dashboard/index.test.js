import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from '.';

describe('Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default userProducts state', () => {
    const expected = [];
    expect(wrapper.state().userProducts).toEqual(expected);
  });

  it('should userProducts state on mount', () => {
    const mockData = [
      { name: 'Meat Sticks', id: 1 },
      { name: 'Canned Ham', id: 2 },
      { name: 'SnickleFritz', id: 3 }
    ];
    wrapper = shallow(<Dashboard products={mockData} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state().userProducts).toEqual(mockData);
  });
});