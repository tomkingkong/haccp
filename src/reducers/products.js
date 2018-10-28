export const products = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const { id, name } = action;
      return [...state, { id, name }];
    }
    default:
      return state;
  }
};