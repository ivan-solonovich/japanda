import { createApp } from 'vue'
import App from './App.vue'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

import router from './router/router.js';
import  store  from './store/store.js'


const app = createApp(App)
    app.use(
        router,
        gsap,
        store)
    .mount('#app')