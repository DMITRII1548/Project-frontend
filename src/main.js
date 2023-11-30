import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store/index";

const app = createApp(App);

// Использование маршрутизатора Vue Router
app.use(router);
app.use(store)

// Настройка Axios
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Установите ваш основной URL здесь
});

// Добавление API в глобальные свойства Vue
app.config.globalProperties.axios = api;

// Монтирование приложения Vue
app.mount('#app');
