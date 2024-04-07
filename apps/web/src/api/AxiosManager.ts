import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import api from '@/api';
import type { AuthResponse } from '@/schemas/AuthResponseSchema';

export default class AxiosManager {
  private static tokenKey = import.meta.env.VITE_TOKEN_KEY;
  private static refreshUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/refresh`;

  static onRequestFulfilled(config: InternalAxiosRequestConfig) {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      config.headers.setAuthorization(`Bearer ${token}`);
    }

    return config;
  }

  static onResponseFulfilled(response: AxiosResponse) {
    return response;
  }

  static async onResponseRejected(error: AxiosError) {
    if (!error.config || !error.response) {
      throw error;
    }

    if (
      error.response.status === 401 &&
      !(error.config as any)._retry &&
      error.config.url !== this.refreshUrl
    ) {
      (error.config as any)._retry = true;

      const response = await api.post<AuthResponse>(this.refreshUrl);

      localStorage.setItem(this.tokenKey, response.data.accessToken);
      error.config.headers.setAuthorization(`Bearer ${response.data.accessToken}`);

      return axios(error.config);
    }

    throw error;
  }
}
