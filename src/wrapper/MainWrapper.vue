<template>
    <div class="main-wrapper">
        <NavBar id="nav-bar"/>
        <router-view></router-view>
    </div>
</template>

<script>

    import NavBar from "@/components/NavBar";
    export default {
        name: "MainWrapper",
        components:{
            NavBar
        },

    }
</script>

<style scoped>

</style>