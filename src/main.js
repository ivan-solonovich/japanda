import { createApp } from 'vue'
import App from './App.vue'
import gsap from 'gsap'
import router from './router/router.js';


const app = createApp(App)
    app.use(
        router,
        gsap)
    .mount('#app')