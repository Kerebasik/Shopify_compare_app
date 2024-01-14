import { attributesData } from "../helpers/attributesParsedData";
import { addProductToCard } from "../api/addProductToCard";
import { modalCompareMarkUp } from "./mark-up/modalCompareMarkUp";
import { removeProductFromCompareList } from "./removeProductFromCompareList";

export const interactionWithCompareMenu = () => {
  const compareBtnEl = document.querySelector(".compare-btn");
  const closeBtnEl = document.querySelector(".close-btn");
  const compareMenuEl = document.querySelector(".compare-menu");
  const toCompareBtn = document.querySelector(".to-compare-btn");

  compareBtnEl?.addEventListener("click", () => {
    if (attributesData.parsedToolbarStyle.showToolbar) {
      compareMenuEl?.classList.add("open-menu");
    }
  });

  closeBtnEl?.addEventListener("click", () => {
    compareMenuEl?.classList.remove("open-menu");
  });

  toCompareBtn?.addEventListener("click", () => {
    const products = JSON.parse(
      localStorage.getItem("products-compare") as string
    );
    modalCompareMarkUp(products, attributesData.defProdMeta);
    const closeModalBtn = document.querySelector(".close-modal-btn");
    const backdrop = document.querySelector(".backdrop");
    const addToCartBtn = document.querySelectorAll(".add-to-cart-modal-btn");

    addToCartBtn?.forEach((btn) =>
      btn.addEventListener("click", () => {
        const productId = btn.id;
        addProductToCard(productId);
      })
    );
    backdrop?.classList.toggle("on-close");
    document.body.style.overflow = "hidden";

    closeModalBtn?.addEventListener("click", () => {
      backdrop?.classList.toggle("on-close");
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
      backdrop?.remove();
    });
    window.addEventListener("keydown", handleEsc);
    function handleEsc(e: KeyboardEvent) {
      if (e.code === "Escape") {
        backdrop?.classList.toggle("on-close");
        window.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "auto";
        backdrop?.remove();
      }
    }
    removeProductFromCompareList();
  });
};

// window.location.href = "/pages/compare-products";
// const shopifyDomain = "sandbox2023.myshopify.com";
// const products = JSON.parse(
//   localStorage.getItem("products-compare") as string
// );
// const itemsToCompare = products.map((product: any) => product.id);
// console.log(itemsToCompare);

// const compareUrl =
//   "https://" +
//   shopifyDomain +
//   "/apps/products-compare/?items=" +
//   itemsToCompare.join("%2C");

// window.location.href = compareUrl;
