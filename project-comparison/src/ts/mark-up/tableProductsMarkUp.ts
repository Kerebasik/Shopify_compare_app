export const tableProductsMarkUp = (products: any) => {
  return products
    .map((product: any) => {
      return `<th  scope="col" class="compare-table-cell del-${product.id}">
                <div class="product-container">
                <div class="product-info-box">
                <button id="${product.id}" class="remove-compare-product-bnt" type="button">X</button>
                  <img src="${product.images[0]}" alt="product picture" class="modal-product-img"/>
                  <h3 class="modal-product-title">${product.title}</h3>
                </div>
                <div class="product-action-box">
                  <button id="${product.variants[0].id}" class="add-to-cart-modal-btn">Add to cart</button>
                  <a href="${product.url}" class="modal-product-link">Learn more</a>
                </div>
                </div>
              </th>`;
    })
    .join("");
};
