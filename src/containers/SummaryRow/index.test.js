import React from 'react';
import { shallow } from 'enzyme';

import { SummaryRow } from '.';

describe('SummaryRow', () => {
  it('should match snapshot', () => {
    const mockIngredient = { name:'carrot' }
    const wrapper = shallow(<SummaryRow ingredient={mockIngredient}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with details', () => {
    const mockIngredient = {
      name: 'true',
      receiving_dna: true,
      receiving_letter: true,
      receiving_hazard_bio: true,
      receiving_hazard_chem: true,
      receiving_hazard_phys: true,
      receiving_hazard_handling: 'true',
      receiving_from: 'true',
      receiving_other: 'true',
      inventory_dna: true,
      inventory_hazard_bio: true,
      inventory_hazard_chem: true,
      inventory_hazard_phys: true,
      inventory_hazard_handling: 'true',
      inventory_other: 'true',
      processing_dna: true,
      processing_hazard_bio: true,
      processing_hazard_chem: true,
      processing_hazard_phys: true,
      processing_hazard_handling: 'true',
      processing_other: 'true',
      packaging_dna: true,
      packaging_hazard_bio: true,
      packaging_hazard_chem: true,
      packaging_hazard_phys: true,
      packaging_hazard_handling: 'true',
      packaging_method: 'true',
      packaging_other: 'true'
    }
    const wrapper = shallow(<SummaryRow ingredient={mockIngredient}/>);
    expect(wrapper).toMatchSnapshot();
  });
});


