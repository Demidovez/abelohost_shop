import type { AxiosResponse } from 'axios';

import { BaseApiClient } from '@/shared/api';

import type { UserResponse } from '../model/types/User';

class UserApiClient extends BaseApiClient {
  async getUser(): Promise<UserResponse> {
    const response = await this.client.get<UserResponse>('/me');
    return response.data;
  }
  async login(username: string, password: string): Promise<UserResponse> {
    const response = await this.client.post<UserResponse>('/login', { username, password });
    return response.data;
  }
  async logout(): Promise<AxiosResponse> {
    const response = await this.client.get<AxiosResponse>('/logout');
    return response;
  }
}

export const userApi = new UserApiClient('/auth');
