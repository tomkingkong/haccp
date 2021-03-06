export const inventory = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INVENTORY_PLAN': {
      return [...state, { id:action.id, ...action.plan }];
    }
    case 'UPDATE_INVENTORY_PLAN': {
      const newState = state.filter(plan => plan.id !== action.plan.id);
      return [...newState, { id:action.id, ...action.plan }];
    }
    default:
      return state;
  }
};