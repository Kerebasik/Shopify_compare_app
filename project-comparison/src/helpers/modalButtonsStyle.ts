import { toolbarBtnStyle } from "./toolbarBtnsStyle";

export const modalButtonsStyle = (style: any) => {
  const addToCardBtnEls = document.querySelectorAll(
    ".add-to-cart-modal-btn"
  ) as NodeListOf<HTMLButtonElement>;
  const closeModalBtn = document.querySelector(
    ".close-modal-btn"
  ) as HTMLButtonElement;
  addToCardBtnEls.forEach((btn) => {
    toolbarBtnStyle(
      btn,
      {
        textColor: style.attributesTextColor,
        backColor: style.attributesBackColor,
      },
      "#0067dd",
      2
    );
  });
  toolbarBtnStyle(
    closeModalBtn,
    {
      textColor: style.topbarTextColor,
      backColor: style.topbarBackColor,
    },
    "#707070e3",
    2
  );
};
