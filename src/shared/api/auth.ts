import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Создаем экземпляр axios с базовыми настройками
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем перехватчик для получения CSRF-токена
api.interceptors.request.use(async (config) => {
  // Получаем CSRF-токен из cookie
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];

  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }

  return config;
});

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
  password_confirm: string;
  first_name?: string;
  last_name?: string;
};

export type UniversityRegisterCredentials = {
  email: string;
  password: string;
  password_confirm: string;
  university_name: string;
};

export type User = {
  id: number;
  email: string;
  university_name?: string;
  first_name?: string;
  last_name?: string;
  role: 'user' | 'admin' | 'university';
  date_joined: string;
};

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<User> => {
    const response = await api.post('/users/login/', credentials);
    return response.data.user;
  },

  register: async (credentials: RegisterCredentials): Promise<User> => {
    const response = await api.post('/users/', credentials);
    return response.data;
  },

  registerUniversity: async (credentials: UniversityRegisterCredentials): Promise<User> => {
    const response = await api.post('/register-university/', credentials);
    return response.data.user;
  },

  logout: async (): Promise<void> => {
    await api.post('/users/logout/');
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/users/me/');
    return response.data;
  },
}; 