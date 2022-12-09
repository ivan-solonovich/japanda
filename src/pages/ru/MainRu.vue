<template>
    <div class="m-r-container">
        <PresentationAnimation/>
        <TitleRu/>
    </div>
</template>

<script>
    import PresentationAnimation from "@/components/PresentationAnimation";
    import TitleRu from "@/pages/ru/TitleRu";
    export default {
        name: "MainRu",
        components:{
            PresentationAnimation,
            TitleRu
        }
    }
</script>

<style scoped>
.m-r-container{
    background-image: url("../../assets/images/bgi/banner-bg2.jpg");
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 1058px) {
    .m-r-container{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>