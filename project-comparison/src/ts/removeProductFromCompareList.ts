import { addToCompareBtnTextSTyle } from "../helpers/addToCompareBtnStyle";
import { productCompareItemMarkUp } from "./mark-up/productCompareItemMarkUp";

export const removeProductFromCompareList = () => {
  const addToCompareBtn = document.querySelector(
    ".add-to-compare-btn"
  ) as HTMLButtonElement;
  const removeButtons = document.querySelectorAll(
    ".remove-compare-product-bnt"
  );
  const compareBtnEl = document.querySelector(
    ".compare-btn"
  ) as HTMLButtonElement;
  const compareBtnProdIntText = document.querySelector(
    ".compare-btn-prod-int-text"
  ) as HTMLSpanElement;
  removeButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const products = JSON.parse(
        localStorage.getItem("products-compare") as string
      );
      if (addToCompareBtn?.id === btn.id) {
        addToCompareBtn.classList.toggle("in-compare-btn");
        addToCompareBtnTextSTyle(
          addToCompareBtn.classList.contains("in-compare-btn")
        );
      }
      const filteringProducts = products.filter(
        (product: any) => product.id !== Number(btn.id)
      );
      if (!filteringProducts.length) {
        compareBtnEl.style.display = "none";
        localStorage.setItem("products-compare", JSON.stringify(null));
      } else {
        localStorage.setItem(
          "products-compare",
          JSON.stringify(filteringProducts)
        );
      }
      compareBtnProdIntText.textContent = `${filteringProducts.length}`;
      productCompareItemMarkUp(filteringProducts);
      const allElWithId = document.querySelectorAll(`.del-${btn.id}`);

      allElWithId.forEach((el) => {
        el.remove();
      });
      removeProductFromCompareList();
    })
  );
};
