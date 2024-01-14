export const toolbarBtnStyle = (
  el: HTMLButtonElement,
  style: any,
  defaultColor: string,
  shadowSize = 4
) => {
  el.style.color = style.textColor ? style.textColor : defaultColor;
  el.style.borderColor = style.backColor ? style.backColor : defaultColor;
  el.style.boxShadow = style.backColor
    ? `${style.backColor} ${shadowSize}px ${shadowSize}px 0 0`
    : `${defaultColor} ${shadowSize}px ${shadowSize}px 0 0`;

  el.addEventListener("mousedown", function () {
    el.style.boxShadow = style.backColor
      ? `${style.backColor} ${shadowSize / 2}px ${shadowSize / 2}px 0 0`
      : `${defaultColor} ${shadowSize / 2}px ${shadowSize / 2}px 0 0`;
    el.style.transform = `translate(${shadowSize / 2}px, ${shadowSize / 2}px)`;
  });

  el.addEventListener("mouseup", function () {
    el.style.boxShadow = style.backColor
      ? `${style.backColor} ${shadowSize}px ${shadowSize}px 0 0`
      : `${defaultColor} ${shadowSize}px ${shadowSize}px 0 0`;
    el.style.transform = "translate(0px, 0px)";
  });
};
