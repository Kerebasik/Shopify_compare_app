import { addToCompareBtnTextSTyle } from "../helpers/addToCompareBtnStyle";
import { addCompareBtnMarkUp } from "./mark-up/addCompareBtnMarkUp";

export const createAddCompareBtn = (id: number) => {
  const paymentBtnBox = document.querySelector(".product-form__buttons");

  if (paymentBtnBox) {
    const products = JSON.parse(
      localStorage.getItem("products-compare") as string
    );
    const compareBtn = addCompareBtnMarkUp(id);
    paymentBtnBox.appendChild(compareBtn);
    if (products && products.some((product: any) => product.id === id)) {
      compareBtn.classList.toggle("in-compare-btn");
      addToCompareBtnTextSTyle(compareBtn.classList.contains("in-compare-btn"));
    }
  }
};
