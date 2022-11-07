<template>
    <article class="product">
        <picture>
            <img :src="image" :alt="name" class="product__image">
        </picture>
        <div class="product__info">
            <div class="product__main">
                <div class="product__price">{{price}}</div>
                <h3 class="product__name">{{name}}</h3>
                <div class="product__description">{{description}}</div>
                <ProductControls class="product__control" />
            </div>
        </div>
    </article>
</template>

<script setup>
import ProductControls from '../ProductControls/ProductControls.vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: [Number, String],
        required: true
    },
    discountPrice: {
        type: [String, null],
        required: true
    },
});
</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
.product {
    border-radius: 2px;
    background-color: #fff;
    -webkit-box-shadow: -4px 5px 10px 2px #cdcdcd33;
    -moz-box-shadow: -4px 5px 10px 2px #cdcdcd33;
    box-shadow: -4px 5px 10px 2px #cdcdcd33;

    &__info {
        padding: 30px;
        display: flex;
        align-items: center;
    }
    &__image {
        width: 100%;
        height: 100%;
    }
    &__price {
        color: var(--dark-accent-color);
        @include nunito-20-regular;
    }
    &__name {
        @include nunito-24-bold;
    }
    &__description {
        margin: 20px 0;
        @include nunito-16-regular;
    }
}
</style>