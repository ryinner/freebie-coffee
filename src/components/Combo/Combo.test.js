import { render } from '@testing-library/vue';
import {test} from "vitest";
import Combo from "./Combo.vue";

test("Combo", () => {
    const {getByTestId} = render(Combo);
    getByTestId(`combo`);
})