<template>
    <div class="practical-list">
        <h1 class="practical-list_title">Большинство наших

            <router-link :to="{name:'coursesRu'}">

                   <span class="the-link">курсов</span>

            </router-link>

            это - практика создания интернет-магазина,
            даже для абсолютных новичков. </h1>
        <div class="practical-list-ru-wrapper">
            <div class="practical-list-ru-wrapper_subcontainer">
                    <div class="practical-list-ru-wrapper_subcontainer_left">
                        <h3 class="practical-list-ru-wrapper_subcontainer_left_title">Вы никогда не писали код,
                            но страстно желаете начать свою IT-карьеру?</h3>
                        <p>Web-разработка, по крайней мере на ранних этапах, достаточно легка в освоении и почти сразу
                            может принести вам практическую пользу.
                            Мы создали комбинированный курс, состоящий из двух блоков: Основы веб-разработки и
                            Алгоритмы и структуры данных на основе JavaScript.
                            Разумеется мы будем строить на курсе реальное приложение.
                        </p>
                    </div>
                    <div class="practical-list-ru-wrapper_subcontainer_right">
                        <img load="lazy" class="practical-list-ru-wrapper_subcontainer_right_img"
                             src="../../../assets/images/pic-for-practical/5474233.jpg" alt="">
                    </div>
            </div>
            <div class="practical-list-ru-wrapper_subcontainer">
                <div class="practical-list-ru-wrapper_subcontainer_left">
                    <h3 class="practical-list-ru-wrapper_subcontainer_left_title">Вы освоились в html и css, работали c CMS и конструкторами сайтов.
                        Но, хотите идти в перед?</h3>
                    <p>Практический JavaScript - курс для тех, кто хочет ощутить всю мощь этого языка.
                        Манипулировать объектами, управлять событиями и оперировать данными. Глубокое погружение в нюансы,
                        которые, обычно, знают только опытные разработчики. И разумеется, написание серьезных приложений.
                    </p>
                </div>
                <div class="practical-list-ru-wrapper_subcontainer_right">
                    <img class="practical-list-ru-wrapper_subcontainer_right_img"
                         src="../../../assets/images/pic-for-practical/10502.jpg" alt="">
                </div>
            </div>
            <div class="practical-list-ru-wrapper_subcontainer">
                <div class="practical-list-ru-wrapper_subcontainer_left">
                    <h3 class="practical-list-ru-wrapper_subcontainer_left_title">Вы когда-нибудь слышали волшебное
                        слово full-stack?</h3>
                    <p>Здесь все по взрослому! Глубокое погружение в механизм работы движжка JavaScript и
                        среду исполнения Node.js, совершившую, революцию в программировании. Клиент-серверная архитектура.
                        Парадигмы функционального и объект-ориентированного программирования. И интернет-магазин,
                        который вы построите сами.
                    </p>
                </div>
                <div class="practical-list-ru-wrapper_subcontainer_right">
                    <img class="practical-list-ru-wrapper_subcontainer_right_img"
                         src="../../../assets/images/pic-for-practical/5240276.jpg" alt="">
                </div>
            </div>
            <div class="practical-list-ru-wrapper_subcontainer">
                <div class="practical-list-ru-wrapper_subcontainer_left">
                    <h3 class="practical-list-ru-wrapper_subcontainer_left_title">Читаете требования к знаниям React,
                        Vue, TypeScript, Express?</h3>
                    <p>Библиотеки, фреймворки, обертки ставшие отдельными экосистемами и изменившие подход к разработке.
                        Все они приобрели миллионы поклонников и зачастую стали основным инструментом разработки для
                        тысяч и тысяч компаний. Напишем магазин на каждом их них,
                        а что выбирать это уже только дело вашего вкуса.
                    </p>
                </div>
                <div class="practical-list-ru-wrapper_subcontainer_right">
                    <img class="practical-list-ru-wrapper_subcontainer_right_img"
                         src="../../../assets/images/pic-for-practical/Success.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PracticalListRu"
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/styles/styles.scss";
    .practical-list{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        &_title{
            max-heightwidth: 1280px;
            height: auto;
            font-size: 1.5rem;
            color: $primary-color;
           padding: 1rem;
            .the-link{
                color: crimson;
            }

        }
        .practical-list-ru-wrapper{
             max-width: 1460px;
             display: grid;
             grid-template-areas: "practical-list-ru-container_subcontainer practical-list-ru-container_subcontainer";
             grid-template-columns: 1fr 1fr;
             grid-gap: 1rem;
             background-image: url("../../../assets/images/bgi/banner-bg1.jpg");
             &_subcontainer{
                 display: grid;
                 grid-template-columns: 1fr 1fr;
                 border: $light-bgc solid 2px;
                 border-radius: 2rem;
                 grid-gap: 1rem;
                 padding-bottom: 1rem;
                 &_left{
                     margin: 2rem;
                     &_title{
                         font-weight: bold;
                     }
                 }
                 &_right{
                     margin: 1rem;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     &_img{
                         border-radius: 20%;
                     }
                 }
             }
         }
        @media screen and (max-width: 960px){
            .practical-list-ru-wrapper {
                max-width: 960px;
                display: flex;
                flex-direction: column;

                background-image: url("../../../assets/images/bgi/banner-bg2.jpg");
                &_subcontainer{
                    max-width: 100%;
                    height: auto;
                    display: grid;
                    grid-template-columns:  1fr;
                    grid-gap: 1rem;
                    padding: 1rem;
                    margin: 1rem;
                    &_right{
                        &_img{
                            max-width: calc(100vm - 50%);
                            height: auto;
                            border-radius: 20%;
                        }
                    }
                }
            }

        }
    }

</style>