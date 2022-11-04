import { render } from '@testing-library/vue';
import {test} from "vitest";
import CoffeeBuild from "./CoffeeBuild.vue";

test("CoffeeBuild", () => {
    const {getByTestId} = render(CoffeeBuild);
    getByTestId(`coffee-build`);
})