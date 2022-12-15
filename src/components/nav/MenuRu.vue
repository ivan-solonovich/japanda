<template>
    <div class="menu-ru-container">
        <div>
            <OpenMobileMenuRU v-show="menuIsOpen"/>
        </div>
       <div >
           <MenuDecstopRu v-show="theDesktop() === true"/>
       </div>
        <div >
            <MenuMobileRu @click="openMenu"  v-show="theDesktop() === false"/>
            <OpenMobileMenuRU v-show="menuIsOpen" @click="closeMenu"></OpenMobileMenuRU>
        </div>

    </div>

</template>

<script>
    import MenuDecstopRu from "./MenuDecstopRu";
    import MenuMobileRu from "./MenuMobileRu";
    import OpenMobileMenuRU from "@/components/nav/OpenMobileMenuRU";

    export default {
        name: "MenuRu",
        components: {
            MenuDecstopRu,
            MenuMobileRu,
            OpenMobileMenuRU
        },
        props:{

        },
        data: () => ({
            desktop: true,
            mobile: false,
            menuIsOpen: false
        }),
        mounted() {

        },
        computed: {

        },
        methods: {
            theDesktop(){

                if(window.innerWidth < 960){
                   return this.desktop = false;
                }else {
                    return this.desktop = true;
                }

            },
            openMenu(){
                this.menuIsOpen = true;
                this.desktop = false;
            },
            closeMenu() {
                this.menuIsOpen = false;
                this.desktop = false;
            }

        }
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