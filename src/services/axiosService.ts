/*eslint-disable */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL;

class _AxiosService {
  private instance: any = null;

  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}`,
      headers: this.getHeaders()
    });
    this.instance.interceptors.request.use(
      this.interceptBeforeRequest.bind(this),
      this.interceptRequestError.bind(this)
    );
    this.instance.interceptors.response.use(
      this.interceptResponseData.bind(this),
      this.interceptResponseError.bind(this)
    );
  }
  private getHeaders() {
    return {
      'Content-Type': 'application/json'
    };
  }

  private interceptBeforeRequest(response: any) {
    return response;
  }

  private interceptRequestError(error: any) {
    return Promise.reject(error);
  }

  private interceptResponseData(response: any) {
    return response;
  }

  private interceptResponseError(error: any) {
    return Promise.reject(error);
  }

  get(url = '/', params = {}, config = {}) {
    return this.instance.get(url, { params, ...config });
  }

  post(url = '/', data = {}, config = {}) {
    return this.instance.post(url, data, config);
  }
}

export const AxiosService = new _AxiosService();
