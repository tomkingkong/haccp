const origin = 'https://www.APP.heroku-app.com/api/vi';

export const getCompanyInfo = (id) => {
  const path = `/companies/${id}`;
  const url = origin + path;
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(console.log);
};

export const postCompanyInfo = (details) => {
  const path = `/companies`;
  const url = origin + path;
  const options = {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data)
    .catch(console.log);
};

export const putCompanyInfo = (id, details) => {
  const path = `/companies/${id}`;
  const url = origin + path;
  const options = {
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(details)
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data)
    .catch(console.log);
};