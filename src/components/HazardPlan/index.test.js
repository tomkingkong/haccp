import React from 'react';
import { shallow } from 'enzyme';

import { HazardPlan } from '.';

describe('HazardPlan Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HazardPlan />);
  });

  describe('snapshots', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

    it('should match snapshot with receiving plan', () => {
      wrapper = shallow(<HazardPlan planName={'receiving'} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should match snapshot with inventory plan', () => {
      wrapper = shallow(<HazardPlan planName={'inventory'} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should match snapshot with processing plan', () => {
      wrapper = shallow(<HazardPlan planName={'processing'} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should match snapshot with packaging plan', () => {
      wrapper = shallow(<HazardPlan planName={'packaging'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  

  it('should contain default states', () => {
    const expectedState = {
      gen_dna: false,
      gen_hazard_chem: false,
      gen_hazard_phys: false,
      gen_hazard_bio: false,
			gen_hazard_handling: '',
      gen_other: '',
      receiving_from: '',
      receiving_letter: false,
      inventory_type: '',
      processing_method: '',
			packaging_method: ''
    };
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should not update state if no details are provided', () => {
    const expectedState = {
      gen_dna: false,
      gen_hazard_chem: false,
      gen_hazard_phys: false,
      gen_hazard_bio: false,
			gen_hazard_handling: '',
      gen_other: '',
      receiving_from: '',
      receiving_letter: false,
      inventory_type: '',
      processing_method: '',
			packaging_method: ''
    };
    const details = {};
    const planName = 'receiving';
    wrapper = shallow(<HazardPlan planName={planName} details={details}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should on mount update state with receiving plan details', () => {
    const details = {
      receiving_dna: true,
      receiving_hazard_chem: true,
      receiving_hazard_phys: true,
      receiving_hazard_bio: true,
			receiving_hazard_handling: 'will do',
      receiving_other: 'notes',
      receiving_from: 'vendor',
      receiving_letter: true
    };
    const expectedState = {
      gen_dna: true,
      gen_hazard_chem: true,
      gen_hazard_phys: true,
      gen_hazard_bio: true,
			gen_hazard_handling: 'will do',
      gen_other: 'notes',
      receiving_from: 'vendor',
      receiving_letter: true,
      inventory_type: undefined,
      processing_method: undefined,
			packaging_method: undefined
    };
    const planName = 'receiving';
    wrapper = shallow(<HazardPlan planName={planName} details={details}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should on mount update state with inventory plan details', () => {
    const details = {
      inventory_dna: true,
      inventory_hazard_chem: true,
      inventory_hazard_phys: true,
      inventory_hazard_bio: true,
			inventory_hazard_handling: 'will do',
      inventory_other: 'notes',
      inventory_type: 'freezer'
    };
    const expectedState = {
      gen_dna: true,
      gen_hazard_chem: true,
      gen_hazard_phys: true,
      gen_hazard_bio: true,
			gen_hazard_handling: 'will do',
      gen_other: 'notes',
      receiving_from: undefined,
      receiving_letter: undefined,
      inventory_type: 'freezer',
      processing_method: undefined,
			packaging_method: undefined
    };
    const planName = 'inventory';
    wrapper = shallow(<HazardPlan planName={planName} details={details}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should on mount update state with processing plan details', () => {
    const details = {
      processing_dna: true,
      processing_hazard_chem: true,
      processing_hazard_phys: true,
      processing_hazard_bio: true,
			processing_hazard_handling: 'will do',
      processing_other: 'notes',
      processing_method: 'eating'
    };
    const expectedState = {
      gen_dna: true,
      gen_hazard_chem: true,
      gen_hazard_phys: true,
      gen_hazard_bio: true,
			gen_hazard_handling: 'will do',
      gen_other: 'notes',
      receiving_from: undefined,
      receiving_letter: undefined,
      inventory_type: undefined,
      processing_method: 'eating',
			packaging_method: undefined
    };
    const planName = 'processing';
    wrapper = shallow(<HazardPlan planName={planName} details={details}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should on mount update state with packaging plan details', () => {
    const details = {
      packaging_dna: true,
      packaging_hazard_chem: true,
      packaging_hazard_phys: true,
      packaging_hazard_bio: true,
			packaging_hazard_handling: 'will do',
      packaging_other: 'notes',
      packaging_method: 'boxing'
    };
    const expectedState = {
      gen_dna: true,
      gen_hazard_chem: true,
      gen_hazard_phys: true,
      gen_hazard_bio: true,
			gen_hazard_handling: 'will do',
      gen_other: 'notes',
      receiving_from: undefined,
      receiving_letter: undefined,
      inventory_type: undefined,
      processing_method: undefined,
			packaging_method: 'boxing'
    };
    const planName = 'packaging';
    wrapper = shallow(<HazardPlan planName={planName} details={details}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  });

  describe('handleChange', () => {
    it('should change state on input or checkbox changes', () => {
      const mockFn = jest.fn();
      let event = {
        target: {
          name: 'gen_dna',
          value: true
    }
      };

      wrapper = shallow(<HazardPlan handlePlanEdits={mockFn}/>);
      wrapper.instance().handleChange(event);
      expect(wrapper.state().gen_dna).toEqual(true);

      event = {
        target: {
          name: 'gen_hazard_handling',
          value: 'will do'
        }
      };
      wrapper.instance().handleChange(event);
      expect(wrapper.state().gen_hazard_handling).toEqual('will do');
    });

    it('should call handlePlanEdits with scrubbed state data', () => {
      const mockFn = jest.fn();
      const id = 1;
      const mockCleanedState = {
        _dna: true, 
        _hazard_bio: false, 
        _hazard_chem: false, 
        _hazard_handling: "", 
        _hazard_phys: false, 
        _other: "", 
        id
      };
      const event = {
        target: {
          name: 'gen_dna',
          value: true
        }
      };

      wrapper = shallow(<HazardPlan handlePlanEdits={mockFn} id={id} />);
      wrapper.instance().handleChange(event);
      expect(mockFn).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalledWith(mockCleanedState);
    });
  });
    const planName = 'packaging';
    wrapper = shallow(<HazardPlan planName={planName} details={details}/>);
    wrapper.instance().componentDidMount();
    expect(wrapper.state()).toEqual(expectedState);
  });
});