export const companyInfo = (state={}, action) => {
  switch (action.type) {
    case 'SET_COMPANY_USER':{
      const { id, name, email } = action;
      return { id, name, email };
    }
    default:
      return state;
  }
};