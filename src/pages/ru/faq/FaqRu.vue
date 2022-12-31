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
            }
        }
    }
</style>