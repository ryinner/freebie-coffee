<template>
    <header class="header" id="header">
        <picture>
            <img src="@/assets/images/header/header.png" alt="very cool photo" class="header__picture">
        </picture>
        <div class="header__right-bar">
            <Navigation />
        </div>
    </header>
</template>

<script setup>
import Navigation from '../Navigation/Navigation.vue';

</script>

<style lang="scss">
@use "@/assets/scss/vars";
.header {
    width: 100%;
    display: flex;
    justify-content: end;

    &__picture {
        width: 100%;
        height: 100%;
    }

    &__right-bar {
        min-height: 100%;
        min-width: 328px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
    }
}
</style>