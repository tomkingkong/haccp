export const processing = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PROCESSING_PLAN': {
      return [...state, { id:action.id, ...action.plan }];
    }
    case 'UPDATE_PROCESSING_PLAN': {
      const newState = state.filter(plan => plan.ingredientId !== action.plan.ingredientId);
      return [...newState, { id:action.id, ...action.plan }];
    }
    default:
      return state;
  }
};