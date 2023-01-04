<template>
    <div class="benefit-list">
        <h2 class="benefit-list_title start-anim"> Мир возможностей открывается, не в тот момент,
            когда вы дочитали книгу или решили задачу. А когда вы поняли, как он устроен. Когда-то, мы этот мир для себя
            открыли. Это незабываемый момент и эмоционально и физически. Путь был не легким,
            но мы уже знаем как по нему идти.  И мы знаем, где находится та самая дверь, открывающая мир возможностей. </h2>
        <div class="benefits-list-ru-container ">
            <div class="benefits-list-ru-container_subcontainer anim-one">
                <div class="benefits-list-ru-container_subcontainer_left">
                    <img class="benefit-list_image " src="../../../assets/images/pic-for-benefit-lists/photo-1541462608143-67571c6738dd.png" alt="">
                </div>
                <div class="benefits-list-ru-container_subcontainer_right">
                    <p>Все сегодня можно найти в сети? - это верно.  Однако, поиск может занять слишком много времени
                        и вообще не увенчатся успехом.
                        <span style="color: cornflowerblue">Опытный ментор</span>, понимает что искать и где искать,
                    а чаще всего, просто, уже знает ответ на большинство вопросов. </p>
                </div>
            </div>
            <div class="benefits-list-ru-container_subcontainer anim-two">
                <div class="benefits-list-ru-container_subcontainer_left">
                    <img class="benefit-list_image" src="../../../assets/images/pic-for-benefit-lists/photo-1620403661092-1750c6d4148a.png" alt="">
                </div>
                <div class="benefits-list-ru-container_subcontainer_right">
                    <p>Можно всю жизнь проездить на машине и не знать, как она устроена. Но, если вы решили поучавствовать
                        в гонке. Вам прийдется открыть капот. Эксперты и профессионалы так называются, именно по тому, что
                        знают, как работают технологии под капотом. Мы разбераем движок современного
                        высокоуровневого языка по болтикам.</p>
                </div>
            </div>
            <div class="benefits-list-ru-container_subcontainer anim-three">
                <div class="benefits-list-ru-container_subcontainer_left">
                    <img class="benefit-list_image" src="../../../assets/images/pic-for-benefit-lists/photo-1568219557405-376e23e4f7cf.png" alt="">
                </div>
                <div class="benefits-list-ru-container_subcontainer_right">
                    <p>Действия должны быть осмысленными, - ничего так не убивает мотивацию,
                        как нелепое чувство бессмысленности и безполезности задачи. Прямо как примеры из школьных учебников.
                        Никто, кроме, того кто их писал, не знает, зачем они нужны. Все наши задачи имеют смысл и
                        практическое применение. </p>
                </div>
            </div>
            <div class="benefits-list-ru-container_subcontainer anim-four">
                <div class="benefits-list-ru-container_subcontainer_left">
                    <img class="benefit-list_image" src="../../../assets/images/pic-for-benefit-lists/photo-1522542550221-31fd19575a2d.png" alt="">
                </div>
                <div class="benefits-list-ru-container_subcontainer_right">
                    <p>На любом уровне, и в каждом курсе, мы будем создавать, что-то практическое, настоящее.
                    Фреймворк, интернет магазин, приложение игру. То, что люди используют. То, что хочет получить, ваш
                    будуший заказчик или работодатель. Иметь в портфолио e-commerce service, это серьезно.</p>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
    import gsap from 'gsap'
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin";
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    export default {
        name: "BenefitsListRu",
        mounted() {
            if(innerWidth > 1258){
                gsap.from(".anim-one",{

                        scrollTrigger:  {
                            trigger: ".start-anim",
                            start: "top bottom",
                            end: "bottom",
                            toggleActions: "restart none none none",
                            scrub: true,

                        },
                        x: -600,
                        y: 300,
                        duration: 1.5,

                    })
                gsap.from(".anim-two",{
                    scrollTrigger:  {
                        trigger: ".start-anim",
                        start: "bottom bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,
                    },
                    x: 1800,

                    duration: 1.5,
                })

                gsap.from(".anim-three",{
                    scrollTrigger:  {
                        trigger: ".start-anim",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: -1800,


                    duration: 1.5,
                })
                gsap.from(".anim-four",{
                    scrollTrigger:  {
                        trigger: ".start-anim",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,
                    },
                    x: 1800,

                    duration: 1.5,
                })
            }else {
                gsap.from(".anim-one",{

                    scrollTrigger:  {
                        trigger: ".start-anim",
                        // start: "top bottom",
                        // end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: -600,
                    y: 300,
                    duration: 1.5,

                })
                gsap.from(".anim-two",{
                    scrollTrigger:  {
                        trigger: ".start-anim",
                        start: "bottom bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,
                    },
                    x: 1800,

                    duration: 1.5,
                })

                gsap.from(".anim-three",{
                    scrollTrigger:  {
                        trigger: ".anim-two",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: -1800,


                    duration: 1.5,
                })
                gsap.from(".anim-four",{
                    scrollTrigger:  {
                        trigger: ".anim-three",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,
                    },
                    x: 1800,

                    duration: 1.5,
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/styles/styles.scss";
    .benefit-list{
        padding: 2rem;
        width: 100%;
        height: auto;
        background-image: url("../../../assets/images/bgi/banner-bg1.jpg");
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &_title{
            text-align: center;
            max-width: 1200px;
            font-size: 1.5rem;
            color: $primary-color;
            padding-bottom: 1rem;
        }
    }
.benefits-list-ru-container{
    max-width: 1460px;
    display: grid;
    grid-template-areas: "benefits-list-ru-container_subcontainer benefits-list-ru-container_subcontainer";
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    
    &_subcontainer{
        display: grid;
        grid-template-areas: "benefits-list-ru-container_subcontainer_left benefits-list-ru-container_subcontainer_right";
        grid-template-columns: 1fr 1fr;

        border-radius: 8px;
        grid-gap: 1rem;
        &_left{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .5rem;
        }
        &_right{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .5rem;
        }
    }

}
    @media screen and (max-width: 1258px) {
        .benefit-list_title{
            font-size: 1rem;
            font-weight: bold;
        }
        .benefits-list-ru-container {
            width: 100%;
            display: grid;
            grid-template-areas:    "benefits-list-ru-container_subcontainer"
                                    "benefits-list-ru-container_subcontainer";
            grid-template-columns: 1fr;
            grid-gap: 1rem;

            &_subcontainer{
                width: 100%;
                display: grid;
                grid-template-areas:    "benefits-list-ru-container_subcontainer_left"
                                        "benefits-list-ru-container_subcontainer_right";
                grid-template-columns: 1fr;
                grid-gap: 1rem;

                border-radius: 8px;
                padding: 1rem;
                &_left{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                }
                &_right{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                }
            }
        }

    }
    .benefit-list_image{
        max-width: 500px;
        max-height: 200px;
    }
</style>