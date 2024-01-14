import { addToCompareBtnTextSTyle } from "../helpers/addToCompareBtnStyle";

export const clearCompareList = () => {
  const cleanBtn = document.querySelector(".clean-btn") as HTMLButtonElement;
  const addToCompareBtn = document.querySelector(
    ".add-to-compare-btn"
  ) as HTMLButtonElement;
  const compareBtnEl = document.querySelector(
    ".compare-btn"
  ) as HTMLButtonElement;
  const compareBtnProdIntText = document.querySelector(
    ".compare-btn-prod-int-text"
  ) as HTMLSpanElement;

  cleanBtn.addEventListener("click", () => {
    const products = JSON.parse(
      localStorage.getItem("products-compare") as string
    );
    if (products) {
      const productsCompareList = document.querySelector(
        ".products-compare-list"
      ) as HTMLUListElement;
      compareBtnEl.style.display = "none";
      productsCompareList.innerHTML = "";

      if (
        products.some((product: any) => {
          return product.id === Number(addToCompareBtn.id);
        })
      ) {
        addToCompareBtn?.classList.toggle("in-compare-btn");
      }
      addToCompareBtnTextSTyle(
        addToCompareBtn.classList.contains("in-compare-btn")
      );
      compareBtnProdIntText.textContent = `${products.length}`;
      localStorage.setItem("products-compare", JSON.stringify(null));
    }
  });
};
