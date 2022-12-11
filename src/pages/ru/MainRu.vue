<template>
    <div class="wrapper">
        <div class="m-r-container">
            <PresentationAnimation class="present"/>
            <TitleRu class="title"/>
        </div>
        <BenefitsListRu/>
        <CloudOfTechnology/>
    </div>
</template>

<script>
    import PresentationAnimation from "@/components/PresentationAnimation";
    import TitleRu from "@/pages/ru/TitleRu";
    import BenefitsListRu from "@/pages/ru/BenefitsListRu/BenefitsListRu";
    import CloudOfTechnology from "@/components/CloudOfTechnology";
    export default {
        name: "MainRu",
        components:{
            PresentationAnimation,
            TitleRu,
            BenefitsListRu,
            CloudOfTechnology
        }

    }
</script>

<style lang="scss" scoped>
.m-r-container{
    background-image: url("../../assets/images/bgi/banner-bg2.jpg");
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "present title";
    .present{
        grid-area: present;
    }
    .title{
        grid-area: title;
    }
}
@media screen and (max-width: 1058px) {
    .m-r-container{
        width: 100%;
        display: grid;
        grid-template-areas:
                                "title"
                                "present";
       grid-auto-flow: column;

    }
    .present{
        width: 100%;
    }
    .title{
        width: 100%;
    }
}
</style>