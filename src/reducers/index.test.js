import { editProduct } from '../reducers/editProduct';
import { products } from '../reducers/products';
import { ingredients } from '../reducers/ingredients';
import { receiving } from '../reducers/receiving';
import { inventory } from '../reducers/inventory';
import { processing } from '../reducers/processing';
import { packaging } from '../reducers/packaging';
import { companyInfo } from '../reducers/companyInfo';

describe('editProduct reducer', () => {
  it('should return the initial state', () => {
    const expected = 0;
    const results = editProduct(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state with id', () => {
    const initialState = 0;
    const mockId = 2;
    const mockAction = {id:mockId, type: 'EDIT_PRODUCT'};
    const results = editProduct(initialState, mockAction);
    const expected = 2;
    expect(results).toEqual(expected);
  });
});

describe('companyInfo reducer', () => {
  it('should return the initial state', () => {
    const expected = 0;
    const results = companyInfo(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state with id', () => {
    const initialState = 0;
    const mockId = 2;
    const mockAction = {id:mockId, type: 'SET_COMPANY_ID'};
    const results = companyInfo(initialState, mockAction);
    const expected = 2;
    expect(results).toEqual(expected);
  });
});

describe('products reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = products(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state array containing a product object', () => {
    const initialState = [];
    const mockProduct = {id:1, name:'MeatSticks'};
    const mockAction = {...mockProduct, type: 'ADD_PRODUCT'};
    const results = products(initialState, mockAction);
    const expected = [mockProduct];
    expect(results).toEqual(expected);
  });
});

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = ingredients(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state array containing an ingredient object ', () => {
    const initialState = [];
    const mockIngredient = {id:1, name:'beef', productId:2};
    const mockAction = {...mockIngredient, type: 'ADD_INGREDIENT'};
    const results = ingredients(initialState, mockAction);
    const expected = [mockIngredient];
    expect(results).toEqual(expected);
  });
});

describe('receiving reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = receiving(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state array containg plan object', () => {
    const initialState = [];
    const mockPlan = { ingredientId: 1 };
    const mockAction = {...mockPlan, type: 'ADD_RECEIVING_PLAN'};
    const results = receiving(initialState, mockAction);
    const expected = [mockPlan];
    expect(results).toEqual(expected);
  });
});

describe('inventory reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = inventory(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state array containg plan object', () => {
    const initialState = [];
    const mockPlan = { ingredientId: 1 };
    const mockAction = {...mockPlan, type: 'ADD_INVENTORY_PLAN'};
    const results = inventory(initialState, mockAction);
    const expected = [mockPlan];
    expect(results).toEqual(expected);
  });
});

describe('processing reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = processing(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state array containg plan object', () => {
    const initialState = [];
    const mockPlan = { ingredientId: 1 };
    const mockAction = {...mockPlan, type: 'ADD_PROCESSING_PLAN'};
    const results = processing(initialState, mockAction);
    const expected = [mockPlan];
    expect(results).toEqual(expected);
  });
});

describe('packaging reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const results = packaging(undefined, {});
    expect(results).toEqual(expected);
  });
  
  it('should return a state array containg plan object', () => {
    const initialState = [];
    const mockPlan = { ingredientId: 1 };
    const mockAction = {...mockPlan, type: 'ADD_PACKAGING_PLAN'};
    const results = packaging(initialState, mockAction);
    const expected = [mockPlan];
    expect(results).toEqual(expected);
  });
});