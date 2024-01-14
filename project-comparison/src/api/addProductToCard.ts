import { updateCartInfo } from "./updateCartInfo";

export const addProductToCard = (id: string) => {
  const requestData = {
    items: [
      {
        id,
        quantity: 1,
      },
    ],
    sections:
      "cart-icon-bubble,cart-live-region-text,main-cart-items,main-cart-footer,shopify-section-template--15788854575310__cart-footer",
  };

  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      updateCartInfo(data.sections);
    })
    .catch((error) => {
      console.error("Error adding product to cart:", error);
    });
};
