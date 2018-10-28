export const editProduct = (state=0, action) => {
  switch (action.type) {
    case 'EDIT_PRODUCT':
      return action.id;
    default:
      return state;
  }
};