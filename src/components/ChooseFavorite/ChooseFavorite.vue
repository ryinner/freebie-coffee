<template>
    <section class="choose-favorite"  id="choose-favorite" data-testid="choose-favorite">
        <div class="choose-favorite__background"></div>
        <div class="choose-favorite__header">
            <div class="choose-favorite__slogan">Choose Your Favorite</div>
            <h2 class="choose-favorite__heading">CHUẨN GU ĐÚNG VỊ</h2>
        </div>
        <div class="choose-favorite__slider">
            <Slider>
                <Product
                    class="choose-favorite__product"
                    v-for="favoriteProduct in chooseFavoritesProducts"
                    :name="favoriteProduct.name"
                    :description="favoriteProduct.description"
                    :image="favoriteProduct.image"
                    :price="favoriteProduct.price"
                    :discountPrice="favoriteProduct.discountPrice"
                />
            </Slider>
        </div>
    </section>
</template>

<script setup>
import chooseFavoritesProducts from '@/assets/maps/chooseFavoritesProducts';
import Product from '../Product/Product.vue';
import Slider from '../Slider/Slider.vue';
</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
@import "@/assets/scss/sections";
@import "@/assets/scss/grid";
.choose-favorite {
    @include section-margin;
    position: relative;
    &__background {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 30%;
        z-index: 1;
        background-color: var(--primary-color);
    }
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
    &__slider {
        z-index: 2;
        margin-left: 10%;
        position: relative;
        overflow: hidden;
    }
    &__product {
        display: flex;
        grid-column: 4 span;
        width: 560px;
    }
}
</style>