import * as actions from '../actions';

describe('actions', () => {
  it('should create and object with a product id', () => {
    const mockProductId = 2;
    const results = actions.editProduct(mockProductId);
    const expected = {type:'EDIT_PRODUCT', id:mockProductId};
    expect(results).toEqual(expected);
  });
});