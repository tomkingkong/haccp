import * as fetches from './index';
import * as mock from './__mocks__/mockData';

describe('Generic Fetch Request', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
      json: () => {}
    }));
  });

  it('to have been called with params without path or options', async () => {
    const expectedParams = [
      'https://sheltered-peak-41535.herokuapp.com/api/v1',
      {}
    ];
    await fetches.fetchRequest();
    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('to have been called with params with path', async () => {
    const path = '/companies/1';
    const expectedParams = [
      'https://sheltered-peak-41535.herokuapp.com/api/v1/companies/1',
      {}
    ];
    await fetches.fetchRequest(path);
    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('to have been called with params with path and options', async () => {
    const path = '/companies/1';
    const options = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({})
    };
    const expectedParams = [
      'https://sheltered-peak-41535.herokuapp.com/api/v1/companies/1',
      {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({})
      }
    ];
    await fetches.fetchRequest(path, options);
    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });
});

describe('Company Requests', () => {
  describe('GET company details', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        json: () => mock.companyDetails 
      }));
    });
    
    it('should retreive company details', async () => {
      const expected = mock.companyDetails;
      const result = await fetches.getCompanyInfo(1);
      expect(result).toEqual(expected);
    });

    it('should return an error if retreiving company details fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));
      const expected = 'error';
      const result = await fetches.getCompanyInfo(1);
      expect(result).toEqual(expected);
    });

    it('to have been called with params', async () => {
      const expectedParams = [
        'https://sheltered-peak-41535.herokuapp.com/api/v1/companies/1',
        {}
      ];
      await fetches.getCompanyInfo(1);
      expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
    });
  });

  describe('POST company details', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        json: () => mock.companyId 
      }));
    });

    it('should post company details', async () => {
      const expected = mock.companyId;
      const result = await fetches.postCompanyInfo(1);
      expect(result).toEqual(expected);
    });

    it('should return an error if posting company details fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));
      const expected = 'error';
      const result = await fetches.postCompanyInfo(1);
      expect(result).toEqual(expected);
    });

    it('to have been called with params with company details', async () => {
      const companyDetails = {
        'name': 'my-company'
      };
      const expectedParams = [
        'https://sheltered-peak-41535.herokuapp.com/api/v1/companies',
        {
          method: 'POST',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify({'name': 'my-company'})
        }
      ];
      await fetches.postCompanyInfo(companyDetails);
      expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
    });
  });

  describe('PUT company details', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        json: () => mock.companyDetailsWithId 
      }));
    });

    it('should update company details', async () => {
      const expected = mock.companyDetailsWithId;
      const result = await fetches.postCompanyInfo(1);
      expect(result).toEqual(expected);
    });

    it('should return an error if updating company details fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('error'));
      const expected = 'error';
      const result = await fetches.postCompanyInfo(1);
      expect(result).toEqual(expected);
    });

    it('to have been called with params with updated details', async () => {
      const companyDetails = {
        'name': 'my-company'
      };
      const id = 1;
      const expectedParams = [
        'https://sheltered-peak-41535.herokuapp.com/api/v1/companies/1',
        {
          method: 'PUT',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify({'name': 'my-company'})
        }
      ];
      await fetches.putCompanyInfo(id, companyDetails);
      expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
    });
  });
});