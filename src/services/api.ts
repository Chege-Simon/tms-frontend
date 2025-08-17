import axios from 'axios';
import type { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Your Laravel API base URL
});

// Add interceptor to include Bearer token in requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(credentials: { email: string; password: string }): Promise<AxiosResponse> {
  return api.post('/auth/access-token', credentials);
}

export async function logout(): Promise<void> {
  localStorage.removeItem('auth_token');
}

export async function getUser(): Promise<AxiosResponse> {
  return api.get('/users/me'); // Adjust based on your API
}

export async function getCustomers(): Promise<AxiosResponse> {
  return api.get('/customers');
}