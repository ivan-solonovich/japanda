<template>
    <div class="open-mobile-menu-ru">
        <div class="open-mobile-menu-ru_close-container">
            <img class="open-mobile-menu-ru_close-container_img"  src="../../assets/images/japanda-logo.png" alt="">
            <img @click="closeMenu" src="../../assets/images/icons/icons8-close-window-50.png" alt="">
        </div>

        <ul class="open-mobile-menu-ru_menu-list">
            <li class=""><router-link :to="{name:'homeRu'}">
                <div class="menu-item">
                    Home
                </div>
            </router-link></li>
            <li> <router-link :to="{name:'coursesRu'}">
                <div class="menu-item">
                    Курсы
                </div>
            </router-link></li>
            <li> <router-link :to="{name:'pricesRu'}">
                <div class="menu-item">
                    Цены
                </div>
            </router-link></li>
            <li>
                <router-link :to="{name:'aboutRu'}">
                    <div class="menu-item">
                        О нас
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "openMobileMenuRU",
        methods:{
            closeMenu() {
                this.menuIsOpen  = false
                this.$emit('closeMenu')

            },
            emits:[]
        },


    }
</script>

<style lang="scss" scoped>
    @import "src/assets/styles/styles";
    .open-mobile-menu-ru{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: #515a6b solid 2px;
        border-right: #515a6b solid 2px;
        border-bottom: #515a6b solid 2px;
        background-image: url("../../assets/images/bgi/banner-bg2.jpg");
        background-size: cover;
        color: $primary-color;
        z-index: 9998;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &_close-container{
            width: 100%;
            height: 60px;
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-left: 1rem;
            padding-right: 1rem;
            top: 1rem;
            &_img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
        }

        }
        &_menu-list{
            font-size: 3rem;
        }
    }
</style>