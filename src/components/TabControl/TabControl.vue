<template>
    <div class="tab-control" :class="{'tab-control--active': isActive}">
        {{index}}
    </div>
</template>

<script setup>
defineProps({
    index: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    }
})
</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
.tab-control {
    background-color: var(--light-gray-color);
    color: var(--primary-color);
    padding: 52px 30px;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    @include montserrat-30-regular;

    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
    &--active {
        border-left: none;
        border: 1px solid var(--light-gray-color);
        background: #fff;
    }
}
</style>