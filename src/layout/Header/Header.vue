<template>
    <header class="header" id="header" data-testid="header">
        <div class="header__logo-cart">
            <picture class="header__logo">
                <img src="@/assets/images/header/headerLogo.png" alt="logo revo">
            </picture>
            <Cart class="header__cart" />
        </div>
        <picture>
            <img src="@/assets/images/header/header.png" alt="very cool photo" class="header__picture">
        </picture>
        <div class="header__right-bar">
            <Navigation />
        </div>
        <div class="header__slogan">
            <div class="header__text">YOUR </div>
            <div class="header__text header__text--primary">PERSONALIZED</div>
            <div class="header__text">COFFEE</div>
        </div>
    </header>
</template>

<script setup>
import Cart from '../Cart/Cart.vue';
import Navigation from '../Navigation/Navigation.vue';

</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/grid";
@import "@/assets/scss/fonts";

.header {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: end;

    &__picture {
        width: 100%;
        height: 100%;
    }

    &__right-bar {
        min-height: 100%;
        min-width: 328px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
    }

    &__logo-cart {
        position: absolute;
        top: 20%;
        left: 50%;
        width: 80%;
        transform: translateX(-50%);
        @include grid-row;
    }

    &__logo {
        grid-column: 1;
    }

    &__cart {
        grid-column: 12;
    }

    &__slogan {
        position: absolute;
        bottom: 20%;
        left: 10%;
    }

    &__text {
        color: var(--primary-color);
        @include montserrat-54-bold;

        &--primary {
            color: var(--white-color);
            background-color: var(--dark-accent-color);
        }
    }
}
</style>