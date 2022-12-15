<template>
    <div class="cloud-of-technology-wrapper">
        <div id="cloud-of-languages" class="cloud-of-technology-wrapper_icons-container">
            <img id="icon-1" src="../assets/images/programing-languages/icons8-html-5-48.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-2" src="../assets/images/programing-languages/icons8-css3-100.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-3" src="../assets/images/programing-languages/icons8-nodejs-48.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-4" src="../assets/images/programing-languages/icons8-javascript-48.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-5" src="../assets/images/programing-languages/icons8-nuxt-js-a-free-and-open-source-web-application-framework-36.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-6" src="../assets/images/programing-languages/icons8-react-native-64.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-7" src="../assets/images/programing-languages/icons8-vue-js-48.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-8" src="../assets/images/programing-languages/icons8-git-48.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">
            <img id="icon-9" src="../assets/images/programing-languages/nextjs_icon_132160.png" alt="html" class="cloud-of-technology-wrapper_icons-container_img">

        </div>
    </div>
</template>

<script>
    import {gsap} from "gsap";
    export default {
        name: "CloudOfTechnology",
        mounted() {
            gsap.from("#icon-1", {x: 1920, y: -1920,  duration:1});
            gsap.from("#icon-2", {x: -1920, y: 1920, delay: .5,  duration:1});
            gsap.from("#icon-3", {x: 1920, y: 1920, delay: 1,  duration:1});
            gsap.from("#icon-4", {x: -1920, y: -1920, delay: 1.5,  duration:1});
            gsap.from("#icon-5", {x: 1920, y: -1920, delay: 2,  duration:1});
            gsap.from("#icon-6", {x: -1920, y: 1920, delay: 1.5,  duration:1});
            gsap.from("#icon-7", {x: 1920, y: 1920, delay: 2,  duration:1});
            gsap.from("#icon-8", {x: -1920, y: -1920, delay: 2.5,  duration:1});
            gsap.from("#icon-9", {x: 1920, y: -1920, delay: 1.5,  duration:1});
        }
    }
</script>

<style lang="scss" scoped>
.cloud-of-technology-wrapper{
    max-width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    &_icons-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        &_img{
            width: 64px;
            height: 64px;
            padding: 1rem;
        }
    }

}
</style>