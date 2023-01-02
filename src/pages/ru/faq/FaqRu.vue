<template>
   <div class="faq-wrapper">
        <div class="faq-wrapper_container">
                <div class="faq-wrapper_container_faq-block">
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
                </div>
                <div class="faq-wrapper_container_faq-block">
                        <div class="faq-wrapper_container_faq-block_title">
                            <h2>Только практически применимые примеры и задания</h2>
                        </div>
                        <div class="faq-wrapper_container_faq-block_explanation">
                            <p>Заканчивает человек униварситет, приходит на работу и ... - начинает учится работать!
                                Наш подход несколько иной - вы сразу столкнетесь с задачами применимыми в жизни и
                                разберетесь как их решить. Финал любого курса - это собственный сервис.
                            </p>
                        </div>
                    </div>
            <div class="faq-wrapper_container_faq-block">
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
                </div>


   </div>
</template>

<script>
    export default {
        name: "FaqRu"
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/styles/styles.scss";
    .faq-wrapper{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 1rem;
        &_container{
            max-width: 1480px;
            background-image: url("../../../assets/images/pic-for-faq/bg.png");
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 1rem;
            &_faq-block{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 1rem;
                    padding: 1rem;
                }
                &_image-container{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                    margin: 1rem;
                }
            }
        }
    }
</style>