export const inventory = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INVENTORY_PLAN': {
      const { ingredientId } = action;
      return [...state, { ingredientId }];
    }
    default:
      return state;
  }
};