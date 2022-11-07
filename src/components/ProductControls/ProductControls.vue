<template>
    <div class="product-controls">
        <button class="product-controls__cart">MUA NGAY</button>
        <a class="product-controls__more">CHI TIẾT</a>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
@import "@/assets/scss/sections";
.product-controls {
    &__cart {
        color: #fff;
        cursor: pointer;
        padding: 6px 16px;
        border-radius: 20px;
        border: transparent;
        background-color: var(--dark-accent-color);
        transition: 300ms all ease-in;
        @include nunito-16-regular;

        &:hover {
            transition: 300ms all ease-out;
            background-color: var(--primary-color);
        }
    }
    &__more {
        cursor: pointer;
        padding: 6px 32px;
        color: var(--primary-color);
        transition: 300ms all ease-in;
        @include nunito-16-bold;

        &:hover {
            transition: 300ms all ease-out;
            color: var(--dark-accent-color);
        }
    }
}
</style>