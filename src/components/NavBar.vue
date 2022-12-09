<template>
    <div class="n-container">
        <router-link :to="{name:'homeRu'}">
        <div class="n-container_logo  pl-2">

            <img class="n-container_logo_images" width="64" height="auto"  src="../assets/images/japanda-logo.png" alt="">

            <h1 id="logo-main" class="n-container_logo_title pl-2">
                JaP@nda
            </h1>

        </div>
        </router-link>
        <div class="menu">
            <MenuRu/>
        </div>
<!--        <div class="lang">-->
<!--            -->
<!--        </div>-->
    </div>
</template>

<script>
    import MenuRu from "@/components/nav/MenuRu";


    export default {
        name: "NavBar",
        components:{
            MenuRu
        }

    }
</script>

<style lang="scss">
    @import "./src/assets/styles/styles.scss";
    @import "./src/assets/styles/variable.scss";
    .n-container{
        display: grid;
        grid-template-columns: 2fr 4fr;
        width: 100%;
        min-height: 90px;
        background-color: $light-bgc;
        &_logo{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: xx-large;
        }
        &_logo_title{
            color: $primary-color;
        }
        &_logo_images{

            border-radius: 50%;
        }
    }
</style>