<template>
    <div class="cloud-of-technology-wrapper">
        <img src="../assets/images/programing-languages/icons8-html-5-48.png" alt="html" class="cloud-of-technology-wrapper_img">
        <img src="../assets/images/programing-languages/icons8-css3-100.png" alt="html" class="cloud-of-technology-wrapper_img">
        <img src="../assets/images/programing-languages/icons8-nodejs-48.png" alt="html" class="cloud-of-technology-wrapper_img">
        <img src="../assets/images/programing-languages/icons8-javascript.gif" alt="html" class="cloud-of-technology-wrapper_img">
        <img src="../assets/images/programing-languages/icons8-nuxt-js-a-free-and-open-source-web-application-framework-36.png" alt="html" class="cloud-of-technology-wrapper_img">
        <img src="../assets/images/programing-languages/icons8-react-native-64.png" alt="html" class="cloud-of-technology-wrapper_img">
        <img src="../assets/images/programing-languages/icons8-vue-js-48.png" alt="html" class="cloud-of-technology-wrapper_img">
    </div>
</template>

<script>
    export default {
        name: "CloudOfTechnology"
    }
</script>

<style lang="scss" scoped>
.cloud-of-technology-wrapper{
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    &_img{
        width: 48px;
        height: 48px;
    }
}
</style>