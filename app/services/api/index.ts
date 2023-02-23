import apisauce, { ApisauceInstance } from 'apisauce';

const URL = 'https://6389df1b4eccb986e89cf319.mockapi.io/external-verification';

class Api {
  private client: ApisauceInstance;

  constructor(baseURL = URL) {
    this.client = apisauce.create({
      baseURL,
      timeout: 10000,
      headers: { 'Cache-Control': 'no-cache' },
    });
  }
}

export const apiInstance = new Api();

export default Api;
