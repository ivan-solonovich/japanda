<template>

   <MainWrapper/>

</template>

<script>

import MainWrapper from "@/wrapper/MainWrapper";
export default {
  name: 'App',
  components: {
        MainWrapper,

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
