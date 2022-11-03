import { render } from '@testing-library/vue';
import {test} from "vitest";
import Navigation from "./Navigation.vue";

test("Navigation", () => {
    const {getByText} = render(Navigation)
    getByText(`TRANG CHỦ`);
})