<template>
    <footer class="footer">
        © Revo Coffee Việt N - 2018
    </footer>
</template>

<script setup>

</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
.footer {
    padding: 6px;
    text-align: center;
    color: var(--primary-color);
    background-color: var(--light-gray-color);
    @include nunito-16-regular;
}
</style>