<template>
    <div class="menu-mobile">
        <img @click="$emit('click')" src="../../assets/images/icons/icons8-меню-в-квадрате-50.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "MenuMobileRu",

    }
</script>

<style lang="scss" scoped>
.menu-mobile{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/images/bgi/Btn04-for-desktop-menu.png');
    background-size: cover;

    padding-left: 1rem;
    padding-right: 1rem;
    margin-right: 2rem;
}
</style>