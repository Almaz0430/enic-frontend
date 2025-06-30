import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web-production-eeb3.up.railway.app/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Получаем CSRF-токен при инициализации
const getCsrfToken = async () => {
  try {
    await api.get('/csrf/');
  } catch (error) {
    console.error('Ошибка при получении CSRF-токена:', error);
  }
};

// Получаем CSRF-токен при старте приложения
getCsrfToken();

// Интерцептор для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      // Если получили ошибку 403, пробуем получить новый CSRF-токен
      getCsrfToken();
    }
    return Promise.reject(error);
  }
);

export default api; 