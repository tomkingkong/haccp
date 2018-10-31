import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard, mapStateToProps } from '.';

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

  describe('mapStateToProps', () => {
    it('should be provided with a products array from props', () => {
      const mockState = {
        editProduct: 1,
	      ingredients: [
        ],
        companyInfo: {},
        products: [
          { id: 1, name:'MeatSticks' }
        ],
        receiving: [],
        inventory: [],
        processing: [],
        packaging: [],
      };
      const expected = { 
        products: [
          { id: 1, name:'MeatSticks' }
        ] 
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});