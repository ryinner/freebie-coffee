import { render } from '@testing-library/vue';
import {test} from "vitest";
import GiftsetProduct from "./GiftsetProduct.vue";

test("GiftsetProduct", () => {
    const {getByText} = render(GiftsetProduct, {
        props: {
            price: "285.000",
            name: "Giftset",
            description: "Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.",
            type: "Fine Robusta Blend",
            altitude: "700 - 800m",
            image: "/assets/images/products/coffee_set_01.png"
        }
    });
    getByText(`Giftset`);
})