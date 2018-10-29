export const companyInfo = (state={}, action) => {
  switch (action.type) {
    case 'SET_COMPANY_USER':{
      const { id, name } = action;
      return { id, name };
    }
    default:
      return state;
  }
};