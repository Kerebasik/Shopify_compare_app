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

// app/routes/app.comparison.fixed-btn.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
init_esm();

// app/components/PreviewFixedCompareButton/FixedCompareButton.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PreviewFixedCompareButton\\\\FixedCompareButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PreviewFixedCompareButton\\FixedCompareButton.tsx"
  );
  import.meta.hot.lastModified = "1702557999928.74";
}
var PreviewFixedCompareButton = ({
  showLabel,
  textColor,
  backColor
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "flex",
    backgroundColor: "#ffffff",
    color: `${textColor}`,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "18px",
    width: "130px",
    height: "55px",
    border: `2px solid ${backColor}`,
    boxShadow: `${backColor} 4px 4px 0 0`,
    borderRadius: "10px"
  }, children: showLabel && "Compare" }, void 0, false, {
    fileName: "app/components/PreviewFixedCompareButton/FixedCompareButton.tsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/PreviewFixedCompareButton/FixedCompareButton.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = PreviewFixedCompareButton;
var _c;
$RefreshReg$(_c, "PreviewFixedCompareButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.comparison.fixed-btn.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.comparison.fixed-btn.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.comparison.fixed-btn.tsx"
  );
  import.meta.hot.lastModified = "1702635138448.1487";
}
function StickyFixedButtonSettings() {
  _s();
  const {
    fixedButton
  } = useLoaderData();
  const submit = useSubmit();
  const [showStickyButton, setShowStickyButton] = (0, import_react.useState)(fixedButton.show === "true");
  const [showLabel, setShowLabel] = (0, import_react.useState)(fixedButton.showLabel === "true");
  const [backColor, setBackColor] = (0, import_react.useState)(fixedButton.backColor);
  const [textColor, setTextColor] = (0, import_react.useState)(fixedButton.textColor);
  const [actualData, setActualData] = (0, import_react.useState)(true);
  const [loadedData, setLoadedData] = (0, import_react.useState)(false);
  const handleShowStickyButtonOnChange = () => {
    setShowStickyButton(!showStickyButton);
  };
  const handleShowLabelOnChange = () => {
    setShowLabel(!showLabel);
  };
  const handleBackColorOnChange = (color) => {
    setBackColor(color);
  };
  const handleTextColorOnChange = (color) => {
    setTextColor(color);
  };
  const handleDiscardActionOnClick = () => {
    setShowStickyButton(fixedButton.show === "true");
    setShowLabel(fixedButton.showLabel === "true");
    setBackColor(fixedButton.backColor);
    setTextColor(fixedButton.textColor);
  };
  const currentDataInClientObject = (0, import_react.useMemo)(() => {
    return {
      show: String(showStickyButton),
      showLabel: String(showLabel),
      backColor,
      textColor
    };
  }, [showStickyButton, showLabel, backColor, textColor]);
  (0, import_react.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, fixedButton));
    setLoadedData(false);
  }, [fixedButton, currentDataInClientObject]);
  const handleSaveOnClick = () => {
    const data = JSON.stringify({
      fixedButton: {
        show: showStickyButton,
        showLabel,
        backColor,
        textColor
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineStack, { gap: "200", wrap: false, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill", width: "400px", borderColor: "border", minHeight: "100vh", borderWidth: "050", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockStack, { gap: "300", children: [
      !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContextualSaveBar, { alignContentFlush: true, message: "Unsaved changes", saveAction: {
        onAction: handleSaveOnClick,
        loading: loadedData
      }, discardAction: {
        onAction: handleDiscardActionOnClick
      } }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 173,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 172,
        columnNumber: 49
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "h4", variant: "headingMd", children: "Sticky Fixed Button" }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 181,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 183,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanSetting, { title: "Show sticky fixed button", value: showStickyButton, valueOnChange: handleShowStickyButtonOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 185,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 187,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "h4", variant: "headingSm", children: "Sticky Fixed Button" }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 189,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BooleanSetting, { title: "Show Label", value: showLabel, valueOnChange: handleShowLabelOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 191,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 193,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "h4", variant: "headingSm", children: "Style" }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 195,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: backColor, onChange: handleBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 197,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", initialColor: textColor, onChange: handleTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 199,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 171,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 170,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 169,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PreviewFixedCompareButton, { showLabel, backColor, textColor }, void 0, false, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 212,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 204,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 203,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.comparison.fixed-btn.tsx",
    lineNumber: 168,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/app.comparison.fixed-btn.tsx",
    lineNumber: 167,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.comparison.fixed-btn.tsx",
    lineNumber: 166,
    columnNumber: 10
  }, this);
}
_s(StickyFixedButtonSettings, "/MfDORLoyPUmEcL7Zl2CWGFKkpw=", false, function() {
  return [useLoaderData, useSubmit];
});
_c2 = StickyFixedButtonSettings;
var _c2;
$RefreshReg$(_c2, "StickyFixedButtonSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StickyFixedButtonSettings as default
};
//# sourceMappingURL=/build/routes/app.comparison.fixed-btn-NML4OIUC.js.map
