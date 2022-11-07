<template>
    <section  class="combo"  id="combo" data-testid="combo">
        <div class="combo__background"></div>
        <div class="combo__header">
            <div class="combo__slogan">Your Personalized Coffee</div>
            <h2 class="combo__heading">COMBO PHIN PHÊ</h2>
        </div>
        <div class="combo__slider">
            <Slider>
                <Product
                    class="combo__product"
                    v-for="product in comboProducts"
                    :name="product.name"
                    :description="product.description"
                    :image="product.image"
                    :price="product.price"
                    :discountPrice="product.discountPrice"
                />
            </Slider>
        </div>
    </section>
</template>

<script setup>
import Product from '../Product/Product.vue';
import Slider from '../Slider/Slider.vue';
import comboProducts from '@/assets/maps/comboProducts';

</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
@import "@/assets/scss/sections";
@import "@/assets/scss/grid";
.combo {
    @include section-padding;
    position: relative;
    padding-bottom: 80px;
    &__header {
        text-align: center;
        color: var(--primary-color);
        @include section-heading-margin;
    }
    &__slogan {
        @include nunito-20-regular;
    }
    &__heading {
        z-index: 2;
        position: relative;
        @include montserrat-30-regular;
    }
    &__background {
        width: 30%;
        height: 100%;
        background-color: var(--primary-color);
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
    &__slider {
        z-index: 2;
        margin-left: 10%;
        position: relative;
        overflow: hidden;
        position: relative;
    }
    &__product {
        width: 350px;
    }
}
</style>