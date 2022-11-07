import { render } from '@testing-library/vue';
import {test} from "vitest";
import Footer from "./Footer.vue";

test("Footer", () => {
    const {getByText} = render(Footer);
    getByText(`© Revo Coffee Việt N - 2018`);
})