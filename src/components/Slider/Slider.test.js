import { render } from '@testing-library/vue';
import {test} from "vitest";
import Slider from "./Slider.vue";

test("Slider", () => {
    const {getByTestId} = render(Slider);
    getByTestId(`slider`);
})