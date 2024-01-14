import { attributesData } from "../../helpers/attributesParsedData";
import { plusMarkUp } from "./iconsMarkUp";

export const addCompareBtnMarkUp = (id: number) => {
  const btnEl = document.createElement("button");
  btnEl.type = "button";
  btnEl.id = id ? id.toString() : "";
  btnEl.textContent = attributesData.parsedProdBtnStyle.showLabel
    ? " Add to compare"
    : "";
  btnEl.classList.add("add-to-compare-btn");
  btnEl.style.fill = "currentColor";
  btnEl.style.backgroundColor = attributesData.parsedProdBtnStyle.backColor
    ? attributesData.parsedProdBtnStyle.backColor
    : "inherit";
  btnEl.style.borderColor = attributesData.parsedProdBtnStyle.borderColor
    ? attributesData.parsedProdBtnStyle.borderColor
    : "#000000";
  if (attributesData.parsedProdBtnStyle.showIcon) {
    btnEl.insertAdjacentHTML("afterbegin", plusMarkUp);
  }
  return btnEl;
};
