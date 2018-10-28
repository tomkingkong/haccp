import { combineReducers } from 'redux';

import { editProduct } from './editProduct';
import { products } from './products';
import { ingredients } from './ingredients';
import { receiving } from './receiving';
import { inventory } from './inventory';
import { processing } from './processing';
import { packaging } from './packaging';
import { companyInfo } from './companyInfo';

export const rootReducer = combineReducers({
  editProduct,
  companyInfo,
  products,
  ingredients,
  receiving,
  inventory,
  processing,
  packaging
});