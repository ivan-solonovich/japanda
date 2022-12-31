<template>
    <div class="menu-wrapper">
        <div class="menu-ru">
            <router-link :to="{name:'homeRu'}">
                <div :class="{ shake: noActivated }">
                    <div  @click="animateButton" class="menu-item">
                        Home
                    </div>
                </div>
            </router-link>
            <router-link :to="{name:'coursesRu'}">
                <div :class="{ shake: noActivated }">
                    <div class="menu-item">
                        Курсы
                    </div>
                </div>
            </router-link>
            <router-link :to="{name:'pricesRu'}">
                <div :class="{ shake: noActivated }">
                    <div class="menu-item">
                        Цены
                    </div>
                </div>
            </router-link>
            <router-link :to="{name:'aboutRu'}">
                <div :class="{ shake: noActivated }">
                    <div class="menu-item">
                        О нас
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuDecstopRu",
        data() {
            return {
                noActivated: false
            }
        },
        methods:{
            animateButton (){
                this.noActivated = true;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .menu-ru{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        .menu-item{
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url('../../assets/images/bgi/Btn04-for-desktop-menu.png');
            background-size: cover;
            background-origin: border-box;
            padding-left: 2rem;
            padding-right: 2rem;
            margin: 1rem;
        }
    }
    .shake {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>