import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index'
// import store from '@/stores'

createApp(App).use(router).mount('#app')