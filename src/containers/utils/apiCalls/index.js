const origin = 'https://www.APP.heroku-app.com/api/vi'

export const getCompanyInfo = (id) => {
  const path = `/companies/${id}`;
  const url = origin + path;
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(console.log);
};