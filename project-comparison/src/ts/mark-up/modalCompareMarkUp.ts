import { modalButtonsStyle } from "../../helpers/modalButtonsStyle";
import { compareOptionMarkUp } from "./compareOptionMarkup";
import { tableProductsMarkUp } from "./tableProductsMarkUp";
import { tableCompareOptionMarkUp } from "./tableCompareOptionMarkUp";
import { attributesData } from "../../helpers/attributesParsedData";

type ObjectType = {
  [key: string]: any;
};

export const modalCompareMarkUp = (products: any, defProdMeta: any) => {
  const markUpProduct = tableProductsMarkUp(products);
  const option: ObjectType = compareOptionMarkUp(products);

  const modalMarkUp = `<div class="backdrop on-close">
      <div class="modal">
      <button class="close-modal-btn">X</button>
      <div class="table-box">
      <table class="compare-table"
      style="background-color:${
        attributesData.parsedTableStyle.backColor
      } ; color:${attributesData.parsedTableStyle.textColor} ;">
          <tbody>
          <tr>
              <th class="thead-bg border-cell-left" style="background-color:${
                attributesData.parsedTableStyle.attributesGroupBackColor
              } ; color:${
    attributesData.parsedTableStyle.attributesGroupTextColor
  } ;">Products</th>
              ${markUpProduct}             
            </tr>
          ${tableCompareOptionMarkUp({
            defProdMeta,
            parsedTableStyle: attributesData.parsedTableStyle,
            option,
            products,
          })}
          </tbody>
        </table>
      </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", modalMarkUp);
  modalButtonsStyle(attributesData.parsedTableStyle);
};
