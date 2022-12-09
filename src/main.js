import { createApp } from 'vue'
import App from './App.vue'
import gsap from 'gsap'


const app = createApp(App)
    app.use(gsap)
    .mount('#app')