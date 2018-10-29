export const companyInfo = (state={}, action) => {
  switch (action.type) {
    case 'SET_COMPANY_USER':{
      const { info } = action;
      return { ...info };
    }
    default:
      return state;
  }
};