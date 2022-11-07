import { render } from '@testing-library/vue';
import {test} from "vitest";
import TabControl from "./TabControl.vue";

test("TabControl", () => {
    const {getByText} = render(TabControl, {
        props: {
            index: 1,
            isActive: false,
        }
    });
    getByText(`1`);
})