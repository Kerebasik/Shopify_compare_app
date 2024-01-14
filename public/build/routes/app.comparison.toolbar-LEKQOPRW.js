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

// app/routes/app.comparison.toolbar.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
var import_shopify = __toESM(require_shopify());
var import_node = __toESM(require_node());
init_esm();

// app/components/PreviewToolbar/PreviewToolbar.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PreviewToolbar\\\\PreviewToolbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PreviewToolbar\\PreviewToolbar.tsx"
  );
  import.meta.hot.lastModified = "1702556479377.5437";
}
var PreviewToolbar = ({
  backgroundColor,
  closeButtonBackColor,
  closeButtonTextColor,
  cleanUpButtonBackColor,
  cleanUpButtonTextColor,
  textColor,
  viewCompareButtonTextColor,
  viewCompareButtonBackColor
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    backgroundColor: `${backgroundColor}`,
    width: "950px",
    height: "250px",
    position: "fixed",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    padding: "20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      flex: "0 0 75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "end"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      maxWidth: "200px",
      maxHeight: "200px",
      minHeight: "150px",
      minWidth: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "10px"
      }, children: "Product img" }, void 0, false, {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 61,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontWeight: 600,
        color: `${textColor}`
      }, children: "Product name" }, void 0, false, {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "200px",
      maxHeight: "200px",
      minWidth: "200px",
      padding: "10px",
      flex: "0 0 25%",
      gap: "10px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        width: "100%",
        color: `${viewCompareButtonTextColor}`,
        border: "2px solid",
        borderColor: `${viewCompareButtonBackColor}`,
        backgroundColor: "#fbeee0",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "30px",
        height: "53px",
        boxShadow: `${viewCompareButtonBackColor} 4px 4px 0px 0px`
      }, children: "Compare" }, void 0, false, {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 90,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        width: "47%",
        color: `${cleanUpButtonTextColor}`,
        padding: "10px",
        border: "2px solid",
        borderColor: `${cleanUpButtonBackColor}`,
        backgroundColor: "#fbeee0",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "30px",
        height: "53px",
        boxShadow: `${cleanUpButtonBackColor} 4px 4px 0px 0px`
      }, children: "Clean up" }, void 0, false, {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 106,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        width: "47%",
        color: `${closeButtonTextColor}`,
        padding: "10px",
        border: "2px solid",
        borderColor: `${closeButtonBackColor}`,
        backgroundColor: "#fbeee0",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "30px",
        height: "53px",
        boxShadow: `${closeButtonBackColor} 4px 4px 0px 0px`
      }, children: "Close" }, void 0, false, {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 123,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = PreviewToolbar;
var _c;
$RefreshReg$(_c, "PreviewToolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.comparison.toolbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.comparison.toolbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.comparison.toolbar.tsx"
  );
  import.meta.hot.lastModified = "1702560995337.158";
}
function ToolbarSettings() {
  _s();
  const {
    toolbar
  } = useLoaderData();
  const submit = useSubmit();
  const [showToolbar, setShowToolbar] = (0, import_react.useState)(toolbar.showToolbar === "true");
  const [showToolbarAfterClickOnProductPage, setShowToolbarAfterClickOnProductPage] = (0, import_react.useState)(toolbar.showToolbarAfterClickOnProductPage === "true");
  const [backgroundColor, setBackgroundColor] = (0, import_react.useState)(toolbar.backgroundColor);
  const [textColor, setTextColor] = (0, import_react.useState)(toolbar.textColor);
  const [viewCompareButtonBackColor, setViewCompareButtonBackColor] = (0, import_react.useState)(toolbar.viewCompareButtonBackColor);
  const [viewCompareButtonTextColor, setViewCompareButtonTextColor] = (0, import_react.useState)(toolbar.viewCompareButtonTextColor);
  const [closeButtonBackColor, setCloseButtonBackColor] = (0, import_react.useState)(toolbar.closeButtonBackColor);
  const [closeButtonTextColor, setCloseButtonTextColor] = (0, import_react.useState)(toolbar.closeButtonTextColor);
  const [cleanUpButtonBackColor, setCleanUpButtonBackColor] = (0, import_react.useState)(toolbar.cleanUpButtonBackColor);
  const [cleanUpButtonTextColor, setCleanUpButtonTextColor] = (0, import_react.useState)(toolbar.cleanUpButtonTextColor);
  const [actualData, setActualData] = (0, import_react.useState)(true);
  const [loadedData, setLoadedData] = (0, import_react.useState)(false);
  const handleShowToolbarOnChange = () => {
    setShowToolbar(!showToolbar);
  };
  const handleShowToolbarAfterOnChange = () => {
    setShowToolbarAfterClickOnProductPage(!showToolbarAfterClickOnProductPage);
  };
  const handleBackgroundColorOnChange = (color) => {
    setBackgroundColor(color);
  };
  const handleViewCompareButtonBackColorOnChange = (color) => {
    setViewCompareButtonBackColor(color);
  };
  const handleTextColorOnChange = (color) => {
    setTextColor(color);
  };
  const handleViewCompareButtonTextColorOnChange = (color) => {
    setViewCompareButtonTextColor(color);
  };
  const handleCloseButtonBackColorOnChange = (color) => {
    setCloseButtonBackColor(color);
  };
  const handleCloseButtonTextColorOnChange = (color) => {
    setCloseButtonTextColor(color);
  };
  const handleCleanUpButtonBackColorOnChange = (color) => {
    setCleanUpButtonBackColor(color);
  };
  const handleCleanUpButtonTextColorOnChange = (color) => {
    setCleanUpButtonTextColor(color);
  };
  const handleSaveOnClick = () => {
    const data = JSON.stringify({
      toolbar: {
        showToolbar,
        showToolbarAfterClickOnProductPage,
        backgroundColor,
        textColor,
        viewCompareButtonBackColor,
        viewCompareButtonTextColor,
        closeButtonBackColor,
        closeButtonTextColor,
        cleanUpButtonBackColor,
        cleanUpButtonTextColor
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
    setShowToolbar(toolbar.showToolbar === "true");
    setShowToolbarAfterClickOnProductPage(toolbar.showToolbarAfterClickOnProductPage === "true");
    setBackgroundColor(toolbar.backgroundColor);
    setTextColor(toolbar.textColor);
    setViewCompareButtonBackColor(toolbar.viewCompareButtonBackColor);
    setViewCompareButtonTextColor(toolbar.viewCompareButtonTextColor);
    setCloseButtonBackColor(toolbar.closeButtonBackColor);
    setCloseButtonTextColor(toolbar.closeButtonTextColor);
    setCleanUpButtonBackColor(toolbar.cleanUpButtonBackColor);
    setCleanUpButtonTextColor(toolbar.cleanUpButtonTextColor);
  };
  const currentDataInClientObject = (0, import_react.useMemo)(() => {
    return {
      showToolbar: String(showToolbar),
      showToolbarAfterClickOnProductPage: String(showToolbarAfterClickOnProductPage),
      backgroundColor,
      textColor,
      viewCompareButtonBackColor,
      viewCompareButtonTextColor,
      closeButtonBackColor,
      closeButtonTextColor,
      cleanUpButtonBackColor,
      cleanUpButtonTextColor
    };
  }, [showToolbar, showToolbarAfterClickOnProductPage, backgroundColor, textColor, viewCompareButtonBackColor, viewCompareButtonTextColor, closeButtonBackColor, closeButtonTextColor, cleanUpButtonBackColor, cleanUpButtonTextColor]);
  (0, import_react.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, toolbar));
    setLoadedData(false);
  }, [toolbar, currentDataInClientObject]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineStack, { gap: "200", wrap: false, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill", width: "400px", borderColor: "border", borderWidth: "050", minHeight: "150vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockStack, { gap: "300", children: [
      !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContextualSaveBar, { alignContentFlush: true, message: "Unsaved changes", saveAction: {
        onAction: handleSaveOnClick,
        loading: loadedData
      }, discardAction: {
        onAction: handleDiscardActionOnClick
      } }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 250,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 249,
        columnNumber: 49
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "Comparison Toolbar" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 258,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 259,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingSm", children: "Toolbar" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 260,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanSetting, { value: showToolbar, valueOnChange: handleShowToolbarOnChange, title: "Show toolbar after click fixed button" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 261,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanSetting, { title: "Show toolbar after product added to compare", valueOnChange: handleShowToolbarAfterOnChange, value: showToolbarAfterClickOnProductPage }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 262,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: backgroundColor, onChange: handleBackgroundColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 264,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", initialColor: textColor, onChange: handleTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 266,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 268,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingSm", children: "View Compare Button" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 270,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: viewCompareButtonBackColor, onChange: handleViewCompareButtonBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 271,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", initialColor: viewCompareButtonTextColor, onChange: handleViewCompareButtonTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 272,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 273,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingSm", children: "Close Button" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 274,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: closeButtonBackColor, onChange: handleCloseButtonBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 275,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", initialColor: closeButtonTextColor, onChange: handleCloseButtonTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 276,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 277,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingSm", children: "Clean up Button" }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 278,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: cleanUpButtonBackColor, onChange: handleCleanUpButtonBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 279,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", initialColor: cleanUpButtonTextColor, onChange: handleCleanUpButtonTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 280,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 248,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 247,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 246,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PreviewToolbar, { backgroundColor, textColor, viewCompareButtonTextColor, viewCompareButtonBackColor, cleanUpButtonTextColor, cleanUpButtonBackColor, closeButtonTextColor, closeButtonBackColor }, void 0, false, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 293,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 285,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 284,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.comparison.toolbar.tsx",
    lineNumber: 245,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.comparison.toolbar.tsx",
    lineNumber: 244,
    columnNumber: 10
  }, this);
}
_s(ToolbarSettings, "LK1FNUOaVn3jgKHOBSMSToCzwMU=", false, function() {
  return [useLoaderData, useSubmit];
});
_c2 = ToolbarSettings;
var _c2;
$RefreshReg$(_c2, "ToolbarSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ToolbarSettings as default
};
//# sourceMappingURL=/build/routes/app.comparison.toolbar-LEKQOPRW.js.map
