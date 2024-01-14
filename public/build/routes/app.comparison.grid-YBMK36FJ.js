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
  ExceptionList,
  Frame,
  InlineStack,
  Page,
  SvgNoteMinor,
  Text,
  init_dist,
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

// app/routes/app.comparison.grid.tsx
init_remix_hmr();
init_esm2();
init_dist();
var import_react = __toESM(require_react());
var import_shopify = __toESM(require_shopify());
var import_node = __toESM(require_node());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.comparison.grid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.comparison.grid.tsx"
  );
  import.meta.hot.lastModified = "1702560598380.9492";
}
function ProductGridPage() {
  _s();
  const submit = useSubmit();
  const {
    productsGridButton
  } = useLoaderData();
  const [showCompareButton, setShowCompareButton] = (0, import_react.useState)(productsGridButton.showCompareButton === "true");
  const [showIcon, setShowIcon] = (0, import_react.useState)(productsGridButton.showIcon === "true");
  const [showLabel, setShowLabel] = (0, import_react.useState)(productsGridButton.showLabel === "true");
  const [backgroundColor, setBackgroundColor] = (0, import_react.useState)(productsGridButton.backgroundColor);
  const [borderColor, setBorderColor] = (0, import_react.useState)(productsGridButton.borderColor);
  const [addCompareButtonTextColor, setAddCompareButtonTextColor] = (0, import_react.useState)(productsGridButton.addCompareButtonTextColor);
  const [removeCompareButtonTextColor, setRemoveCompareButtonTextColor] = (0, import_react.useState)(productsGridButton.removeCompareButtonTextColor);
  const [actualData, setActualData] = (0, import_react.useState)(true);
  const [loadedData, setLoadedData] = (0, import_react.useState)(false);
  const handleShowCompareButtonOnChange = () => {
    setShowCompareButton(!showCompareButton);
  };
  const handleShowLabelOnChange = () => {
    setShowLabel(!showLabel);
  };
  const handleShowIconOnChange = () => {
    setShowIcon(!showIcon);
  };
  const handleBackgroundColorOnChange = (color) => {
    setBackgroundColor(color);
  };
  const handleBorderColorOnChange = (color) => {
    setBorderColor(color);
  };
  const handleAddCompareButtonTextColorOnChange = (color) => {
    setAddCompareButtonTextColor(color);
  };
  const handleRemoveCompareButtonTextColorOnChange = (color) => {
    setRemoveCompareButtonTextColor(color);
  };
  const currentDataInClientObject = (0, import_react.useMemo)(() => {
    return {
      showCompareButton: String(showCompareButton),
      showIcon: String(showIcon),
      showLabel: String(showLabel),
      backgroundColor,
      borderColor,
      addCompareButtonTextColor,
      removeCompareButtonTextColor
    };
  }, [showCompareButton, showIcon, showLabel, backgroundColor, borderColor, addCompareButtonTextColor, removeCompareButtonTextColor]);
  const handleSaveOnClick = () => {
    const data = JSON.stringify({
      productsGridButton: {
        showCompareButton,
        showIcon: showCompareButton,
        showLabel: showCompareButton,
        backgroundColor: showCompareButton,
        borderColor: showCompareButton,
        addCompareButtonTextColor: showCompareButton,
        removeCompareButtonTextColor: showCompareButton
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
  const handleDiscardActionOnClick = () => {
    setShowCompareButton(productsGridButton.showCompareButton === "true");
    setShowIcon(productsGridButton.showIcon === "true");
    setShowLabel(productsGridButton.showLabel === "true");
    setBackgroundColor(productsGridButton.backgroundColor);
    setBorderColor(productsGridButton.borderColor);
    setAddCompareButtonTextColor(productsGridButton.addCompareButtonTextColor);
    setRemoveCompareButtonTextColor(productsGridButton.removeCompareButtonTextColor);
  };
  (0, import_react.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, productsGridButton));
    setLoadedData(false);
  }, [productsGridButton, currentDataInClientObject]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { gap: "200", wrap: false, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { background: "bg-fill", width: "400px", borderColor: "border", minHeight: "100vh", borderWidth: "050", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "300", children: [
      !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContextualSaveBar, { alignContentFlush: true, message: "Unsaved changes", saveAction: {
        onAction: handleSaveOnClick,
        loading: loadedData
      }, discardAction: {
        onAction: handleDiscardActionOnClick
      } }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 211,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 210,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h4", variant: "headingMd", children: "Product Grid Page" }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 219,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 221,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExceptionList, { items: [{
        icon: SvgNoteMinor,
        description: "If our app does not work with your theme after turn on widget. Please chat with us to be integrated with your theme quickly."
      }] }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 223,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanSetting, { title: "Show Add To Compare button", valueOnChange: handleShowCompareButtonOnChange, value: showCompareButton }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 228,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanSetting, { title: "Show Icon", value: showIcon, valueOnChange: handleShowIconOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 230,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BooleanSetting, { title: "Show Label", value: showLabel, valueOnChange: handleShowLabelOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 232,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 234,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h4", variant: "headingSm", children: "Style" }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 236,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: backgroundColor, onChange: handleBackgroundColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 238,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorSetting, { title: "Border Color", initialColor: borderColor, onChange: handleBorderColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 240,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorSetting, { title: "Add To Compare Text Color", initialColor: addCompareButtonTextColor, onChange: handleAddCompareButtonTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 242,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorSetting, { title: "Remove From Compare Text Color", initialColor: removeCompareButtonTextColor, onChange: handleRemoveCompareButtonTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 244,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.comparison.grid.tsx",
      lineNumber: 209,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.grid.tsx",
      lineNumber: 208,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.grid.tsx",
      lineNumber: 207,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: "Iframe Our Button" }, void 0, false, {
      fileName: "app/routes/app.comparison.grid.tsx",
      lineNumber: 248,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.comparison.grid.tsx",
    lineNumber: 206,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.comparison.grid.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_s(ProductGridPage, "KRt83pHqrpwAefHztJrcCPiOpC0=", false, function() {
  return [useSubmit, useLoaderData];
});
_c = ProductGridPage;
var _c;
$RefreshReg$(_c, "ProductGridPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductGridPage as default
};
//# sourceMappingURL=/build/routes/app.comparison.grid-YBMK36FJ.js.map
