const dataTableStyleEl = document.getElementById(
  "myTableStyle"
) as HTMLDivElement;
const tableStyleAttributeData =
  dataTableStyleEl.getAttribute("data-table-style");
const parsedTableStyle = JSON.parse(tableStyleAttributeData as string);

const dataProdEl = document.getElementById("myProductData") as HTMLDivElement;
const myProductData = dataProdEl.getAttribute("data-my-var");
const defProdMeta = JSON.parse(myProductData as string);

const dataFixedBtnStyle = document.getElementById("myFixedBtnStyle");
const fixedBtnStyleAttribute =
  dataFixedBtnStyle?.getAttribute("data-fixed-btn");
const fixedBtnStyle = JSON.parse(fixedBtnStyleAttribute as string);

const dataToolbarStyleEl = document.getElementById("myToolbarStyle");
const toolbarAttributeData =
  dataToolbarStyleEl?.getAttribute("data-toolbar-style");
const parsedToolbarStyle = JSON.parse(toolbarAttributeData as string);

const dataProdBtnStyle = document.getElementById("myProductButtonStyle");
const prodBtnStyleAttributeData = dataProdBtnStyle?.getAttribute(
  "data-prod-btn-style"
);
const parsedProdBtnStyle = JSON.parse(prodBtnStyleAttributeData as string);

export const attributesData = {
  parsedTableStyle,
  defProdMeta,
  fixedBtnStyle,
  parsedToolbarStyle,
  parsedProdBtnStyle,
};
