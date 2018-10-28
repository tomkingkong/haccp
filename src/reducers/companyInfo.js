export const companyInfo = (state=0, action) => {
  switch (action.type) {
    case 'SET_COMPANY_ID':
      return action.id;
    default:
      return state;
  }
};