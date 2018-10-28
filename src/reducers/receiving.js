export const receiving = (state=[], action) => {
  switch (action.type) {
    case 'ADD_RECEIVING_PLAN': {
      const { ingredientId } = action;
      return [...state, { ingredientId }];
    }
    default:
      return state;
  }
};