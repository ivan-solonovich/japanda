<template>
    <div class="second-title">

        <p class="second-title_arrow"><img width="32" height="32" src="../../../assets/images/icons/icons8-двойная-стрелка-вниз.gif" alt=""></p>
    </div>
</template>

<script>
    export default {
        name: "SecondTitleRu"
    }
</script>

<style lang="scss" scoped>
    @import "./src/assets/styles/styles.scss";
        .second-title{
            width: 100%;
            height: 60px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &_text{
                font-size: 2rem;
                color: $primary-color ;
            }
        }
</style>