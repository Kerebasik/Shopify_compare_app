import {
  Box,
  Button,
  InlineStack,
  Text,
  init_esm
} from "/build/_shared/chunk-OBV6KFN7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-R5POWXF3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/BooleanSetting.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\BooleanSetting.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\BooleanSetting.tsx"
  );
  import.meta.hot.lastModified = "1701699172419.7314";
}
var BooleanSetting = ({
  title,
  value,
  valueOnChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", blockAlign: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "bodySm", children: title }, void 0, false, {
      fileName: "app/components/BooleanSetting.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { as: "span", background: value ? "bg-surface-success" : "bg-fill-transparent-secondary", borderRadius: "150", paddingInlineStart: "200", paddingInlineEnd: "200", children: value ? "On" : "Off" }, void 0, false, {
      fileName: "app/components/BooleanSetting.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: valueOnChange, children: [
      "Turn ",
      value ? "Off" : "On"
    ] }, void 0, true, {
      fileName: "app/components/BooleanSetting.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BooleanSetting.tsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/BooleanSetting.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = BooleanSetting;
var _c;
$RefreshReg$(_c, "BooleanSetting");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BooleanSetting
};
//# sourceMappingURL=/build/_shared/chunk-4NT7NZIW.js.map
