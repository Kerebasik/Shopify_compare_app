import {
  BooleanSetting
} from "/build/_shared/chunk-4NT7NZIW.js";
import {
  ColorSetting,
  deepEqualObject
} from "/build/_shared/chunk-AJEI3VWP.js";
import "/build/_shared/chunk-YKNNQKH4.js";
import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  BlockStack,
  Box,
  ContextualSaveBar,
  Divider,
  Frame,
  InlineStack,
  Page,
  Text,
  init_esm as init_esm2
} from "/build/_shared/chunk-OBV6KFN7.js";
import {
  init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-EANB4GN4.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-R5POWXF3.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.comparison.atc.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
init_esm();

// app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx
init_remix_hmr();

// app/components/PlusIcon.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PlusIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PlusIcon.tsx"
  );
  import.meta.hot.lastModified = "1702461995592.6245";
}
var PlusIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "plus" }, void 0, false, {
      fileName: "app/components/PlusIcon.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" }, void 0, false, {
      fileName: "app/components/PlusIcon.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PlusIcon.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/PlusIcon.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c = PlusIcon;
var _c;
$RefreshReg$(_c, "PlusIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/MinusIcon.tsx
init_remix_hmr();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\MinusIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\MinusIcon.tsx"
  );
  import.meta.hot.lastModified = "1702462053318.5334";
}
var MinusIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "minus" }, void 0, false, {
      fileName: "app/components/MinusIcon.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z" }, void 0, false, {
      fileName: "app/components/MinusIcon.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MinusIcon.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/MinusIcon.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c2 = MinusIcon;
var _c2;
$RefreshReg$(_c2, "MinusIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PreviewProductDetailPageButton\\\\PreviewProductDetailPageButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PreviewProductDetailPageButton\\PreviewProductDetailPageButton.tsx"
  );
  import.meta.hot.lastModified = "1702557494725.5605";
}
var PreviewProductDetailPageButton = ({
  showLabel,
  showIcon,
  addToCompareTextColor,
  backColor,
  borderColor,
  removeFromCompareTextColor
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: {
    display: "flex",
    gap: "10px",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: {
      width: "355px",
      display: "flex",
      color: `${addToCompareTextColor}`,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${backColor}`,
      padding: "1em 2em",
      border: "1px solid",
      borderColor: `${borderColor}`,
      gap: "10px",
      lineHeight: "1.15"
    }, children: [
      showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PlusIcon, {}, void 0, false, {
        fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
        lineNumber: 50,
        columnNumber: 34
      }, this),
      showLabel && "Add to compare"
    ] }, void 0, true, {
      fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: {
      width: "355px",
      display: "flex",
      color: `${removeFromCompareTextColor}`,
      justifyContent: "center",
      backgroundColor: `${backColor}`,
      alignItems: "center",
      padding: "1em 2em",
      border: "1px solid",
      borderColor: `${borderColor}`,
      gap: "10px",
      lineHeight: "1.15"
    }, children: [
      showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MinusIcon, {}, void 0, false, {
        fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
        lineNumber: 66,
        columnNumber: 34
      }, this),
      showLabel && "Remove from compare"
    ] }, void 0, true, {
      fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
    lineNumber: 32,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c3 = PreviewProductDetailPageButton;
var _c3;
$RefreshReg$(_c3, "PreviewProductDetailPageButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.comparison.atc.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.comparison.atc.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.comparison.atc.tsx"
  );
  import.meta.hot.lastModified = "1702635138417.1465";
}
function ProductDetailSettings() {
  _s();
  const submit = useSubmit();
  const {
    productButton
  } = useLoaderData();
  const [showCompareButton, setShowCompareButton] = (0, import_react.useState)((productButton == null ? void 0 : productButton.show) === "true");
  const [showIcon, setShowIcon] = (0, import_react.useState)((productButton == null ? void 0 : productButton.showIcon) === "true");
  const [showLabel, setShowLabel] = (0, import_react.useState)((productButton == null ? void 0 : productButton.showLabel) === "true");
  const [backColor, setBackColor] = (0, import_react.useState)(productButton == null ? void 0 : productButton.backColor);
  const [borderColor, setBorderColor] = (0, import_react.useState)(productButton == null ? void 0 : productButton.borderColor);
  const [addToCompareTextColor, setAddToCompareTextColor] = (0, import_react.useState)(productButton == null ? void 0 : productButton.addToCompareTextColor);
  const [removeFromCompareTextColor, setRemoveFromCompareTextColor] = (0, import_react.useState)(productButton == null ? void 0 : productButton.removeFromCompareTextColor);
  const [actualData, setActualData] = (0, import_react.useState)(true);
  const [loadedData, setLoadedData] = (0, import_react.useState)(false);
  const handleShowCompareButtonOnChange = () => {
    setShowCompareButton(!showCompareButton);
  };
  const handleShowIconOnChange = () => {
    setShowIcon(!showIcon);
  };
  const handleShowLabelOnChange = () => {
    setShowLabel(!showLabel);
  };
  const handleBackColorOnChange = (color) => {
    setBackColor(color);
  };
  const handleAddToCompareTextColorOnChange = (color) => {
    setAddToCompareTextColor(color);
  };
  const handleBorderColorOnChange = (color) => {
    setBorderColor(color);
  };
  const handleRemoveFromCompareTextColorOnChange = (color) => {
    setRemoveFromCompareTextColor(color);
  };
  const handleSaveOnClick = () => {
    const data = JSON.stringify({
      productButton: {
        show: showCompareButton,
        showIcon,
        showLabel,
        backColor,
        borderColor,
        addToCompareTextColor,
        removeFromCompareTextColor
      }
    });
    submit({
      data
    }, {
      method: "POST"
    });
    setLoadedData(true);
    return;
  };
  const currentDataInClientObject = (0, import_react.useMemo)(() => {
    return {
      show: String(showCompareButton),
      showIcon: String(showIcon),
      showLabel: String(showLabel),
      backColor,
      borderColor,
      addToCompareTextColor,
      removeFromCompareTextColor
    };
  }, [showCompareButton, showIcon, showLabel, backColor, borderColor, addToCompareTextColor, removeFromCompareTextColor]);
  (0, import_react.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, productButton));
    setLoadedData(false);
  }, [productButton, currentDataInClientObject]);
  const handleDiscardActionOnClick = () => {
    setShowCompareButton((productButton == null ? void 0 : productButton.show) === "true");
    setShowIcon((productButton == null ? void 0 : productButton.showIcon) === "true");
    setShowLabel((productButton == null ? void 0 : productButton.showLabel) === "true");
    setBackColor(productButton == null ? void 0 : productButton.backColor);
    setBorderColor(productButton == null ? void 0 : productButton.borderColor);
    setAddToCompareTextColor(productButton == null ? void 0 : productButton.addToCompareTextColor);
    setRemoveFromCompareTextColor(productButton == null ? void 0 : productButton.removeFromCompareTextColor);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InlineStack, { gap: "200", wrap: false, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { background: "bg-fill", width: "400px", borderColor: "border", minHeight: "100vh", borderWidth: "050", minWidth: "400px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Page, { fullWidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BlockStack, { gap: "300", children: [
      !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ContextualSaveBar, { alignContentFlush: true, message: "Unsaved changes", saveAction: {
        onAction: handleSaveOnClick,
        loading: loadedData
      }, discardAction: {
        onAction: handleDiscardActionOnClick
      } }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 211,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 210,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { as: "h4", variant: "headingMd", children: "Product Detail Page" }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 219,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 221,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BooleanSetting, { title: "Show Add To Compare button", value: showCompareButton, valueOnChange: handleShowCompareButtonOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 223,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BooleanSetting, { title: "Show Icon", value: showIcon, valueOnChange: handleShowIconOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 225,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BooleanSetting, { title: "Show Label", value: showLabel, valueOnChange: handleShowLabelOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 227,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 229,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { as: "p", variant: "headingSm", children: "Style" }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 231,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: backColor, onChange: handleBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 233,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ColorSetting, { title: "Border Color", initialColor: borderColor, onChange: handleBorderColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 235,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ColorSetting, { title: "Add To Compare Text Color", initialColor: addToCompareTextColor, onChange: handleAddToCompareTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 237,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ColorSetting, { title: "Remove From Compare Text Color", initialColor: removeFromCompareTextColor, onChange: handleRemoveFromCompareTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 239,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 209,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 208,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 207,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PreviewProductDetailPageButton, { showLabel, showIcon, backColor, borderColor, addToCompareTextColor, removeFromCompareTextColor }, void 0, false, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 252,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 244,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 243,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.comparison.atc.tsx",
    lineNumber: 206,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.comparison.atc.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_s(ProductDetailSettings, "4pUOFcoN8EBPQtPnzJCzo9qcpWk=", false, function() {
  return [useSubmit, useLoaderData];
});
_c4 = ProductDetailSettings;
var _c4;
$RefreshReg$(_c4, "ProductDetailSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductDetailSettings as default
};
//# sourceMappingURL=/build/routes/app.comparison.atc-PROCQK4Y.js.map
