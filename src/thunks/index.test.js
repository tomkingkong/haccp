import * as actions from '../actions';
import { parseCompanyData, reducePlanData } from './parseCompanyData';

describe('parseCompanyData', () => {

  let mockData;

  beforeEach(() => {
    mockData = {
        id: 1,
        name: 'a name as a string',
        address: 'a string that is an address',
        phone: 'a string that is a phone number',
        team_member_1_name: 'a string that is a name',
        team_member_1_title: 'a string that is the title',
        products: [
          {
            id: 1,
            name: 'a name as a string',
            ingredients: [
              {
                id: 1,
                receiving_from: 'data',
                receiving_letter: 'data',
                receiving_dna: 'data',
                receiving_other: 'data',
                receiving_hazard_bio: 'data',
                receiving_hazard_chem: 'data',
                receiving_hazard_phys: 'data',
                receiving_hazard_handling: 'data',
                inventory_type: 'data',
                inventory_dna: 'data',
                inventory_other: 'data',
                inventory_hazard_bio: 'data',
                inventory_hazard_chem: 'data',
                inventory_hazard_phys: 'data',
                inventory_hazard_handling: 'data',
                processing_method: 'data',
                processing_dna: 'data',
                processing_other: 'data',
                processing_hazard_bio: 'data',
                processing_hazard_chem: 'data',
                processing_hazard_phys: 'data',
                processing_hazard_handling: 'data',
                packaging_method: 'data',
                packaging_dna: 'data',
                packaging_other: 'data',
                packaging_hazard_bio: 'data',
                packaging_hazard_chem: 'data',
                packaging_hazard_phys: 'data',
                packaging_hazard_handling: 'data'
              }
            ]
          }
        ]
    }
  });

  it('should deconstruct and store company data', () => {
    const mockDispatch = jest.fn();
    const thunk = parseCompanyData(mockData);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
});

describe('reducePlanData', () => {
 let mockData = {
  ingredient: {
    id: 1,
    receiving_from: 'data',
    receiving_letter: 'data',
    receiving_dna: 'data',
    receiving_other: 'data',
    receiving_hazard_bio: 'data',
    receiving_hazard_chem: 'data',
    receiving_hazard_phys: 'data',
    receiving_hazard_handling: 'data',
    inventory_type: 'data',
    inventory_dna: 'data',
    inventory_other: 'data',
    inventory_hazard_bio: 'data',
    inventory_hazard_chem: 'data',
    inventory_hazard_phys: 'data',
    inventory_hazard_handling: 'data',
    processing_method: 'data',
    processing_dna: 'data',
    processing_other: 'data',
    processing_hazard_bio: 'data',
    processing_hazard_chem: 'data',
    processing_hazard_phys: 'data',
    processing_hazard_handling: 'data',
    packaging_method: 'data',
    packaging_dna: 'data',
    packaging_other: 'data',
    packaging_hazard_bio: 'data',
    packaging_hazard_chem: 'data',
    packaging_hazard_phys: 'data',
    packaging_hazard_handling: 'data'
  }
 }

  it('should match ingredients to their plan data', () => {
    const results = reducePlanData(mockData.ingredient, 'receiving');
    const expected = {
      receiving_from: 'data',
      receiving_letter: 'data',
      receiving_dna: 'data',
      receiving_other: 'data',
      receiving_hazard_bio: 'data',
      receiving_hazard_chem: 'data',
      receiving_hazard_phys: 'data',
      receiving_hazard_handling: 'data',
    }
    expect(results).toEqual(expected);
  });
});