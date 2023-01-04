<template>
    <div class="faq">
   <div class="faq-wrapper">
        <div class="faq-wrapper_container">
                <div class="faq-wrapper_container_faq-block anim-one-faq">
                    <div class="faq-wrapper_container_faq-block_title">
                        <h2>Формат занятий - менторство.</h2>
                    </div>
                    <div class="faq-wrapper_container_faq-block_explanation">
                            <p>Академический подход лекция-практика, может и неплох - для лектора, чья цель изложить
                            материал и раздать домашние задания. Знакомая ситуация?  У нас другая история,
                            вы взаимодействуете не с преподавателем, а скорее с более опытным коллегой. И все происходит как
                            в жизни - компания, заказ, дедлайн ...
                        </p>
                    </div>
                    <div class="faq-wrapper_container_faq-block_image-container">
                        <img class="faq-wrapper_container_faq-block_image-container_image" src="../../../assets/images/pic-for-faq/mentoring-concept.jpg" alt="">

                    </div>
                </div>
                <div class="faq-wrapper_container_faq-block anim-two-faq">
                        <div class="faq-wrapper_container_faq-block_title">
                            <h2>Только практически применимые примеры и задания</h2>
                        </div>
                        <div class="faq-wrapper_container_faq-block_explanation">
                            <p>Заканчивает человек униварситет, приходит на работу и ... - начинает учится работать!
                                Наш подход несколько иной - вы сразу столкнетесь с задачами применимыми в жизни и
                                разберетесь как их решить. Финал любого курса - это собственный сервис.
                            </p>
                        </div>
                    <div class="faq-wrapper_container_faq-block_image-container">
                        <img class="faq-wrapper_container_faq-block_image-container_image" src="../../../assets/images/pic-for-faq/creative-agency-concept-in-flat-design-vector.jpg" alt="">

                    </div>
                    </div>
            <div class="faq-wrapper_container_faq-block anim-three-faq">
                <div class="faq-wrapper_container_faq-block_title">
                    <h2>Самый популярный стек за последнее десятилетие</h2>
                </div>
                <div class="faq-wrapper_container_faq-block_explanation">
                    <p>JavaScript - живет на всех устройствах. Легкий, гибкий, быстрый мультипарадигменный.
                        Гарантированно востребованный. По версии GitHub - самый популярный, многие годы.
                    </p>

                </div>
                <div class="faq-wrapper_container_faq-block_image-container">
                    <img src="../../../assets/images/pic-for-faq/github-note.png" alt="">
                    <img src="../../../assets/images/pic-for-faq/google-note.png" alt="">
                </div>
                <div class="faq-wrapper_container_faq-block_explanation">
                    <p>Как гиганты вроде Google, Amazon, Facebook, так и небольшие компании используют JS.
                        Это признание, и главное - спрос на JS-разработчиков.
                    </p>

                </div>
            </div>
            <div class="faq-wrapper_container_faq-block anim-four-faq">
                <div class="faq-wrapper_container_faq-block_title">
                    <h2>Джунов не делаем!</h2>
                </div>
                <div class="faq-wrapper_container_faq-block_explanation">
                    <p>Человека способного написать с ноля интернет-маркет, и даже фреймворк - джуном не назовешь!
                       Такие вещи в портфолио - это не TODO-лист! Это полноценный сервис.
                        Да, будет трудно, но дойдя до финала, вы будуте специалистами за которыми охотятся компании.
                    </p>

                </div>
                <div class="faq-wrapper_container_faq-block_image-container">
                    <img class="faq-wrapper_container_faq-block_image-container_image" src="../../../assets/images/pic-for-faq/Social_Monitoring_11_generated.jpg" alt="">

                </div>

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
        name: "FaqRu",
        mounted() {
            if(innerWidth>1258){
                gsap.from(".anim-one-faq",{

                        scrollTrigger:  {
                            trigger: ".anim-one-faq",
                            start: "top bottom",
                            end: "bottom",
                            toggleActions: "restart none none none",
                            scrub: true,

                        },
                        x: -1800,
                        y: -800,
                        duration: 1,

                    })
                gsap.from(".anim-two-faq",{

                    scrollTrigger:  {
                        trigger: ".anim-one-faq",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,
                    },
                    x: 1800,

                    duration: 1,
                })

                gsap.from(".anim-three-faq",{
                    scrollTrigger:  {
                        trigger: ".anim-two-faq",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: -1800,


                    duration: 1,
                })
                gsap.from(".anim-four-faq",{
                    scrollTrigger:  {
                        trigger: ".anim-two-faq",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: 1800,
                    duration: 1,
                })
            }else {
                gsap.from(".anim-one-faq",{

                    scrollTrigger:  {
                        trigger: ".anim-one-faq",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: -1800,
                    y: -800,
                    duration: 1,

                })
                gsap.from(".anim-two-faq",{
                    scrollTrigger:  {
                        trigger: ".anim-one-faq",
                        start: "top bottom",
                        end: "bottom",
                        toggleActions: "restart none none none",
                        scrub: true,
                    },
                    x: -1800,
                    y: -800,
                    duration: 1,
                })

                gsap.from(".anim-three-faq",{
                    scrollTrigger:  {
                        trigger: ".anim-one-faq",

                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: -800,


                    duration: 1,
                })
                gsap.from(".anim-four-faq",{
                    scrollTrigger:  {
                        trigger: ".anim-two-faq",

                        toggleActions: "restart none none none",
                        scrub: true,

                    },
                    x: 600,
                    duration: 1,
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/styles/styles.scss";
    .faq{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .faq-wrapper{
        max-width: 1480px;
        display: flex;
        justify-content: center;
        background-image: url("../../../assets/images/pic-for-faq/bg.png");
        grid-gap: 1rem;
        padding-bottom: 1rem;
        padding-right: 2rem;
        &_container{
            max-width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;

            &_faq-block{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: start;
               justify-content: start;
                flex-direction: column;
                border: $light-bgc solid 2px;
                border-block-end-width: 3px;
                border-block-end-width: 4px;
                border-radius: 20px;
                margin: 1rem;
                &_title{
                    font-weight: bold;
                    text-transform: uppercase;
                    border-bottom: #515a6b solid 1px;
                    padding: 1rem;
                    margin: .5rem;
                }
                &_explanation{
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    padding: 1rem;
                    margin: 1rem;

                }
                &_image-container{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    padding: 1rem;
                    margin: 1rem;
                    &_image{
                        max-width: 300px;
                        height: auto;
                        border-radius: 20%;
                        opacity: .5;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1258px){
        .faq{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        .faq-wrapper{
            max-width: 1480px;
            display: flex;
            justify-content: center;
            background-image: url("../../../assets/images/pic-for-faq/bg.png");
            grid-gap: 1rem;
            padding-bottom: 1rem;
            padding-right: 2rem;
            &_container{
                max-width: 100%;
                display: grid;
                grid-template-columns:  1fr;
                grid-gap: 1rem;

                &_faq-block{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                    flex-direction: column;
                    border: $light-bgc solid 2px;
                    border-block-end-width: 3px;
                    border-block-end-width: 4px;
                    border-radius: 20px;
                    margin: 1rem;
                    &_title{
                        font-weight: bold;
                        text-transform: uppercase;
                        border-bottom: #515a6b solid 1px;
                        padding: 1rem;
                        margin: .5rem;
                    }
                    &_explanation{
                        width: 100%;
                        height: auto;
                        display: flex;
                        justify-content: center;
                        padding: 1rem;
                        margin: 1rem;

                    }
                    &_image-container{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        align-items: center;
                        padding: 1rem;
                        margin: 1rem;
                        &_image{
                            max-width: 300px;
                            height: auto;
                            border-radius: 20%;
                            opacity: .5;
                        }
                    }
                }
            }
        }
    }
</style>