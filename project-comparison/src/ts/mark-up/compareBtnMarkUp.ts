import { attributesData } from "../../helpers/attributesParsedData";
import { toolbarBtnStyle } from "../../helpers/toolbarBtnsStyle";

export const compareBtnMarkUp = (products: any) => {
  const element = document.createElement("button") as HTMLButtonElement;
  const textEl = document.createElement("span");
  element.style.display = products ? "block" : "none";
  toolbarBtnStyle(
    element,
    {
      textColor: attributesData.fixedBtnStyle.textColor,
      backColor: attributesData.fixedBtnStyle.backColor,
    },
    "#000000"
  );
  textEl.style.backgroundColor = attributesData.fixedBtnStyle.backColor
    ? attributesData.fixedBtnStyle.backColor
    : "#000000";
  element.textContent = "Compare";
  element.style.color = attributesData.fixedBtnStyle.showLabel
    ? attributesData.fixedBtnStyle.textColor
    : "transparent";
  textEl.textContent = `${products ? products.length : 0}`;
  textEl.classList.add("compare-btn-prod-int-text");
  element.classList.add("compare-btn");
  element.appendChild(textEl);
  document.body.appendChild(element);
};
