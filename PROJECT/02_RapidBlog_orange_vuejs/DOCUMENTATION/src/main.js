import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//importStyles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import bulma from '../node_modules/bulma/css/bulma.min.css'

createApp(App).use(store).use(router).mount('#app')
