import { render } from '@testing-library/vue';
import {test} from "vitest";
import Cart from "./Cart.vue";

test("Cart", () => {
    const {getByTestId} = render(Cart);
    getByTestId(`cart`);
})