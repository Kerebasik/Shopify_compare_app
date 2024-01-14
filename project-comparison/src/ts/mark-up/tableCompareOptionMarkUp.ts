export const tableCompareOptionMarkUp = (dataObj: any) => {
  return dataObj.defProdMeta
    .map((item: any) => {
      return `${
        item.active
          ? `<tr>
              <th class="thead-bg border-cell-left" style="background-color:${
                dataObj.parsedTableStyle.attributesGroupBackColor
              } ; color:${
              dataObj.parsedTableStyle.attributesGroupTextColor
            } ;">${item.content}</th>
              ${
                dataObj.option[`${item.value}`] ||
                dataObj.products
                  .map((product: any) => {
                    return `<td class="compare-table-cell del-${
                      product.id
                    }"><p class="modal-text">${
                      product[item.key] ? product[item.key] : "-"
                    }</p></td>`;
                  })
                  .join("")
              }
            </tr>`
          : ""
      }`;
    })
    .join("");
};
