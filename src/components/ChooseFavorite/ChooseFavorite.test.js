import { render } from '@testing-library/vue';
import {test} from "vitest";
import ChooseFavorite from "./ChooseFavorite.vue";

test("ChooseFavorite", () => {
    const {getByTestId} = render(ChooseFavorite);
    getByTestId(`choose-favorite`);
})