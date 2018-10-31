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
    const mockUserName = 'Timf';
    const mockData = {
      address: 'somewhere',
      phone: '90234134',
      email: 'email@emails.com',
      team_member_1_name: 'bobby',
      team_member_1_title: 'prez'
    };
    const info = {id:mockCompanyId, name:mockUserName, ...mockData};
    const results = actions.setCompanyInfo(info);
    const expected = {type:'SET_COMPANY_USER', info};
    expect(results).toEqual(expected);
  });
});

describe('ingredient actions', () => {
  it('should create an object with an id, name and product id', () => {
    const mockId = 2;
    const mockName = 'beef';
    const mockProductId = 1;
    const data = {
      id: mockId,
      name: mockName,
      productId: mockProductId
    };
    const results = actions.addIngredient(mockId, mockName, mockProductId);
    const expected = {type:'ADD_INGREDIENT', ...data};
    expect(results).toEqual(expected);
  });
});

describe('plans actions', () => {
  it('should create an object with an id and RECEIVING plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.addReceivingPlan(mockId, plan);
    const expected = {type:'ADD_RECEIVING_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });

  it('should create an object with an id and updated RECEIVING plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.updateReceivingPlan(mockId, plan);
    const expected = {type:'UPDATE_RECEIVING_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });

  it('should create an object with an id and INVENTORY plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.addInventoryPlan(mockId, plan);
    const expected = {type:'ADD_INVENTORY_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });

  it('should create an object with an id and updated INVENTORY plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.updateInventoryPlan(mockId, plan);
    const expected = {type:'UPDATE_INVENTORY_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });


  it('should create an object with an id and PROCESSING plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.addProcessingPlan(mockId, plan);
    const expected = {type:'ADD_PROCESSING_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });

  it('should create an object with an id and updated PROCESSING plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.updateProcessingPlan(mockId, plan);
    const expected = {type:'UPDATE_PROCESSING_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });


  it('should create an object with an id and PACKAGING plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.addPackagingPlan(mockId, plan);
    const expected = {type:'ADD_PACKAGING_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });

  it('should create an object with an id and updated PACKAGING plan object', () => {
    const mockId = 2;
    const plan = { hazard: 'plans' };
    const results = actions.updatePackagingPlan(mockId, plan);
    const expected = {type:'UPDATE_PACKAGING_PLAN', plan, id:mockId};
    expect(results).toEqual(expected);
  });


});