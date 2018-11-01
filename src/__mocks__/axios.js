export default {
  get: jest.fn(() => Promise.resolve({ id: 1 })),
  post: jest.fn(() => Promise.resolve({ data:{id: 1}, headers: {authorization: 'token'} })),
  put: jest.fn(() => Promise.resolve({ id: 1 })),
  delete: jest.fn(() => Promise.resolve({ id: 1 })),
  defaults: { headers: { common: { 'Authorization': 'token'} }}
}