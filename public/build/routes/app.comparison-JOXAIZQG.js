import "/build/_shared/chunk-WD5KJCUX.js";
import {
  require_actions,
  require_app_bridge_react
} from "/build/_shared/chunk-AHRZ4I3J.js";
import {
  BlockStack,
  Box,
  FullscreenBar,
  Icon,
  InlineStack,
  SvgAnalyticsTableMinor,
  SvgButtonMinor,
  SvgDetailedPopUpMajor,
  SvgTextBlockMajor,
  SvgToolsMajor,
  Text,
  Tooltip,
  init_dist,
  init_esm as init_esm2
} from "/build/_shared/chunk-OBV6KFN7.js";
import {
  NavLink,
  Outlet,
  init_esm,
  useNavigate
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

// app/routes/app.comparison.tsx
init_remix_hmr();
init_esm2();
init_esm();
var import_react2 = __toESM(require_react());

// app/constants/buttons.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\constants\\buttons.ts"
  );
  import.meta.hot.lastModified = "1702560995329.1584";
}
var SettingsLinkList = [
  {
    path: "/app/comparison/atc" /* ADD_TO_COMPARE */,
    title: "Product Detail Page",
    icon: "detailPage"
  },
  {
    path: "/app/comparison/fixed-btn" /* STICKY_FIXED */,
    title: "Sticky Fixed Button",
    icon: "fixedButton"
  },
  {
    path: "/app/comparison/toolbar" /* COMPARISON_TOOLBAR */,
    title: "Comparison Toolbar",
    icon: "toolbar"
  },
  {
    path: "/app/comparison/table" /* COMPARISON_TABLE */,
    title: "Comparison Table",
    icon: "table"
  }
];

// app/components/CustomNavListItem.tsx
init_remix_hmr();
init_esm2();
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\CustomNavListItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\CustomNavListItem.tsx"
  );
  import.meta.hot.lastModified = "1702400956709.1282";
}
var switchIcon = {
  "detailPage": () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgDetailedPopUpMajor }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 24,
    columnNumber: 23
  }, this),
  "gridPage": () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgTextBlockMajor }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 25,
    columnNumber: 21
  }, this),
  "fixedButton": () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgButtonMinor }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 26,
    columnNumber: 24
  }, this),
  "toolbar": () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgToolsMajor }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 27,
    columnNumber: 20
  }, this),
  "table": () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgAnalyticsTableMinor }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 28,
    columnNumber: 18
  }, this)
};
var CustomNavListItem = ({
  isActive,
  title,
  icon
}) => {
  const SelectedComponent = switchIcon[icon] || (() => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "\u041D\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430" }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 35,
    columnNumber: 56
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    margin: 2,
    width: 50,
    height: 50,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isActive ? "rgba(200, 200, 200, 0.4)" : "none"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    padding: "75px 0"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { content: title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontWeight: "bold", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedComponent, {}, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 51,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 50,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 49,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 46,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c = CustomNavListItem;
var _c;
$RefreshReg$(_c, "CustomNavListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.comparison.tsx
var import_app_bridge_react = __toESM(require_app_bridge_react());
var import_actions = __toESM(require_actions());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\app.comparison.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\app.comparison.tsx"
  );
  import.meta.hot.lastModified = "1702480693614.6343";
}
function ComparisonPage() {
  _s();
  const navigate = useNavigate();
  const app = (0, import_app_bridge_react.useAppBridge)();
  const fullscreen = import_actions.Fullscreen.create(app);
  (0, import_react2.useEffect)(() => {
    fullscreen.dispatch(import_actions.Fullscreen.Action.ENTER);
    navigate("/app/comparison/atc" /* ADD_TO_COMPARE */);
    return () => {
      fullscreen.dispatch(import_actions.Fullscreen.Action.EXIT);
    };
  }, []);
  const handleFullscreenExit = () => {
    navigate("/app" /* ROOT */);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FullscreenBar, { onAction: handleFullscreenExit }, void 0, false, {
      fileName: "app/routes/app.comparison.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "row"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { background: "bg-fill", minHeight: "100%", width: "70px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockStack, { align: "center", inlineAlign: "center", gap: "200", children: SettingsLinkList.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { style: {
        textDecoration: "none",
        color: "#000"
      }, to: item.path, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomNavListItem, { icon: item.icon, isActive, title: item.title }, Date.now() + index, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this) }, Date.now() + index, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 54,
        columnNumber: 66
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 53,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineStack, { wrap: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 68,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 67,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 66,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.comparison.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.comparison.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(ComparisonPage, "l81SqxW34Ag2bwIrtHBm0STOY8I=", false, function() {
  return [useNavigate, import_app_bridge_react.useAppBridge];
});
_c2 = ComparisonPage;
var _c2;
$RefreshReg$(_c2, "ComparisonPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ComparisonPage as default
};
//# sourceMappingURL=/build/routes/app.comparison-JOXAIZQG.js.map
