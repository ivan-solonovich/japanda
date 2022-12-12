<template>
    <div class="menu-wrapper">
        <div class="menu-ru">
            <router-link :to="{name:'homeRu'}">
                <div class="menu-item">
                    Home
                </div>
            </router-link>
            <router-link :to="{name:'coursesRu'}">
                <div class="menu-item">
                    Курсы
                </div>
            </router-link>
            <router-link :to="{name:'pricesRu'}">
                <div class="menu-item">
                    Цены
                </div>
            </router-link>
            <router-link :to="{name:'aboutRu'}">
                <div class="menu-item">
                    О нас
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuDecstopRu"
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
            padding-right: 2rem;
        }
    }
</style>