<template>
    <section class="coffee-build" id="coffee" data-testid="coffee-build">
        <div class="coffee-build__header">
            <div class="coffee-build__slogan">Your Personalized Coffee</div>
            <h2 class="coffee-build__heading">COFFEE BUILD YOUR BASE</h2>
        </div>
        <div class="coffee-build__content">
            <div class="coffee-build__item" v-for="coffeeBuildItem in coffeeBuildItems">
                <div class="coffee-info">
                    <picture>
                        <img :src="coffeeBuildItem.icon" :alt="coffeeBuildItem.heading" class="coffee-info__icon">
                    </picture>
                    <h3 class="coffee-info__heading">{{coffeeBuildItem.heading}}</h3>
                    <div class="coffee-info__text">
                        {{coffeeBuildItem.text}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import coffeeBuildItems from '@/assets/maps/coffeeBuildItems';
</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
@import "@/assets/scss/sections";
@import "@/assets/scss/grid";
.coffee-build {
    @include section-margin;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    &__header {
        text-align: center;
        color: var(--primary-color);
        @include section-heading-margin;
    }
    &__slogan {
        @include nunito-20-regular;
    }
    &__heading {
        @include montserrat-30-regular;
    }
    &__content {
        @include grid-row;
    }
    &__item {
        grid-column: span 3;
        display: flex;
        justify-content: center;
    }
}

.coffee-info {
    text-align: center;
    max-width: 232px;

    &__heading {
        margin-bottom: 12px;
        margin-top: 42px;
        @include nunito-24-bold;
    }
    &__text {
        @include nunito-16-regular;
    }
    &__icon {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
}
</style>