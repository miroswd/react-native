// Cria instância do axios resposável por lidar com as chamadas a API
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
