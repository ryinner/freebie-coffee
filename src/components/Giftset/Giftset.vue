<template>
    <section class="giftset" id="giftset" data-testid="giftset">
        <div class="giftset__background"></div>
        <div class="giftset__header">
            <div class="giftset__slogan">Best Gift For Best Friend</div>
            <h2 class="giftset__heading">GIFTSET</h2>
        </div>
        <div class="giftset__tab">
            <Tab>
                <GiftsetProduct
                    v-for="(product, index) in giftsetProducts" 
                    :name="product.name"
                    :price="product.price"
                    :description="product.description"
                    :type="product.type"
                    :altitude="product.altitude"
                    :image="product.image"
                    :isActive="index === 1"
                />
                <template #tabControl>
                    <TabControl 
                        v-for="index in giftsetProducts.length"
                        :index="index"
                        :isActive="index === 1"
                    />
                </template>
            </Tab>
        </div>
    </section>
</template>

<script setup>
import GiftsetProduct from '../GiftsetProduct/GiftsetProduct.vue';
import Tab from '../Tab/Tab.vue';
import TabControl from '../TabControl/TabControl.vue';
import giftsetProducts from '@/assets/maps/gifsetTabs';
</script>

<style lang="scss">
@use "@/assets/scss/vars";
@import "@/assets/scss/fonts";
@import "@/assets/scss/sections";
.giftset {
    position: relative;
    padding-bottom: 80px;
    @include section-padding;

    &__header {
        z-index: 2;
        text-align: center;
        position: relative;
        color: var(--primary-color);
        @include section-heading-margin;
    }
    &__slogan {
        @include nunito-20-regular;
    }
    &__heading {
        @include montserrat-30-regular;
    }
    &__background {
        top: 0;
        left: 0;
        width: 70%;
        height: 100%;
        position: absolute;
        background-color: var(--light-gray-color);
        z-index: 1;
    }
    &__tab {
        margin-left: 20%;
        z-index: 2;
        position: relative;
    }
}
</style>