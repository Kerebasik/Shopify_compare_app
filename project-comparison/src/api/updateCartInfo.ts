export const updateCartInfo = (section: any) => {
  const cardIconBubble = document.getElementById(
    "cart-icon-bubble"
  ) as HTMLElement;
  const cartLiveRegionText = document.getElementById(
    "cart-live-region-text"
  ) as HTMLElement;

  if (section["cart-icon-bubble"]) {
    cardIconBubble.innerHTML = section["cart-icon-bubble"];
  }

  if (section["cart-live-region-text"] && location.pathname === "/cart") {
    cartLiveRegionText.innerHTML = section["cart-live-region-text"];
  }

  fetch("/cart.js", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then((response) => response.json())
    .then((cartData) => {
      document.documentElement.dispatchEvent(
        new CustomEvent("cart:refresh", {
          bubbles: !0,
          detail: cartData.items,
        })
      );
      document.dispatchEvent(new CustomEvent("cart:build", { bubbles: true }));
      document.dispatchEvent(
        new CustomEvent("cart:refresh", {
          bubbles: true,
          detail: cartData.items,
        })
      );
    })
    .catch((error) => {
      console.error("Error updating cart information:", error);
    });
};
