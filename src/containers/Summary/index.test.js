import React from 'react';
import { shallow } from 'enzyme';

import { Summary, mapStateToProps } from '.';

describe('Summary', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Summary />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
    const expected = {
			product: {},
			ingredients: [],
			company: {}
		};
    expect(wrapper.state()).toEqual(expected);
  });

  it('should update state on mount', () => {
    const mockProductId = 1;
    const mockProducts = [
      { id: 1, name: "CarrotMilk" },
      { id: 2, name: "MeatSticks" }
    ];
    const mockIngredients = [
      { id: 1, name: 'carrots', productId: 1 },
      { id: 2, name: 'meat', productId: 2 },
    ];
    const mockRecPlans = [
      { id: 1, rec_info: 'specific to carrots' },
      { id: 2, rec_info: 'specific to meat' },
    ];
    const mockProPlans = [
      { id: 1, pro_info: 'specific to carrots' },
      { id: 2, pro_info: 'specific to meat' },
    ];
    const mockPackPlans = [
      { id: 1, pack_info: 'specific to carrots' },
      { id: 2, pack_info: 'specific to meat' },
    ];
    const mockInvPlans = [
      { id: 1, inv_info: 'specific to carrots' },
      { id: 2, inv_info: 'specific to meat' },
    ];
    const mockCoInfo = {
      team_member_1_name: 'tim',
      team_member_1_title: 'processor',
      phone: '93142351',
      address: 'here',
      email: 'now',
      name: 'milkmeat'
    };
    const expected = {
			product: { id: 1, name: "MeatSticks" },
			ingredients: [{ 
        id: 1, 
        name: 'carrots', 
        productId: 1,
        inv_info: 'specific to carrots',
        pack_info: 'specific to carrots',
        pro_info: 'specific to carrots',
        rec_info: 'specific to carrots',
      }],
			company: mockCoInfo
    };
    const wrapper = shallow(<Summary
        products={mockProducts}
        ingredients={mockIngredients}
        editProduct={mockProductId}
        receiving={mockRecPlans}
        processing={mockProPlans}
        inventory={mockInvPlans}
        packaging={mockPackPlans}
        companyInfo={mockCoInfo} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expected);
  });

  describe('printSummary', () => {
    it('should call history', () => {
      const mockFn = jest.fn();
      const history = { push: mockFn };
      wrapper = shallow(
        <Summary 
          history={history} 
        />);
      wrapper.instance().printSummary();
      expect(history.push).toHaveBeenCalled();
      expect(history.push).toHaveBeenCalledWith(`/dashboard`);
    });
  });


  describe('mapStateToProps', () => {
    it('should be provided with an ingredients array, plans arrays, and editProduct number from props', () => {
      const mockState = {
        editProduct: 1,
	      ingredients: [ { id: 1, name:'MeatSticks' } ],
        companyInfo: {},
        products: [],
        receiving: [ { id: 1, info: 'receiving'} ],
        inventory: [ { id: 1, info: 'inventory'} ],
        processing: [ { id: 1, info: 'processing'} ],
        packaging: [ { id: 1, info: 'packaging'} ],
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(mockState);
    });
  });
});