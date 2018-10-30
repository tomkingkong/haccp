export const fetchRequest = (path = '', options = {}) => {
  const url = 'https://sheltered-peak-41535.herokuapp.com/api/v1' + path;
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error);
};

export const getCompanyInfo = (id) => {
  const path = `/companies/${id}`;
  return fetchRequest(path);
};

export const getCompanyLogin = (query) => {
  const path = `/company${query}`;
  return fetchRequest(path);
};

export const postCompanyInfo = (details) => {
  const path = `/companies`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)
  };
  return fetchRequest(path, options);
};

export const putCompanyInfo = (id, details) => {
  const path = `/companies/${id}`;
  const options = {
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)
  };
  return fetchRequest(path, options);
};

export const postProduct = (id, details) => {
  const path = `/companies/${id}/products`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)    
  };
  return fetchRequest(path, options);
};

export const postIngredient = (id, details) => {
  const path = `/products/${id}/ingredients`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)    
  };
  return fetchRequest(path, options);
};

export const putIngredient = (id, details) => {
  const path = `/ingredients/${id}`;
  const options = {
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)    
  };
  return fetchRequest(path, options);
};