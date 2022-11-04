import { render } from '@testing-library/vue';
import {test} from "vitest";
import Product from "./Product.vue";

test("Product", () => {
    const {getByText} = render(Product, {
        props: {
            name: "REVO Origin",
            description: "hậu ngọt, ít đắng, vị chua dâu",
            image: "/assets/images/products/orange_package.png",
            price: "139.000",
            discountPrice: null,
        }
    });
    getByText(`REVO Origin`);
})