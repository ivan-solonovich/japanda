<template>
    <div class="title-ru-wrapper">

        <h1 class="title-ru-wrapper_slogan">
            &#8220;Инвестиции в будушее - начинаются в настоящем&#8221;
        </h1>
        <ul class="title-ru-wrapper_points">
            <li>Мы создали комфортную среду, способную раскрывать таланты.</li>
            <li>Наши подходы иновационны и нацелены на формирование экспертов.</li>
            <li>Самые сложные концепции, мы объясняем просто и понятно.</li>
            <li>Больше никаких занудных туториалов, только реальные и наглядные примеры.</li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "TitleRu"
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/styles/styles.scss";
    .title-ru-wrapper{
        width: 100%;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &_quota{
            padding-left: 2rem;
            padding-right: 2rem;
            color: #766e3f;
            font-weight: bold;
            font-size: 2rem;
        }
        &_slogan{
            font-size: 3rem;
            color: $primary-color;
            padding-left: 2rem;
            padding-right: 2rem;

        }
        &_points{
            width: 100%;
            max-width: 520px;
            padding: 2rem;
            li{
                color: $second-color;
                font-weight: bold;
                text-transform: uppercase;
                padding: 1rem;
            }
        }
    }
</style>