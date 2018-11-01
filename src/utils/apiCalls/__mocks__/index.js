export default {
  get: jest.fn(() => Promise.resolve({ id: 1 })),
  post: jest.fn(() => Promise.resolve({ id: 1 })),
  put: jest.fn(() => Promise.resolve({ id: 1 })),
  delete: jest.fn(() => Promise.resolve({ id: 1 }))
}