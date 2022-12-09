<template>
    <div class="p-a-wrapper">
        <div class="p-a-wrapper_animation_block">
            <img src="../assets/images/pic-for-animation/main-pic.png" alt="" class="main-pic">

        </div>
    </div>
</template>

<script>
    export default {
        name: "PresentationAnimation"
    }
</script>

<style lang="scss" scoped>
.p-a-wrapper{
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    &_animation_block{
        width: 580px;
        height: 560px;

        .main-pic{
            position: relative;
        }

    }
}
</style>