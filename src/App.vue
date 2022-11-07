<template>
    <Header />
    <main>
        <CoffeeBuild />
        <ChooseFavorite />
        <Gifset />
        <Combo />
    </main>
    <Footer />
</template>

<script setup>
import Header from "@/layout/Header/Header.vue"
import ChooseFavorite from "./components/ChooseFavorite/ChooseFavorite.vue";
import CoffeeBuild from "./components/CoffeeBuild/CoffeeBuild.vue";
import Combo from "./components/Combo/Combo.vue";
import Gifset from "./components/Giftset/Giftset.vue";
import Footer from "./layout/Footer/Footer.vue";
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