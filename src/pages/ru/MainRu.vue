<template>
    <div class="wrapper">
        <div class="m-r-container">
            <PresentationAnimation class="present"/>
            <TitleRu class="title"/>
        </div>
        <BenefitsListRu/>
        <PracticalListRu/>

        <FaqRu/>
    </div>
</template>

<script>
    import PresentationAnimation from "@/components/PresentationAnimation";
    import TitleRu from "@/pages/ru/TitleRu";
    import BenefitsListRu from "@/pages/ru/BenefitsListRu/BenefitsListRu";
    import PracticalListRu from "@/pages/ru/practicalListRu/PracticalListRu";

    import FaqRu from "@/pages/ru/faq/FaqRu";
    export default {
        name: "MainRu",
        components:{
            PresentationAnimation,
            TitleRu,
            BenefitsListRu,
            PracticalListRu,
            FaqRu
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
@media screen and (max-width: 960px) {
    .wrapper{
        max-height: 80vh;
    }
    .m-r-container{
        width: 100%;
        display: grid;
        grid-gap: 1rem;
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