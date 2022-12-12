<template>
    <div class="menu-ru-container">
        <component :is="instanceMenu"/>
    </div>

</template>

<script>
    import MenuDecstopRu from "./MenuDecstopRu";
    import MenuMobileRu from "./MenuMobileRu";
    export default {
        name: "MenuRu",
        components:{
            MenuDecstopRu,
            MenuMobileRu
        },
        computed:{
            instanceMenu(){

            const component = this.isMobile()
                ?   'MenuMobileRu'
                :   'MenuDecstopRu'
                return `${component}`
    }

         },
        methods:{
            isMobile(){
                if(screen.width <960){
                    return true
                }

            },

        },




    }
</script>

<style lang="scss" scoped>
.menu-ru-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>