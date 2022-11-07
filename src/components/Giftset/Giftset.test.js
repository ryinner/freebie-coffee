import { render } from '@testing-library/vue';
import {test} from "vitest";
import Giftset from "./Giftset.vue";

test("Gifset", () => {
    const {getByTestId} = render(Giftset);
    getByTestId(`giftset`);
})