<template>
    <nav>
        <ul class="navigation">
            <li v-for="(navigationItem, index) in navigation" class="navigation__item" :class="{'navigation__item--active': (index === 0)}">
                <a :href="`#${navigationItem.hash}`" class="navigation__link">{{navigationItem.name}}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import navigation from '@/assets/maps/navigation';

</script>

<style lang="scss">
@import "@/assets/scss/vars";
@import "@/assets/scss/fonts";
    .navigation {
        list-style-type: none;
        &__item {
            @include nunito-16-regular;
            margin: 30px 0;
            &--active {
                @include nunito-16-bold;
            }
        }
        &__link {
            text-decoration: none;
            color: var(--white-color);
            transition: 300ms ease-in;
            &:hover {
                transition: 300ms ease-out;
                color: var(--dark-accent-color);
            }
        }
    }
</style>