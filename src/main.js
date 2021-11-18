import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
axios.defaults.headers.common.authorization = localStorage.token
axios.defaults.baseURL = 'http://localhost/Instag/backend/'

createApp(App).use(store).use(router).mount('#app')
