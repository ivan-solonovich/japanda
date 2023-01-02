<template>
    <div class="title-ru-wrapper">

        <h1 class="title-ru-wrapper_slogan font-semibold">
            Современный иновационный подход к IT образованию.
        </h1>
        <ul class="title-ru-wrapper_points">
            <div class="lines">
                <img id="first-icon" class="icons-line" src="../../assets/images/icons/marker-64-blue.png" alt="">
                <li  id="first-line"> Для вас разработана комфортная среда, способная раскрывать таланты.</li>
            </div>
            <div class="lines">
                <img id="second-icon" class="icons-line" src="../../assets/images/icons/marker-64-red.png" alt="">
                <li id="second-line">Наши подходы иновационны. Мы доказали, что путь в IT может быть компетентным</li>
            </div>
            <div class="lines">
                <img id="third-icon" class="icons-line" src="../../assets/images/icons/marker-64-green.png" alt="">
                <li id="third-line">Самые сложные концепции, мы объясняем просто и понятно.</li>
            </div>
            <div class="lines">
                <img id="four-icon" class="icons-line" src="../../assets/images/icons/marker-64-purple.png" alt="">
                <li id="four-line">Больше никаких занудных туториалов, только реальные и наглядные примеры.</li>
            </div>
            <div class="lines">
                <img id="five-icon" class="icons-line" src="../../assets/images/icons/marker-64-light-blue.png" alt="">
                <li id="five-line">Никакой песочницы. Узнаете приемы разработчиков уровня Senior и Lead и сможете
                    применять умения сразу на практике</li>
            </div>
            <CloudOfTechnology/>
        </ul>

    </div>
</template>

<script>
    import CloudOfTechnology from "@/components/CloudOfTechnology";
    import {gsap} from "gsap";
    export default {
        name: "TitleRu",
        components:{
            CloudOfTechnology
        },
        mounted() {
            gsap.from("#first-line", {x: 1920,  duration:.5});
            gsap.from("#second-line", {x: 1920, delay:.5, duration:.5});
            gsap.from("#third-line", {x: 1920, delay:1, duration:.5});
            gsap.from("#four-line", {x: 1920, delay:2, duration:.5});
            gsap.from("#first-icon", {opacity: 0, delay:3, duration:.5});
            gsap.from("#second-icon", {opacity: 0, delay:3.5, duration:.5});
            gsap.from("#third-icon", {opacity: 0, delay:4, duration:.5});
            gsap.from("#four-icon", {opacity: 0, delay:4.5, duration:.5});
            gsap.from("#five-icon", {opacity: 0, delay:3, duration:.5});
        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@700&display=swap');
    @import "./src/assets/styles/styles.scss";
    .title-ru-wrapper{
        width: 100%;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &_title{
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: .7rem;
            width: 100%;
            color: crimson;
            font-size: 1rem;
            font-weight: bold;

        }
        &_slogan{
            width: 100%;
            font-size: 2rem;
            color: #515a6b;
            padding-left: 2rem;
            padding-right: 2rem;


        }
        &_points{
            width: 100%;
            max-width: 520px;
            padding: .6rem;
            font-family: 'Roboto', sans-serif;
            li{
                color: $second-color;
                font-weight: bold;
                text-transform: uppercase;
                padding: .6rem;

            }
            .lines{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .icons-line{
                width: 24px;
                height: 24px;
            }
        }
    }
    @media screen and (max-width: 1058px) {
        .title-ru-wrapper{
            width: 667px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
            &_points{
                font-family: 'Roboto', sans-serif;
            }
            &_title{
                font-size: 1.1rem;
            }
            &_slogan{
                font-size: 1.3rem;
            }
            li{
                padding: .4rem;
            }
        }

    }
</style>