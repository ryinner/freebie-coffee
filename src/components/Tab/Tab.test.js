import { render } from '@testing-library/vue';
import {test} from "vitest";
import Tab from "./Tab.vue";

test("Tab", () => {
    const {getByTestId} = render(Tab);
    getByTestId(`tab`);
})