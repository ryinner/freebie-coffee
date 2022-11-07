<template>
    <div class="tab">
        <slot></slot>
        <div class="tab__controls">
            <slot name="tabControl"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.tab {
    display: flex;

    &__controls {
        display: flex;
        flex-direction: column;
    }
}
</style>