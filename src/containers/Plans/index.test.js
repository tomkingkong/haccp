import React from 'react';
import { shallow } from 'enzyme';

import { Plans, mapDispatchToProps, mapStateToProps } from '.';

describe('Plans Container', () => {
  let wrapper;
  let history;
  beforeEach(() => {
    history = {
      push: jest.fn(),
      location: {
        pathname: 'packaging'
      }
    };
    wrapper = shallow(<Plans history={history} ingredients={[]}/>);
  });

  describe('snapshot tests', () => {
    it('should match snapshot with ingredients and plans', () => {
      history = {location: { pathname: 'packaging'} };
      const mockIngredients = [
        { id: 1, name: 'carrots', productId: 1 },
        { id: 2, name: 'meat', productId: 1 },
      ]
      const mockPlans = [
        { id: 1, info: 'specific to carrots' },
        { id: 2, info: 'specific to meat' }
      ]
      wrapper = shallow(
        <Plans 
          packaging={mockPlans}
          history={history} 
          ingredients={mockIngredients}
          editProduct={1}
        />);
      wrapper.instance().componentDidMount();
      expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot with ingredients but no plans', () => {
      history = {location: { pathname: 'packaging'} };
      const mockIngredients = [
        { id: 1, name: 'carrots', productId: 1 },
        { id: 2, name: 'meat', productId: 1 },
      ]
      const mockPlans = []
      wrapper = shallow(
        <Plans 
          packaging={mockPlans}
          history={history} 
          ingredients={mockIngredients}
          editProduct={1}
        />);
      wrapper.instance().componentDidMount();
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  it('should have default states', () => {
		const expected = {
			productIngredients: [],
			plans: [],
			planTitle: '',
			planCategory: '',
			categories: ['receiving', 'inventory', 'processing', 'packaging', 'summary']
		};
    expect(wrapper.state()).toEqual(expected);
  });

  it('should set plan specific state on mount', () => {
    const mockIngredients = [
      { id: 1, name: 'carrots', productId: 1 },
      { id: 2, name: 'meat', productId: 2 },
    ]
    const mockPlans = [
      { id: 1, info: 'specific to carrots' },
      { id: 2, info: 'specific to meat' }
    ]
    wrapper = shallow(
      <Plans 
        packaging={mockPlans}
        history={history} 
        ingredients={mockIngredients}
        editProduct={1}
      />);

		const expected = {
			productIngredients: [ { id: 1, name: 'carrots', productId: 1 } ],
			plans: [ { id: 1, info: 'specific to carrots' } ],
			planTitle: 'Packaging',
			planCategory: 'packaging',
			categories: ['receiving', 'inventory', 'processing', 'packaging', 'summary']
    };
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expected);
  });

  describe('handlePlanEdits', () => {
    it('should add a plan if none exists', () => {
      const mockIngredients = [
        { id: 1, name: 'carrots', productId: 1 },
        { id: 2, name: 'meat', productId: 2 },
      ]
      const mockPlans = [
        { id: 1, info: 'specific to carrots' }
      ]
      const mockPlan = { id: 2, info: 'specific to meat' };
      const mockFn = jest.fn();
      wrapper = shallow(
        <Plans 
          packaging={mockPlans}
          history={history} 
          ingredients={mockIngredients}
          addPackagingPlan={mockFn}
        />);
      wrapper.instance().componentDidMount();
      wrapper.instance().handlePlanEdits(mockPlan);
      expect(mockFn).toHaveBeenCalled();
    });

    it('should update a plan if one exists', () => {
      const mockIngredients = [
        { id: 1, name: 'carrots', productId: 1 },
        { id: 2, name: 'meat', productId: 2 },
      ]
      const mockPlans = [
        { id: 1, info: 'specific to carrots' },
        { id: 2, info: 'specific to meat' },
      ]
      const mockPlan = { id: 2, info: 'smooches' };
      const mockFn = jest.fn();
      wrapper = shallow(
        <Plans 
          packaging={mockPlans}
          history={history} 
          ingredients={mockIngredients}
          updatePackagingPlan={mockFn}
        />);
      wrapper.instance().componentDidMount();
      wrapper.instance().handlePlanEdits(mockPlan);
      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('handleNextClick', () => {
    it('should call history to push to next page', () => {
      const mockIngredients = []
      const mockPlans = []
      wrapper = shallow(
        <Plans 
          packaging={mockPlans}
          history={history} 
          ingredients={mockIngredients}
          editProduct={1}
        />);
      wrapper.instance().componentDidMount();
      wrapper.instance().handleNextClick();
      expect(history.push).toHaveBeenCalled();
      expect(history.push).toHaveBeenCalledWith(`/plans/summary`);
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
      const expected = { 
        editProduct: 1, 
        ingredients: [ { id: 1, name:'MeatSticks' } ],
        receiving: [ { id: 1, info: 'receiving'} ],
        inventory: [ { id: 1, info: 'inventory'} ],
        processing: [ { id: 1, info: 'processing'} ],
        packaging: [ { id: 1, info: 'packaging'} ],
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with addReceivingPlan when addReceivingPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockAddReceivingPlan = { id: 1, plan: { info: 'planstuff' }, type: 'ADD_RECEIVING_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addReceivingPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockAddReceivingPlan);
    });

    it('should call dispatch with addInventoryPlan when addInventoryPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockAddInventoryPlan = { id: 1, plan: { info: 'planstuff' }, type: 'ADD_INVENTORY_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addInventoryPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockAddInventoryPlan);
    });

    it('should call dispatch with addProcessingPlan when addProcessingPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockAddProcessingPlan = { id: 1, plan: { info: 'planstuff' }, type: 'ADD_PROCESSING_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProcessingPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockAddProcessingPlan);
    });

    it('should call dispatch with addPackagingPlan when addPackagingPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockAddPackagingPlan = { id: 1, plan: { info: 'planstuff' }, type: 'ADD_PACKAGING_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPackagingPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockAddPackagingPlan);
    });

    it('should call dispatch with updateReceivingPlan when updateReceivingPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockUpdateReceivingPlan = { id: 1, plan: { info: 'planstuff' }, type: 'UPDATE_RECEIVING_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateReceivingPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockUpdateReceivingPlan);
    });

    it('should call dispatch with updateInventoryPlan when updateInventoryPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockUpdateInventoryPlan = { id: 1, plan: { info: 'planstuff' }, type: 'UPDATE_INVENTORY_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateInventoryPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockUpdateInventoryPlan);
    });

    it('should call dispatch with updateProcessingPlan when updateProcessingPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockUpdateProcessingPlan = { id: 1, plan: { info: 'planstuff' }, type: 'UPDATE_PROCESSING_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateProcessingPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockUpdateProcessingPlan);
    });

    it('should call dispatch with updatePackagingPlan when updatePackagingPlan is called', () => {
      const mockDispatch = jest.fn();
      const mockUpdatePackagingPlan = { id: 1, plan: { info: 'planstuff' }, type: 'UPDATE_PACKAGING_PLAN' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updatePackagingPlan(1, { info: 'planstuff' });
      expect(mockDispatch).toHaveBeenCalledWith(mockUpdatePackagingPlan);
    });
  });
});