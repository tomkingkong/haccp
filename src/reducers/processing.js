export const processing = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PROCESSING_PLAN': {
      const { ingredientId } = action;
      return [...state, { ingredientId }];
    }
    default:
      return state;
  }
};