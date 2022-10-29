import { render } from '@testing-library/vue';
import {test} from "vitest";
import Header from "./Header.vue";

test("Header", () => {
    const {getByText} = render(Header)
    getByText(123);
})