import * as actions from '../actions';

export const reducePlanData = (ingredient, planName) => {
  return Object.keys(ingredient).reduce((plan, key) => {
    if (!key.includes(planName)) {
      plan[key] = ingredient[key];
    }
    return plan;
  }, {});
};

export const parseCompanyData = (data) => {
  return dispatch => {
    const { 
      id, 
      name, 
      email, 
      address, 
      phone, 
      team_member_1_name, 
      team_member_1_title } = data;
    const companyInfo = {
      id,
      name,
      email,
      address,
      phone,
      team_member_1_name,
      team_member_1_title
    };
    
    dispatch(actions.setCompanyInfo(companyInfo));

    data.products.forEach(product => {
      dispatch(actions.addProduct(product.id, product.name));
      product.ingredients.forEach(ing => {
        dispatch(actions.addIngredient(ing.id, ing.name, ing.product_id));

        const receiving = reducePlanData(ing, 'receiving');
        const inventory = reducePlanData(ing, 'inventory');
        const processing = reducePlanData(ing, 'processing');
        const packaging = reducePlanData(ing, 'packaging');

        dispatch(actions.addReceivingPlan(ing.id, receiving));
        dispatch(actions.addInventoryPlan(ing.id, inventory));
        dispatch(actions.addProcessingPlan(ing.id, processing));
        dispatch(actions.addPackagingPlan(ing.id, packaging));
      });
    });
  };
};