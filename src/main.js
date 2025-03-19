import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

createApp(App).use(router).use(VueToast, {
    position: 'top'
}).mount('#app');

