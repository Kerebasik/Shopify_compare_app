export const productCompareItemMarkUp = (products: any) => {
  const productsCompareList = document.querySelector(
    ".products-compare-list"
  ) as HTMLUListElement;

  productsCompareList.innerHTML = "";
  const markUp = products
    .map(
      (product: any) => ` <li class="product-compare-item">
      <div class="product-compare-img-box">
      <img src="${product.images[0]}" alt="mobile phone picture" class="product-compare-img" width="100" height="100">
      <button id="${product.id}" class="remove-compare-product-bnt" type="button">X</button>
      </div>
      <h3 class="product-compare-title">${product.title}</h3>
    </li>`
    )
    .join("");
  productsCompareList.insertAdjacentHTML("afterbegin", markUp);
};
