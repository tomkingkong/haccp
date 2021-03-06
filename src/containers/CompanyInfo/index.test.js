import React from 'react';
import { shallow } from 'enzyme';

import { CompanyInfo, mapStateToProps, mapDispatchToProps } from '.';

describe('CompanyInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompanyInfo />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
		const expected = {
			id: '',
      name: '', 
      address: '',
      phone: '',
      team_member_1_name: '',
      team_member_1_title: ''
		};
    expect(wrapper.state()).toEqual(expected);
  });

  it('should update state on mount', () => {
    const mockData = {
      id: 1,
      name: 'MeatFactory', 
      address: '34 address st',
      phone: '934103451',
      team_member_1_name: 'Lucah',
      team_member_1_title: 'Processor'
    }
    wrapper = shallow(<CompanyInfo companyInfo={mockData}/>);		
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(mockData);
  });

  describe('handleSubmit', async () => {
    const mockFn = jest.fn();
		const mockHistory = {
			push: mockFn
    };
    const mockParse = jest.fn();
		const wrapper = shallow(<CompanyInfo 
			history={mockHistory} 
      setCompanyInfo={mockParse} />);

		const mockEvent = {
			preventDefault: jest.fn()
		};
		await wrapper.instance().handleSubmit(mockEvent);
		expect(mockParse).toHaveBeenCalled();
		expect(mockFn).toHaveBeenCalled();
		expect(mockFn).toHaveBeenCalledWith('/dashboard');
  });

  describe('handleChange', () => {
    it('should change state on input or checkbox changes', () => {
      const event = {
        target: {
          name: 'name',
          value: 'Schmeckles'
        }
      };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().name).toEqual('Schmeckles');
    });
  });

  describe('mapStateToProps', () => {
    it('should be provided with a products array from props', () => {
      const mockState = {
        editProduct: 1,
	      ingredients: [
        ],
        companyInfo: {
          id: 1,
          name: 'MeatFactory', 
          email: 'meatFactory@meat.com',
          address: '34 address st',
          phone: '934103451',
          team_member_1_name: 'Lucah',
          team_member_1_title: 'Processor'
        },
        products: [
          { id: 1, name:'MeatSticks' }
        ],
        receiving: [],
        inventory: [],
        processing: [],
        packaging: [],
      };
      const expected = { 
        companyInfo: {
          id: 1,
          name: 'MeatFactory', 
          email: 'meatFactory@meat.com',
          address: '34 address st',
          phone: '934103451',
          team_member_1_name: 'Lucah',
          team_member_1_title: 'Processor'
        }
      };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setCompanyInfo when setCompanyInfo is called', () => {
      const mockDispatch = jest.fn();
      const mockSetCompanyInfo = { info: {name:"pickles"}, type: 'SET_COMPANY_USER' };
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCompanyInfo({name: "pickles"});
      expect(mockDispatch).toHaveBeenCalledWith(mockSetCompanyInfo);
    });
  });
});