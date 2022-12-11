import {createRouter, createWebHashHistory} from "vue-router";
import MainRu from "@/pages/ru/MainRu";
import CoursesRu from "@/pages/ru/coursesRu/CoursesRu";
import PricesRu from "@/pages/ru/pricesRu/PricesRu";
import AboutRu from "@/pages/ru/AboutRu/AboutRu";

const routes =
    [

        {
            path: '/',
            name: 'homeRu',
            component: MainRu
        },
        {
            path: '/coursesRu',
            name: 'coursesRu',
            component: CoursesRu
        },
        {
            path: '/pricesRu',
            name: 'pricesRu',
            component: PricesRu
        },
        {
            path: '/aboutRu',
            name: 'aboutRu',
            component: AboutRu
        },

    ]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})


export default router