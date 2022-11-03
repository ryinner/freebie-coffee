<template>
    <div class="cart" data-testid="cart">
        <picture class="cart__container">
            <img class="cart__icon" src="@/assets/images/icons/iconsCart.svg">
            <div class="cart__counter">0</div>
        </picture>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
@use "@/assets/scss/vars";
.cart {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    &__container {
        position: relative;
    }

    &__counter {
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        text-align: center;
        position: absolute;
        border-radius: 100%;
        color: var(--white-color);
        background: var(--dark-accent-color);
    }
}
</style>