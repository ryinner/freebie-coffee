<template>
    <Header />
</template>

<script setup>
import Header from "@/layout/Header/Header.vue"
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