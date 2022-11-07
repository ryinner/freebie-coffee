import { render } from '@testing-library/vue';
import {test} from "vitest";
import ProductControls from "./ProductControls.vue";

test("ProductControls", () => {
    const {getByText} = render(ProductControls);
    getByText(`MUA NGAY`);
})