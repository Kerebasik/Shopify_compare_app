import { getRefactorPrice } from "../../helpers/priceRefactore";

export const compareOptionMarkUp = (products: any) => {
  return {
    variantsTitle: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.variants[0].title ? product.variants[0].title : "-"
        }</p></td>`;
      })
      .join(""),
    price: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.price ? `₴${getRefactorPrice(product.price)} UAH` : "-"
        }</p></td>`;
      })
      .join(""),
    comparedAtPrice: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.compare_at_price ? product.compare_at_price : "-"
        }</p></td>`;
      })
      .join(""),
    sku: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.variants[0].sku ? product.variants[0].sku : "-"
        }</p></td>`;
      })
      .join(""),
    barcode: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.variants[0].barcode ? product.variants[0].barcode : "-"
        }</p></td>`;
      })
      .join(""),
    type: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${product.type ? product.type : "-"}</p></td>`;
      })
      .join(""),
    vendor: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.vendor ? product.vendor : "-"
        }</p></td>`;
      })
      .join(""),
    available: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.available ? product.available : "-"
        }</p></td>`;
      })
      .join(""),
    description: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.description ? product.description : "-"
        }</p></td>`;
      })
      .join(""),
    tags: products
      .map((product: any) => {
        return `<td class="compare-table-cell del-${
          product.id
        }"><p class="modal-text">${
          product.tags.length ? product.tags : "-"
        }</p></td>`;
      })
      .join(""),
  };
};
