export const ingredients = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT': {
      const { id, name, productId } = action;
      return [...state, { id, name, productId }];
    }
    default:
      return state;
  }
};