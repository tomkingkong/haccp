export const packaging = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PACKAGING_PLAN': {
      const { ingredientId } = action;
      return [...state, { ingredientId }];
    }
    default:
      return state;
  }
};