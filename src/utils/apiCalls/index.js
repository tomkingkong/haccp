import axios from 'axios';
import setAuthToken from './setAuthToken';

const origin = 'https://sheltered-peak-41535.herokuapp.com';
const version = `/api/v1`;

export const getCompanyInfo = (id) => {
  const path = `${origin}${version}/companies/${id}`;
  return axios.get(path).then(res => res.data);
};

export const signUp = (details) => {
  const path = `${origin}/signup`;
  return axios.post(path, details).then(res => res.data);
};

export const logIn = (details) => {
  const path = `${origin}/login`;
  return axios.post(path, details).then(res => {
    let token = res.headers.authorization;
    localStorage.setItem('authorization', token);
    setAuthToken(token);
    return res.data;
  });
};

export const logOut = () => {
  const path = `${origin}/logout`;
  return axios.delete(path).then(res => res);
};

export const postCompanyInfo = (details) => {
  const path = `${origin}${version}/companies`;
  return axios.post(path, details).then(res => res.data);
};

// export const putCompanyInfo = (id, details) => {
//   const path = `${origin}${version}/companies/${id}`;
//   return axios.put(path, details).then(res => res.data);
// };

export const postProduct = (id, details) => {
  const path = `${origin}${version}/companies/${id}/products`;
  return axios.post(path, details).then(res => res.data);
};

export const postIngredient = (id, details) => {
  const path = `${origin}${version}/products/${id}/ingredients`;
  return axios.post(path, details).then(res => res.data);
};

export const putIngredient = (id, details) => {
  const path = `${origin}${version}/ingredients/${id}`;
  return axios.put(path, details).then(res => res.data);
};