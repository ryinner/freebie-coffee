<template>
    <Header />
    <main>
        <CoffeeBuild />
        <ChooseFavoriteVue />
        <Gifset />
    </main>
</template>

<script setup>
import Header from "@/layout/Header/Header.vue"
import ChooseFavoriteVue from "./components/ChooseFavorite/ChooseFavorite.vue";
import CoffeeBuild from "./components/CoffeeBuild/CoffeeBuild.vue";
import Gifset from "./components/Giftset/Gifset.vue";
</script>

<style lang="scss">
@use "@/assets/scss/vars";
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    margin: 0 auto;
    max-width: 1440px;
    background-color: var(--white-color);
}
</style>