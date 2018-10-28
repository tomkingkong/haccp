import * as actions from '../actions';

describe('product actions', () => {
  it('should create an object with a product id', () => {
    const mockProductId = 2;
    const results = actions.editProduct(mockProductId);
    const expected = {type:'EDIT_PRODUCT', id:mockProductId};
    expect(results).toEqual(expected);
  });

  it('should create an object with a product id and name', () => {
    const mockProductId = 3;
    const mockProductName = 'MeatSticks';
    const results = actions.addProduct(mockProductId, mockProductName);
    const expected = {type:'ADD_PRODUCT', id:mockProductId, name:mockProductName};
    expect(results).toEqual(expected);
  });
});

describe('company actions', () => {
  it('should create an object with a company id', () => {
    const mockCompanyId = 2;
    const results = actions.setCompanyId(mockCompanyId);
    const expected = {type:'SET_COMPANY_ID', id:mockCompanyId};
    expect(results).toEqual(expected);
  });
});