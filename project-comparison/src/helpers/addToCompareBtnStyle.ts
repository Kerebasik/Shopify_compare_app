import { minusMarkUp, plusMarkUp } from "../ts/mark-up/iconsMarkUp";
import { attributesData } from "./attributesParsedData";

export const addToCompareBtnTextSTyle = (isToggle: boolean) => {
  const btnEl = document.querySelector(
    ".add-to-compare-btn"
  ) as HTMLButtonElement;
  btnEl.style.display = attributesData.parsedProdBtnStyle.show
    ? "flex"
    : "none";
  if (isToggle) {
    btnEl.innerHTML = "";
    btnEl.textContent = attributesData.parsedProdBtnStyle.showLabel
      ? `Remove from compare`
      : "";
    if (attributesData.parsedProdBtnStyle.showIcon) {
      btnEl.insertAdjacentHTML("afterbegin", minusMarkUp);
    }

    btnEl.style.color = attributesData.parsedProdBtnStyle
      .removeFromCompareTextColor
      ? attributesData.parsedProdBtnStyle.removeFromCompareTextColor
      : "red";
  } else {
    btnEl.innerHTML = "";
    btnEl.textContent = attributesData.parsedProdBtnStyle.showLabel
      ? `Add to compare`
      : "";
    if (attributesData.parsedProdBtnStyle.showIcon) {
      btnEl.insertAdjacentHTML("afterbegin", plusMarkUp);
    }

    btnEl.style.color = attributesData.parsedProdBtnStyle.addToCompareTextColor
      ? attributesData.parsedProdBtnStyle.addToCompareTextColor
      : "red";
  }
};
