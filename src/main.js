import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import './assets/css/all.css'

const app = createApp(App)
app.use(VueAxios)
app.use(router)
app.mount('#app')
