import "./index.css";
import { compareMenuMarkUp } from "./ts/mark-up/compareMenuMarkUp";
import { compareBtnMarkUp } from "./ts/mark-up/compareBtnMarkUp";
import { productCompareItemMarkUp } from "./ts/mark-up/productCompareItemMarkUp";
import { interactionWithCompareMenu } from "./ts/interactionWithCompareMenu";
import { createAddCompareBtn } from "./ts/createAddCompareBtnn";
import { clearCompareList } from "./ts/clearCompareList";
import { removeProductFromCompareList } from "./ts/removeProductFromCompareList";
import { interactionWithAddCompareBtn } from "./ts/interactionWithAddCompareBtn";

document.addEventListener("DOMContentLoaded", function () {
  const parsedProdData = JSON.parse(
    localStorage.getItem("product-data") as string
  );
  const products = JSON.parse(
    localStorage.getItem("products-compare") as string
  );

  compareBtnMarkUp(products);
  compareMenuMarkUp();

  if (products) {
    productCompareItemMarkUp(products);
  }
  interactionWithCompareMenu();
  createAddCompareBtn(parsedProdData?.id);
  interactionWithAddCompareBtn(parsedProdData);
  removeProductFromCompareList();
  clearCompareList();

  document.addEventListener("cart:refresh", function (event) {
    if (location.pathname === "/cart") {
      location.reload();
    }
  });
});
