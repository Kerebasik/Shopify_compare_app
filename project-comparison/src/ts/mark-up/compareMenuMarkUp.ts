import { attributesData } from "../../helpers/attributesParsedData";
import { toolbarBtnStyle } from "../../helpers/toolbarBtnsStyle";

export const compareMenuMarkUp = () => {
  const menuEl = document.createElement("div");
  const closeBtn = document.createElement("button");
  const cleanBtn = document.createElement("button");
  const toCompareBtn = document.createElement("button");
  const btnBox = document.createElement("div");
  const productsList = document.createElement("ul");
  closeBtn.textContent = "Close";
  cleanBtn.textContent = "Clean up";
  toCompareBtn.textContent = "Compare";
  menuEl.style.backgroundColor = attributesData.parsedToolbarStyle
    .backgroundColor
    ? attributesData.parsedToolbarStyle.backgroundColor
    : "rgba(70, 69, 69, 0.767)";
  productsList.style.color = attributesData.parsedToolbarStyle.textColor
    ? attributesData.parsedToolbarStyle.textColor
    : "#ffffff";
  toolbarBtnStyle(
    closeBtn,
    {
      textColor: attributesData.parsedToolbarStyle.closeButtonTextColor,
      backColor: attributesData.parsedToolbarStyle.closeButtonBackColor,
    },
    "#000000"
  );
  toolbarBtnStyle(
    cleanBtn,
    {
      textColor: attributesData.parsedToolbarStyle.cleanUpButtonTextColor,
      backColor: attributesData.parsedToolbarStyle.cleanUpButtonBackColor,
    },
    "#fc893c"
  );
  toolbarBtnStyle(
    toCompareBtn,
    {
      textColor: attributesData.parsedToolbarStyle.viewCompareButtonTextColor,
      backColor: attributesData.parsedToolbarStyle.viewCompareButtonBackColor,
    },
    "#0067dd"
  );
  menuEl.classList.add("compare-menu");
  closeBtn.classList.add("close-btn");
  cleanBtn.classList.add("clean-btn");
  toCompareBtn.classList.add("to-compare-btn");
  btnBox.classList.add("btn-box");
  productsList.classList.add("products-compare-list");
  btnBox.append(toCompareBtn, cleanBtn, closeBtn);
  menuEl.append(productsList, btnBox);
  document.body.appendChild(menuEl);
};
