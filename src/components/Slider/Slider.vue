<template>
    <div class="slider" data-testid="slider">
        <slot></slot>
        <div class="slider__opacity"></div>
        <div class="slider__right">
            <picture class="slider__right-button"><img src="@/assets/images/icons/right-arrow.svg" alt="slider-right-button"></picture>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/grid";
.slider {
    @include grid-row;
    width: 100%;
    gap: 30px;
    position: relative;
    &__opacity {
        top: 0;
        right: 0;
        width: 10%;
        height: 100%;
        opacity: 0.8;
        position: absolute;
        background-color: var(--white-color);
    }
    &__right {
        background: var(--dark-accent-color);
        position: absolute;
        top: 50%;
        right: 7%;
        width: 48px;
        height: 48px;
        border-radius: 100%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 300ms all ease-in;

        &:hover {
            transition: 300ms all ease-out;
            background-color: var(--primary-color);
        }
    }
    &__right-button {
        display: flex;
        user-select: none;
        pointer-events: none;
    }
}
</style>