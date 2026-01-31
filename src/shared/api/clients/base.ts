import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';

export class BaseApiClient {
  client: AxiosInstance;
  baseURL: string;

  constructor(domainURL: string) {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;

    if (!baseURL) {
      throw new Error('API url is not set');
    }

    this.baseURL = baseURL;

    this.client = axios.create({
      baseURL: `${this.baseURL}${domainURL}`,
    });

    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
  }

  private handleSuccessResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private handleErrorResponse = (error: AxiosError | Error) => {
    return Promise.reject(error);
  };
}
