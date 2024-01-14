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

// app/routes/app.comparison.table.tsx
init_remix_hmr();
init_esm2();
var import_react = __toESM(require_react());
var import_shopify = __toESM(require_shopify());
var import_node = __toESM(require_node());
init_esm();

// app/components/PreviewTable/PreviewTable.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PreviewTable\\\\PreviewTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PreviewTable\\PreviewTable.tsx"
  );
  import.meta.hot.lastModified = "1702585139178.5703";
}
var PreviewTable = ({
  backColor,
  textColor,
  attributesGroupBackColor,
  topbarBackColor,
  topbarTextColor,
  attributesGroupTextColor,
  attributesBackColor,
  attributesTextColor
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    width: "515px",
    height: "430px",
    borderRadius: "22px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.38)",
    padding: "20px",
    position: "relative"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
      position: "absolute",
      right: "7px",
      top: "5px",
      width: "20px",
      height: "20px",
      fontWeight: 700,
      display: "flex",
      justifyContent: "center",
      color: `${topbarTextColor}`,
      alignItems: "center",
      borderRadius: "50%",
      borderColor: `${topbarBackColor}`,
      boxShadow: `${topbarBackColor} 2px 2px 0px 0px`
    }, children: "X" }, void 0, false, {
      fileName: "app/components/PreviewTable/PreviewTable.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: "rgba(204, 204, 204, 1)"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: {
      height: "100%",
      width: "100%",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      borderCollapse: "collapse"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { style: {
        height: "200px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
          backgroundColor: `${attributesGroupBackColor}`,
          borderRadius: "10px 0 0 0",
          borderRight: "1px solid",
          borderBottom: "1px solid",
          color: `${attributesGroupTextColor}`,
          borderColor: "rgba(204, 204, 204, 1)"
        }, children: "Products" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
          borderBottom: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)",
          borderRadius: "0 10px 0 0",
          backgroundColor: `${backColor}`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            width: "50px",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }, children: "Product Icon" }, void 0, false, {
            fileName: "app/components/PreviewTable/PreviewTable.tsx",
            lineNumber: 102,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            backgroundColor: "#ffffff",
            color: `${attributesTextColor}`,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "14px",
            width: "97px",
            height: "33px",
            border: `2px solid ${attributesBackColor}`,
            boxShadow: `${attributesBackColor} 4px 4px 0 0`,
            borderRadius: "10px"
          }, children: "Add to cart" }, void 0, false, {
            fileName: "app/components/PreviewTable/PreviewTable.tsx",
            lineNumber: 111,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Learn more" }, void 0, false, {
            fileName: "app/components/PreviewTable/PreviewTable.tsx",
            lineNumber: 127,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PreviewTable/PreviewTable.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)",
          color: `${attributesGroupTextColor}`,
          backgroundColor: `${attributesGroupBackColor}`
        }, children: "Variant Title" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
          borderBottom: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)",
          backgroundColor: `${backColor}`,
          color: `${textColor}`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          textAlign: "center"
        }, children: "Default Title" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 147,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PreviewTable/PreviewTable.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
          backgroundColor: `${attributesGroupBackColor}`,
          color: `${attributesGroupTextColor}`,
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderTop: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)"
        }, children: "Price" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 153,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
          borderBottom: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)",
          backgroundColor: `${backColor}`,
          color: `${textColor}`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          textAlign: "center"
        }, children: "\u20B4,600.00 UAH" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 169,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PreviewTable/PreviewTable.tsx",
        lineNumber: 152,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
          backgroundColor: `${attributesGroupBackColor}`,
          color: `${attributesGroupTextColor}`,
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)"
        }, children: "Vendor" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 175,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
          borderBottom: "1px solid",
          borderColor: "rgba(204, 204, 204, 1)",
          backgroundColor: `${backColor}`,
          color: `${textColor}`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          textAlign: "center"
        }, children: "Hydrogen Vendor" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 190,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PreviewTable/PreviewTable.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: {
          backgroundColor: `${attributesGroupBackColor}`,
          color: `${attributesGroupTextColor}`,
          borderRight: "1px solid",
          borderRadius: "0 0 0 10px",
          borderColor: "rgba(204, 204, 204, 1)"
        }, children: "Available" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 196,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
          backgroundColor: `${backColor}`,
          color: `${textColor}`,
          borderRadius: "0 0 10px 0"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          textAlign: "center"
        }, children: "true" }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 210,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 205,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PreviewTable/PreviewTable.tsx",
        lineNumber: 195,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PreviewTable/PreviewTable.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/PreviewTable/PreviewTable.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/PreviewTable/PreviewTable.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PreviewTable/PreviewTable.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/PreviewTable/PreviewTable.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = PreviewTable;
var _c;
$RefreshReg$(_c, "PreviewTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.comparison.table.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.comparison.table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.comparison.table.tsx"
  );
  import.meta.hot.lastModified = "1702560747911.5977";
}
function ComparisonTableSettings() {
  _s();
  const {
    table
  } = useLoaderData();
  const submit = useSubmit();
  const [backColor, setBackColor] = (0, import_react.useState)(table.backColor);
  const [textColor, setTextColor] = (0, import_react.useState)(table.textColor);
  const [attributesBackColor, setAttributesBackColor] = (0, import_react.useState)(table.attributesBackColor);
  const [attributesTextColor, setAttributesTextColor] = (0, import_react.useState)(table.attributesTextColor);
  const [attributesGroupTextColor, setAttributesGroupTextColor] = (0, import_react.useState)(table.attributesGroupTextColor);
  const [attributesGroupBackColor, setAttributesGroupBackColor] = (0, import_react.useState)(table.attributesGroupBackColor);
  const [topbarBackColor, setTopbarBackColor] = (0, import_react.useState)(table.topbarBackColor);
  const [topbarTextColor, setTopbarTextColor] = (0, import_react.useState)(table.topbarTextColor);
  const [actualData, setActualData] = (0, import_react.useState)(true);
  const [loadedData, setLoadedData] = (0, import_react.useState)(false);
  const handleBackColorOnChange = (color) => {
    setBackColor(color);
  };
  const handleTextColorOnChange = (color) => {
    setTextColor(color);
  };
  const handleAttributesGroupBackColorOnChange = (color) => {
    setAttributesGroupBackColor(color);
  };
  const handleAttributesGroupTextColorOnChange = (color) => {
    setAttributesGroupTextColor(color);
  };
  const handleAttributesTextColorOnChange = (color) => {
    setAttributesTextColor(color);
  };
  const handleAttributesBackColorOnChange = (color) => {
    setAttributesBackColor(color);
  };
  const handleTopbarBackColor = (color) => {
    setTopbarBackColor(color);
  };
  const handleTopbarTextColor = (color) => {
    setTopbarTextColor(color);
  };
  const handleDiscardActionOnClick = () => {
    setBackColor(table.backColor);
    setTextColor(table.textColor);
    setAttributesBackColor(table.attributesBackColor);
    setAttributesTextColor(table.attributesTextColor);
    setAttributesGroupTextColor(table.attributesGroupTextColor);
    setAttributesGroupBackColor(table.attributesGroupBackColor);
    setTopbarBackColor(table.topbarBackColor);
    setTopbarTextColor(table.topbarTextColor);
  };
  const currentDataInClientObject = (0, import_react.useMemo)(() => {
    return {
      backColor,
      textColor,
      attributesBackColor,
      attributesTextColor,
      attributesGroupTextColor,
      attributesGroupBackColor,
      topbarBackColor,
      topbarTextColor
    };
  }, [backColor, textColor, attributesBackColor, attributesTextColor, attributesGroupTextColor, attributesGroupBackColor, topbarBackColor, topbarTextColor]);
  (0, import_react.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, table));
    setLoadedData(false);
  }, [table, currentDataInClientObject]);
  const handleSaveOnClick = () => {
    const data = JSON.stringify({
      table: {
        backColor,
        textColor,
        attributesBackColor,
        attributesTextColor,
        attributesGroupTextColor,
        attributesGroupBackColor,
        topbarBackColor,
        topbarTextColor
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineStack, { gap: "200", wrap: false, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill", width: "400px", borderColor: "border", minHeight: "100vh", borderWidth: "050", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockStack, { gap: "200", children: [
      !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContextualSaveBar, { alignContentFlush: true, message: "Unsaved changes", saveAction: {
        onAction: handleSaveOnClick,
        loading: loadedData
      }, discardAction: {
        onAction: handleDiscardActionOnClick
      } }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 223,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 222,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "Table Style" }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 231,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 232,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: backColor, onChange: handleBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 234,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", onChange: handleTextColorOnChange, initialColor: textColor }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 235,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Attributes Background Color", initialColor: attributesBackColor, onChange: handleAttributesBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 236,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Attributes Text Color", initialColor: attributesTextColor, onChange: handleAttributesTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 237,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Attributes Group Background Color", initialColor: attributesGroupBackColor, onChange: handleAttributesGroupBackColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 238,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Attributes Group Text Color", initialColor: attributesGroupTextColor, onChange: handleAttributesGroupTextColorOnChange }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 239,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { borderColor: "border" }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 240,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { as: "p", variant: "headingSm", children: "Topbar Action Style" }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 242,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Background Color", initialColor: topbarBackColor, onChange: handleTopbarBackColor }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 244,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorSetting, { title: "Text Color", initialColor: topbarTextColor, onChange: handleTopbarTextColor }, void 0, false, {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 245,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 221,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 220,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 219,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PreviewTable, { backColor, textColor, attributesGroupBackColor, attributesGroupTextColor, attributesBackColor, attributesTextColor, topbarBackColor, topbarTextColor }, void 0, false, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 258,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 250,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 249,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.comparison.table.tsx",
    lineNumber: 218,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.comparison.table.tsx",
    lineNumber: 217,
    columnNumber: 10
  }, this);
}
_s(ComparisonTableSettings, "6CW9CdkbYssX3Jk6I0rbrlsg58k=", false, function() {
  return [useLoaderData, useSubmit];
});
_c2 = ComparisonTableSettings;
var _c2;
$RefreshReg$(_c2, "ComparisonTableSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ComparisonTableSettings as default
};
//# sourceMappingURL=/build/routes/app.comparison.table-ZXLE7AJU.js.map
