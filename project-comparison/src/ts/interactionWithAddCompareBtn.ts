import { attributesData } from "../helpers/attributesParsedData";
import { addToCompareBtnTextSTyle } from "../helpers/addToCompareBtnStyle";
import { productCompareItemMarkUp } from "./mark-up/productCompareItemMarkUp";
import { removeProductFromCompareList } from "./removeProductFromCompareList";

export const interactionWithAddCompareBtn = (parsedProdData: any) => {
  const addToCompareBtn = document.querySelector(
    ".add-to-compare-btn"
  ) as HTMLButtonElement;
  const compareBtnEl = document.querySelector(
    ".compare-btn"
  ) as HTMLButtonElement;
  const compareBtnProdIntText = document.querySelector(
    ".compare-btn-prod-int-text"
  ) as HTMLSpanElement;
  const compareMenuEl = document.querySelector(".compare-menu");

  addToCompareBtn?.addEventListener("click", (e) => {
    const btn = e.currentTarget as HTMLButtonElement;
    const products = JSON.parse(
      localStorage.getItem("products-compare") as string
    );

    if (btn.classList.contains("in-compare-btn")) {
      btn.classList.toggle("in-compare-btn");
      addToCompareBtnTextSTyle(btn.classList.contains("in-compare-btn"));
      const filteringProducts = products.filter(
        (product: any) => product.id !== parsedProdData.id
      );
      if (!filteringProducts.length) {
        compareBtnEl.style.display = attributesData.fixedBtnStyle.show
          ? "block"
          : "none";
        localStorage.setItem("products-compare", JSON.stringify(null));
      } else {
        localStorage.setItem(
          "products-compare",
          JSON.stringify(filteringProducts)
        );
      }
      compareBtnProdIntText.textContent = `${filteringProducts.length}`;
      productCompareItemMarkUp(filteringProducts);
    } else {
      btn.classList.toggle("in-compare-btn");
      addToCompareBtnTextSTyle(btn.classList.contains("in-compare-btn"));
      compareBtnEl.style.display = "block";
      if (products) {
        const productsToCompare = [...products, { ...parsedProdData }];
        localStorage.setItem(
          "products-compare",
          JSON.stringify(productsToCompare)
        );
        compareBtnProdIntText.textContent = `${productsToCompare.length}`;
        productCompareItemMarkUp(productsToCompare);
      } else {
        const productsToCompare = [{ ...parsedProdData }];
        localStorage.setItem(
          "products-compare",
          JSON.stringify(productsToCompare)
        );
        compareBtnProdIntText.textContent = `${productsToCompare.length}`;
        productCompareItemMarkUp(productsToCompare);
      }
      if (
        attributesData.parsedToolbarStyle.showToolbarAfterClickOnProductPage
      ) {
        compareMenuEl?.classList.add("open-menu");
      }
    }
    removeProductFromCompareList();
  });
};
