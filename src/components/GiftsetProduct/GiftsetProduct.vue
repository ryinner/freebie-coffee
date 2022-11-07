<template>
    <div class="giftset-product" :class="{'giftset-product--active': isActive}">
        <picture class="giftset-product__image">
            <img :src="image" :alt="name">
        </picture>
        <div class="giftset-product__info">
            <div class="giftset-product__price">{{price}}</div>
            <h3 class="giftset-product__name">{{name}}</h3>
            <div class="giftset-product__description">{{description}}</div>
            <div class="giftset-product__additional">
                <div class="giftset-product__icon coffee-type">
                    <picture>
                        <img src="@/assets/images/icons/iconsCoffeeForGiftSet.svg" alt="coffee icon">
                    </picture>
                    <div class="coffee-type__info">
                        <div class="coffee-type__heading">Loại hạt</div>
                        <div class="coffee-type__text">{{type}}</div>
                    </div>
                </div>
                <div class="giftset-product__icon mountain">
                    <picture>
                        <img src="@/assets/images/icons/iconsMountsForGiftSet.svg" alt="mountain icon">
                    </picture>
                    <div class="mountain__info">
                        <div class="mountain__heading">Độ cao</div>
                        <div class="mountain__text">{{altitude}}</div>
                    </div>
                </div>
            </div>
            <ProductControls class="giftset-product__controls" />
        </div>
    </div>
</template>

<script setup>
import ProductControls from '../ProductControls/ProductControls.vue';

defineProps({
    price: {
        type: [String, Number],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    altitude: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})
</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
.giftset-product {
    display: none;
    position: relative;

    &__info {
        padding: 40px 80px 40px 350px;
        width: 850px;
        border: 1px solid var(--light-gray-color);
        border-radius: 2px;
        background-color: #fff;
        height: 100%;
    }
    &__name {
        margin: 20px 0;
        @include nunito-24-bold;
    }
    &__description {
        margin: 20px 0;
        @include nunito-16-regular;
    }
    &__price {
        color: var(--dark-accent-color);
        @include nunito-20-regular;
    }
    &__image {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-40%, -50%);
    }
    &__additional, &__controls {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    &__additional {
        margin-top: 20px;
    }
    &__controls {
        margin-top: 46px;
    }
    &--active {
        display: block;
    }
}

.mountain, .coffee-type {
    display: flex;

    &__heading {
        @include nunito-16-light;
        color: var(--primary-color);
    }

    &__text {
        @include nunito-16-regular;
        color: var(--primary-color);
    }
}
</style>