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