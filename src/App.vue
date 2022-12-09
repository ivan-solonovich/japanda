<template>
<NavBar/>
    <MainRu/>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainRu from "@/pages/ru/MainRu";
export default {
  name: 'App',
  components: {
        NavBar,
        MainRu
  }
}
</script>

<style lang="scss">
    @import "./src/assets/styles/styles.scss";
    @import "./src/assets/styles/variable.scss";
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
    font-family: 'Montserrat', sans-serif;
}
</style>
