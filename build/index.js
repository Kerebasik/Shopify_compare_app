var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.ts
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-10");

// app/db.server.ts
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.ts
var shopify2 = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify2.registerWebhooks({ session });
    }
  },
  future: {
    v3_webhookAdminContext: !0,
    v3_authenticatePublic: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify2.addDocumentResponseHeaders, authenticate = shopify2.authenticate, unauthenticated = shopify2.unauthenticated, login = shopify2.login, registerWebhooks = shopify2.registerWebhooks, sessionStorage = shopify2.sessionStorage;

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 26,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.comparison.fixed-btn.tsx
var app_comparison_fixed_btn_exports = {};
__export(app_comparison_fixed_btn_exports, {
  action: () => action,
  default: () => StickyFixedButtonSettings,
  loader: () => loader
});
var import_polaris3 = require("@shopify/polaris");

// app/components/BooleanSetting.tsx
var import_polaris = require("@shopify/polaris"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), BooleanSetting = ({ title, value, valueOnChange }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.InlineStack, { align: "space-between", blockAlign: "center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "p", variant: "bodySm", children: title }, void 0, !1, {
    fileName: "app/components/BooleanSetting.tsx",
    lineNumber: 13,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Box, { as: "span", background: value ? "bg-surface-success" : "bg-fill-transparent-secondary", borderRadius: "150", paddingInlineStart: "200", paddingInlineEnd: "200", children: value ? "On" : "Off" }, void 0, !1, {
    fileName: "app/components/BooleanSetting.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Button, { onClick: valueOnChange, children: [
    "Turn ",
    value ? "Off" : "On"
  ] }, void 0, !0, {
    fileName: "app/components/BooleanSetting.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/BooleanSetting.tsx",
  lineNumber: 12,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/BooleanSetting.tsx",
  lineNumber: 11,
  columnNumber: 9
}, this);

// app/routes/app.comparison.fixed-btn.tsx
var import_react4 = require("react");

// app/components/ColorSetting.tsx
var import_polaris2 = require("@shopify/polaris"), import_react3 = require("react"), import_chroma_js = __toESM(require("chroma-js")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), ColorSetting = ({ title, initialColor = "#fff", onChange = () => {
} }) => {
  let [valueBackColor, setValueBackColor] = (0, import_react3.useState)(initialColor), [hexColor, setHexColor] = (0, import_react3.useState)(), [showColorPicker, setShowColorPicker] = (0, import_react3.useState)(!1), [color, setColor] = (0, import_react3.useState)({
    hue: 120,
    brightness: 1,
    saturation: 1
  }), colorBack = (0, import_react3.useMemo)(() => import_chroma_js.default.hsv(color.hue, color.saturation, color.brightness).hex(), [color]);
  (0, import_react3.useEffect)(() => {
    setValueBackColor(colorBack);
  }, [colorBack]);
  let togglePopoverActive = (0, import_react3.useCallback)(
    () => setShowColorPicker((popoverActive) => !popoverActive),
    []
  ), isValidHexColor = (value) => value === "" ? !0 : /^#([0-9a-fA-F]{6})$/.test(value);
  (0, import_react3.useEffect)(() => {
    isValidHexColor(valueBackColor) && setHexColor(valueBackColor);
  }, [valueBackColor]);
  let handleChangeBackColor = (0, import_react3.useCallback)(
    (newValue) => setValueBackColor(newValue),
    []
  );
  (0, import_react3.useEffect)(() => {
    setValueBackColor(initialColor);
  }, [initialColor]), (0, import_react3.useEffect)(() => {
    onChange(hexColor);
  }, [hexColor]);
  let activator = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      style: {
        backgroundColor: valueBackColor,
        border: "1.5px solid",
        borderColor: "rgba(138, 138, 138, 1)",
        width: "45px",
        height: "45px",
        borderRadius: "25px",
        cursor: "pointer"
      },
      onClick: togglePopoverActive
    },
    void 0,
    !1,
    {
      fileName: "app/components/ColorSetting.tsx",
      lineNumber: 67,
      columnNumber: 23
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.InlineStack, { align: "space-between", blockAlign: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris2.TextField,
      {
        label: title,
        value: valueBackColor,
        onChange: handleChangeBackColor,
        error: !isValidHexColor(valueBackColor),
        autoComplete: "off"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ColorSetting.tsx",
        lineNumber: 82,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris2.Popover,
      {
        active: showColorPicker,
        activator,
        autofocusTarget: "first-node",
        onClose: togglePopoverActive,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.ColorPicker, { onChange: setColor, color }, void 0, !1, {
          fileName: "app/components/ColorSetting.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ColorSetting.tsx",
        lineNumber: 90,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ColorSetting.tsx",
    lineNumber: 81,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/ColorSetting.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, this);
};

// app/routes/app.comparison.fixed-btn.tsx
var import_node3 = require("@remix-run/node");

// app/graphql/query.ts
var GET_CURRENT_APP_ID = `
    query {
        currentAppInstallation {
            id
        }
    }
`, GET_APP_METAFIELDS = `
    query AppInstallationMetafields($ownerId: ID!, $namespace:String!) {
      appInstallation(id: $ownerId) {
        metafields(first: 250, namespace:$namespace) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
    }
`;

// app/routes/app.comparison.fixed-btn.tsx
var import_react5 = require("@remix-run/react");

// app/graphql/mutation.ts
var SET_METAFIELDS = `
    mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          id
          namespace
          key
        }
        userErrors {
          field
          message
        }
      }
}
`, DEL_METAFIELD = `
mutation metafieldDelete($input: MetafieldDeleteInput!) {
  metafieldDelete(input: $input) {
    deletedId
    userErrors {
      field
      message
    }
  }
}`;

// app/services/converter.ts
var deepEqualObject = (obj1, obj2) => {
  if (obj1 === obj2)
    return !0;
  if (typeof obj1 != "object" || obj1 === null || typeof obj2 != "object" || obj2 === null)
    return !1;
  let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length)
    return !1;
  for (let key of keys1)
    if (!deepEqualObject(obj1[key], obj2[key]))
      return !1;
  return !0;
}, arrayToObjectMetafield = (arrayMetafields) => {
  let myObject = {};
  for (let item of arrayMetafields)
    myObject[item.node.key] = item.node.value;
  return myObject;
};

// app/constants/namespaces.ts
var Metafields = {
  ProductButton: "productButton",
  FixedButton: "fixedButton",
  Toolbar: "toolbar",
  ProductsGridButton: "productsGridButton",
  Table: "table"
};

// app/constants/defaults.ts
var defaultStylesForToolbar = {
  showToolbar: "true",
  showToolbarAfterClickOnProductPage: "true",
  backgroundColor: "#464545",
  textColor: "#000000",
  viewCompareButtonBackColor: "#0067dd",
  viewCompareButtonTextColor: "#0067dd",
  closeButtonBackColor: "#000000",
  closeButtonTextColor: "#000000",
  cleanUpButtonBackColor: "#fc893c",
  cleanUpButtonTextColor: "#fc893c"
}, defaultStylesForProductDetailPageButton = {
  show: "true",
  showIcon: "true",
  showLabel: "true",
  backColor: "#ffffff",
  borderColor: "#000000",
  addToCompareTextColor: "#000000",
  removeFromCompareTextColor: "#000000"
}, defaultStylesForFixedButton = {
  show: "true",
  showLabel: "true",
  backColor: "#000000",
  textColor: "#000000"
}, defaultStylesForProductsGridButton = {
  showCompareButton: "false",
  showIcon: "true",
  showLabel: "true",
  backgroundColor: "#ffffff",
  borderColor: "#ffffff",
  addCompareButtonTextColor: "#ffffff",
  removeCompareButtonTextColor: "#ffffff"
}, defaultStylesForTable = {
  backColor: "#ffffff",
  textColor: "#000000",
  attributesBackColor: "#ffffff",
  attributesTextColor: "#000000",
  attributesGroupTextColor: "#000000",
  attributesGroupBackColor: "#ffffff",
  topbarBackColor: "#ffffff",
  topbarTextColor: "#000000"
};

// app/components/PreviewFixedCompareButton/FixedCompareButton.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), PreviewFixedCompareButton = ({ showLabel, textColor, backColor }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: {
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
}, children: showLabel && "Compare" }, void 0, !1, {
  fileName: "app/components/PreviewFixedCompareButton/FixedCompareButton.tsx",
  lineNumber: 11,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/PreviewFixedCompareButton/FixedCompareButton.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this);

// app/constants/types.ts
var MetafieldsType = {
  Boolean: "boolean",
  Color: "color"
};

// app/constants/keys.ts
var MetafieldsProductButtonKeys = {
  Show: "show",
  ShowLabel: "showLabel",
  ShowIcon: "showIcon",
  BackColor: "backColor",
  BorderColor: "borderColor",
  AddToCompareTextColor: "addToCompareTextColor",
  RemoveFromCompareTextColor: "removeFromCompareTextColor"
}, MetafieldsFixedButtonKeys = {
  Show: "show",
  ShowLabel: "showLabel",
  BackColor: "backColor",
  TextColor: "textColor"
}, MetafieldsProductsGridButtonKeys = {
  ShowCompareButton: "showCompareButton",
  ShowIcon: "showIcon",
  ShowLabel: "showLabel",
  BackgroundColor: "backgroundColor",
  BorderColor: "borderColor",
  AddCompareButtonTextColor: "addCompareButtonTextColor",
  RemoveCompareButtonTextColor: "removeCompareButtonTextColor"
}, MetafieldsTableKeys = {
  BackColor: "backColor",
  TextColor: "textColor",
  AttributesBackColor: "attributesBackColor",
  AttributesTextColor: "attributesTextColor",
  AttributesGroupTextColor: "attributesGroupTextColor",
  AttributesGroupBackColor: "attributesGroupBackColor",
  TopbarBackColor: "topbarBackColor",
  TopbarTextColor: "topbarTextColor"
}, MetafieldsToolbarKeys = {
  ShowToolbar: "showToolbar",
  ShowToolbarAfterClickOnProductPage: "showToolbarAfterClickOnProductPage",
  BackgroundColor: "backgroundColor",
  TextColor: "textColor",
  ViewCompareButtonBackColor: "viewCompareButtonBackColor",
  ViewCompareButtonTextColor: "viewCompareButtonTextColor",
  CloseButtonBackColor: "closeButtonBackColor",
  CloseButtonTextColor: "closeButtonTextColor",
  CleanUpButtonBackColor: "cleanUpButtonBackColor",
  CleanUpButtonTextColor: "cleanUpButtonTextColor"
};

// app/routes/app.comparison.fixed-btn.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader = async ({ request }) => {
  let { admin } = await authenticate.admin(request), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id, arrayMetafields = (await (await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: Metafields.FixedButton
    }
  })).json()).data.appInstallation.metafields.edges, fixedButton;
  return arrayMetafields.length === 0 ? fixedButton = defaultStylesForFixedButton : fixedButton = arrayToObjectMetafield(arrayMetafields), (0, import_node3.json)({
    fixedButton
  });
}, action = async ({ request }) => {
  let { admin } = await authenticate.admin(request), formData = await request.formData(), objectFD = Object.fromEntries(formData), dataFormData = await JSON.parse(String(objectFD.data)), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id;
  return await admin.graphql(
    SET_METAFIELDS,
    {
      variables: {
        metafields: [
          {
            namespace: Metafields.FixedButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsFixedButtonKeys.Show,
            value: String(dataFormData.fixedButton.show),
            ownerId: id
          },
          {
            namespace: Metafields.FixedButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsFixedButtonKeys.ShowLabel,
            value: String(dataFormData.fixedButton.showLabel),
            ownerId: id
          },
          {
            namespace: Metafields.FixedButton,
            type: MetafieldsType.Color,
            key: MetafieldsFixedButtonKeys.BackColor,
            value: String(dataFormData.fixedButton.backColor),
            ownerId: id
          },
          {
            namespace: Metafields.FixedButton,
            type: MetafieldsType.Color,
            key: MetafieldsFixedButtonKeys.TextColor,
            value: String(dataFormData.fixedButton.textColor),
            ownerId: id
          }
        ]
      }
    }
  ), null;
};
function StickyFixedButtonSettings() {
  let { fixedButton } = (0, import_react5.useLoaderData)(), submit = (0, import_react5.useSubmit)(), [showStickyButton, setShowStickyButton] = (0, import_react4.useState)(fixedButton.show === "true"), [showLabel, setShowLabel] = (0, import_react4.useState)(fixedButton.showLabel === "true"), [backColor, setBackColor] = (0, import_react4.useState)(fixedButton.backColor), [textColor, setTextColor] = (0, import_react4.useState)(fixedButton.textColor), [actualData, setActualData] = (0, import_react4.useState)(!0), [loadedData, setLoadedData] = (0, import_react4.useState)(!1), handleShowStickyButtonOnChange = () => {
    setShowStickyButton(!showStickyButton);
  }, handleShowLabelOnChange = () => {
    setShowLabel(!showLabel);
  }, handleBackColorOnChange = (color) => {
    setBackColor(color);
  }, handleTextColorOnChange = (color) => {
    setTextColor(color);
  }, handleDiscardActionOnClick = () => {
    setShowStickyButton(fixedButton.show === "true"), setShowLabel(fixedButton.showLabel === "true"), setBackColor(fixedButton.backColor), setTextColor(fixedButton.textColor);
  }, currentDataInClientObject = (0, import_react4.useMemo)(() => ({
    show: String(showStickyButton),
    showLabel: String(showLabel),
    backColor,
    textColor
  }), [showStickyButton, showLabel, backColor, textColor]);
  return (0, import_react4.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, fixedButton)), setLoadedData(!1);
  }, [fixedButton, currentDataInClientObject]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { gap: "200", wrap: !1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris3.Box,
      {
        background: "bg-fill",
        width: "400px",
        borderColor: "border",
        minHeight: "100vh",
        borderWidth: "050",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.BlockStack, { gap: "300", children: [
          !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_polaris3.ContextualSaveBar,
            {
              alignContentFlush: !0,
              message: "Unsaved changes",
              saveAction: {
                onAction: () => {
                  let data = JSON.stringify({
                    fixedButton: {
                      show: showStickyButton,
                      showLabel,
                      backColor,
                      textColor
                    }
                  });
                  submit({ data }, { method: "POST" }), setLoadedData(!0);
                },
                loading: loadedData
              },
              discardAction: {
                onAction: handleDiscardActionOnClick
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.fixed-btn.tsx",
              lineNumber: 208,
              columnNumber: 41
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 207,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "h4", variant: "headingMd", children: "Sticky Fixed Button" }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 222,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 224,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            BooleanSetting,
            {
              title: "Show sticky fixed button",
              value: showStickyButton,
              valueOnChange: handleShowStickyButtonOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.fixed-btn.tsx",
              lineNumber: 226,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 229,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "h4", variant: "headingSm", children: "Sticky Fixed Button" }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 231,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            BooleanSetting,
            {
              title: "Show Label",
              value: showLabel,
              valueOnChange: handleShowLabelOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.fixed-btn.tsx",
              lineNumber: 233,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 236,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "h4", variant: "headingSm", children: "Style" }, void 0, !1, {
            fileName: "app/routes/app.comparison.fixed-btn.tsx",
            lineNumber: 238,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: backColor,
              onChange: handleBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.fixed-btn.tsx",
              lineNumber: 240,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              initialColor: textColor,
              onChange: handleTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.fixed-btn.tsx",
              lineNumber: 245,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.comparison.fixed-btn.tsx",
          lineNumber: 204,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.comparison.fixed-btn.tsx",
          lineNumber: 203,
          columnNumber: 25
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 197,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      PreviewFixedCompareButton,
      {
        showLabel,
        backColor,
        textColor
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.fixed-btn.tsx",
        lineNumber: 262,
        columnNumber: 29
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 254,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.comparison.fixed-btn.tsx",
      lineNumber: 253,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.comparison.fixed-btn.tsx",
    lineNumber: 196,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.comparison.fixed-btn.tsx",
    lineNumber: 195,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.comparison.fixed-btn.tsx",
    lineNumber: 194,
    columnNumber: 9
  }, this);
}

// app/routes/app.comparison.toolbar.tsx
var app_comparison_toolbar_exports = {};
__export(app_comparison_toolbar_exports, {
  action: () => action2,
  default: () => ToolbarSettings,
  loader: () => loader2
});
var import_polaris4 = require("@shopify/polaris");
var import_react6 = require("react");
var import_node4 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");

// app/components/PreviewToolbar/PreviewToolbar.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), PreviewToolbar = ({ backgroundColor, closeButtonBackColor, closeButtonTextColor, cleanUpButtonBackColor, cleanUpButtonTextColor, textColor, viewCompareButtonTextColor, viewCompareButtonBackColor }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
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
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
    flex: "0 0 75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
    maxWidth: "200px",
    maxHeight: "200px",
    minHeight: "150px",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "10px"
    }, children: "Product img" }, void 0, !1, {
      fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
      lineNumber: 46,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
      fontWeight: 600,
      color: `${textColor}`
    }, children: "Product name" }, void 0, !1, {
      fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
      lineNumber: 57,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
    lineNumber: 36,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
    lineNumber: 30,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "200px",
    maxHeight: "200px",
    minWidth: "200px",
    padding: "10px",
    flex: "0 0 25%",
    gap: "10px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        style: {
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
        },
        children: "Compare"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 75,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        style: {
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
        },
        children: "Clean up"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 92,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        style: {
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
        },
        children: "Close"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
        lineNumber: 110,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
    lineNumber: 65,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
  lineNumber: 18,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/PreviewToolbar/PreviewToolbar.tsx",
  lineNumber: 16,
  columnNumber: 9
}, this);

// app/routes/app.comparison.toolbar.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id, arrayMetafields = (await (await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: Metafields.Toolbar
    }
  })).json()).data.appInstallation.metafields.edges, toolbar;
  return arrayMetafields.length === 0 ? toolbar = defaultStylesForToolbar : toolbar = arrayToObjectMetafield(arrayMetafields), (0, import_node4.json)({
    toolbar
  });
}, action2 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), formData = await request.formData(), objectFD = Object.fromEntries(formData), dataFormData = await JSON.parse(String(objectFD.data)), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id;
  return await admin.graphql(
    SET_METAFIELDS,
    {
      variables: {
        metafields: [
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Boolean,
            key: MetafieldsToolbarKeys.ShowToolbar,
            value: String(dataFormData.toolbar.showToolbar),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Boolean,
            key: MetafieldsToolbarKeys.ShowToolbarAfterClickOnProductPage,
            value: String(dataFormData.toolbar.showToolbarAfterClickOnProductPage),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.BackgroundColor,
            value: String(dataFormData.toolbar.backgroundColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.TextColor,
            value: String(dataFormData.toolbar.textColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.ViewCompareButtonBackColor,
            value: String(dataFormData.toolbar.viewCompareButtonBackColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.ViewCompareButtonTextColor,
            value: String(dataFormData.toolbar.viewCompareButtonTextColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.CloseButtonBackColor,
            value: String(dataFormData.toolbar.closeButtonBackColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.CloseButtonTextColor,
            value: String(dataFormData.toolbar.closeButtonTextColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.CleanUpButtonBackColor,
            value: String(dataFormData.toolbar.cleanUpButtonBackColor),
            ownerId: id
          },
          {
            namespace: Metafields.Toolbar,
            type: MetafieldsType.Color,
            key: MetafieldsToolbarKeys.CleanUpButtonTextColor,
            value: String(dataFormData.toolbar.cleanUpButtonTextColor),
            ownerId: id
          }
        ]
      }
    }
  ), null;
};
function ToolbarSettings() {
  let { toolbar } = (0, import_react7.useLoaderData)(), submit = (0, import_react7.useSubmit)(), [showToolbar, setShowToolbar] = (0, import_react6.useState)(toolbar.showToolbar === "true"), [showToolbarAfterClickOnProductPage, setShowToolbarAfterClickOnProductPage] = (0, import_react6.useState)(toolbar.showToolbarAfterClickOnProductPage === "true"), [backgroundColor, setBackgroundColor] = (0, import_react6.useState)(toolbar.backgroundColor), [textColor, setTextColor] = (0, import_react6.useState)(toolbar.textColor), [viewCompareButtonBackColor, setViewCompareButtonBackColor] = (0, import_react6.useState)(toolbar.viewCompareButtonBackColor), [viewCompareButtonTextColor, setViewCompareButtonTextColor] = (0, import_react6.useState)(toolbar.viewCompareButtonTextColor), [closeButtonBackColor, setCloseButtonBackColor] = (0, import_react6.useState)(toolbar.closeButtonBackColor), [closeButtonTextColor, setCloseButtonTextColor] = (0, import_react6.useState)(toolbar.closeButtonTextColor), [cleanUpButtonBackColor, setCleanUpButtonBackColor] = (0, import_react6.useState)(toolbar.cleanUpButtonBackColor), [cleanUpButtonTextColor, setCleanUpButtonTextColor] = (0, import_react6.useState)(toolbar.cleanUpButtonTextColor), [actualData, setActualData] = (0, import_react6.useState)(!0), [loadedData, setLoadedData] = (0, import_react6.useState)(!1), handleShowToolbarOnChange = () => {
    setShowToolbar(!showToolbar);
  }, handleShowToolbarAfterOnChange = () => {
    setShowToolbarAfterClickOnProductPage(!showToolbarAfterClickOnProductPage);
  }, handleBackgroundColorOnChange = (color) => {
    setBackgroundColor(color);
  }, handleViewCompareButtonBackColorOnChange = (color) => {
    setViewCompareButtonBackColor(color);
  }, handleTextColorOnChange = (color) => {
    setTextColor(color);
  }, handleViewCompareButtonTextColorOnChange = (color) => {
    setViewCompareButtonTextColor(color);
  }, handleCloseButtonBackColorOnChange = (color) => {
    setCloseButtonBackColor(color);
  }, handleCloseButtonTextColorOnChange = (color) => {
    setCloseButtonTextColor(color);
  }, handleCleanUpButtonBackColorOnChange = (color) => {
    setCleanUpButtonBackColor(color);
  }, handleCleanUpButtonTextColorOnChange = (color) => {
    setCleanUpButtonTextColor(color);
  }, handleSaveOnClick = () => {
    let data = JSON.stringify(
      {
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
      }
    );
    submit({ data }, { method: "POST" }), setLoadedData(!0);
  }, handleDiscardActionOnClick = () => {
    setShowToolbar(toolbar.showToolbar === "true"), setShowToolbarAfterClickOnProductPage(toolbar.showToolbarAfterClickOnProductPage === "true"), setBackgroundColor(toolbar.backgroundColor), setTextColor(toolbar.textColor), setViewCompareButtonBackColor(toolbar.viewCompareButtonBackColor), setViewCompareButtonTextColor(toolbar.viewCompareButtonTextColor), setCloseButtonBackColor(toolbar.closeButtonBackColor), setCloseButtonTextColor(toolbar.closeButtonTextColor), setCleanUpButtonBackColor(toolbar.cleanUpButtonBackColor), setCleanUpButtonTextColor(toolbar.cleanUpButtonTextColor);
  }, currentDataInClientObject = (0, import_react6.useMemo)(() => ({
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
  }), [showToolbar, showToolbarAfterClickOnProductPage, backgroundColor, textColor, viewCompareButtonBackColor, viewCompareButtonTextColor, closeButtonBackColor, closeButtonTextColor, cleanUpButtonBackColor, cleanUpButtonTextColor]);
  return (0, import_react6.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, toolbar)), setLoadedData(!1);
  }, [toolbar, currentDataInClientObject]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.InlineStack, { gap: "200", wrap: !1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_polaris4.Box,
      {
        background: "bg-fill",
        width: "400px",
        borderColor: "border",
        borderWidth: "050",
        minHeight: "150vh",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.BlockStack, { gap: "300", children: [
          !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_polaris4.ContextualSaveBar,
            {
              alignContentFlush: !0,
              message: "Unsaved changes",
              saveAction: {
                onAction: handleSaveOnClick,
                loading: loadedData
              },
              discardAction: {
                onAction: handleDiscardActionOnClick
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 303,
              columnNumber: 41
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 302,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Text, { as: "p", variant: "headingMd", children: "Comparison Toolbar" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 317,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 318,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Text, { as: "p", variant: "headingSm", children: "Toolbar" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 319,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BooleanSetting, { value: showToolbar, valueOnChange: handleShowToolbarOnChange, title: "Show toolbar after click fixed button" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 320,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            BooleanSetting,
            {
              title: "Show toolbar after product added to compare",
              valueOnChange: handleShowToolbarAfterOnChange,
              value: showToolbarAfterClickOnProductPage
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 321,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: backgroundColor,
              onChange: handleBackgroundColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 325,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              initialColor: textColor,
              onChange: handleTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 330,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 335,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Text, { as: "p", variant: "headingSm", children: "View Compare Button" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 337,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: viewCompareButtonBackColor,
              onChange: handleViewCompareButtonBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 338,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              initialColor: viewCompareButtonTextColor,
              onChange: handleViewCompareButtonTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 342,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 346,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Text, { as: "p", variant: "headingSm", children: "Close Button" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 347,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: closeButtonBackColor,
              onChange: handleCloseButtonBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 348,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              initialColor: closeButtonTextColor,
              onChange: handleCloseButtonTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 352,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 357,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Text, { as: "p", variant: "headingSm", children: "Clean up Button" }, void 0, !1, {
            fileName: "app/routes/app.comparison.toolbar.tsx",
            lineNumber: 358,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: cleanUpButtonBackColor,
              onChange: handleCleanUpButtonBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 359,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              initialColor: cleanUpButtonTextColor,
              onChange: handleCleanUpButtonTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.toolbar.tsx",
              lineNumber: 363,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.comparison.toolbar.tsx",
          lineNumber: 299,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.comparison.toolbar.tsx",
          lineNumber: 298,
          columnNumber: 25
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 292,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      PreviewToolbar,
      {
        backgroundColor,
        textColor,
        viewCompareButtonTextColor,
        viewCompareButtonBackColor,
        cleanUpButtonTextColor,
        cleanUpButtonBackColor,
        closeButtonTextColor,
        closeButtonBackColor
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.toolbar.tsx",
        lineNumber: 379,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 371,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.comparison.toolbar.tsx",
      lineNumber: 370,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.comparison.toolbar.tsx",
    lineNumber: 291,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.comparison.toolbar.tsx",
    lineNumber: 290,
    columnNumber: 9
  }, this);
}

// app/routes/app.comparison.table.tsx
var app_comparison_table_exports = {};
__export(app_comparison_table_exports, {
  action: () => action3,
  default: () => ComparisonTableSettings,
  loader: () => loader3
});
var import_polaris5 = require("@shopify/polaris");
var import_react8 = require("react");
var import_node5 = require("@remix-run/node");
var import_react9 = require("@remix-run/react");

// app/components/PreviewTable/PreviewTable.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), PreviewTable = ({
  backColor,
  textColor,
  attributesGroupBackColor,
  topbarBackColor,
  topbarTextColor,
  attributesGroupTextColor,
  attributesBackColor,
  attributesTextColor
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "div",
  {
    style: {
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
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "button",
        {
          style: {
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
          },
          children: "X"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "rgba(204, 204, 204, 1)"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "table",
            {
              style: {
                height: "100%",
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                borderCollapse: "collapse"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tbody", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                  "tr",
                  {
                    style: {
                      height: "200px"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        "th",
                        {
                          style: {
                            backgroundColor: `${attributesGroupBackColor}`,
                            borderRadius: "10px 0 0 0",
                            borderRight: "1px solid",
                            borderBottom: "1px solid",
                            color: `${attributesGroupTextColor}`,
                            borderColor: "rgba(204, 204, 204, 1)"
                          },
                          children: "Products"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/PreviewTable/PreviewTable.tsx",
                          lineNumber: 81,
                          columnNumber: 17
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                        "th",
                        {
                          style: {
                            borderBottom: "1px solid",
                            borderColor: "rgba(204, 204, 204, 1)",
                            borderRadius: "0 10px 0 0",
                            backgroundColor: `${backColor}`
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                flexDirection: "column",
                                alignItems: "center"
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                                  "div",
                                  {
                                    style: {
                                      width: "50px",
                                      fontSize: "18px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center"
                                    },
                                    children: "Product Icon"
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "app/components/PreviewTable/PreviewTable.tsx",
                                    lineNumber: 110,
                                    columnNumber: 21
                                  },
                                  this
                                ),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                                  "div",
                                  {
                                    style: {
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
                                    },
                                    children: "Add to cart"
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "app/components/PreviewTable/PreviewTable.tsx",
                                    lineNumber: 121,
                                    columnNumber: 21
                                  },
                                  this
                                ),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Learn more" }, void 0, !1, {
                                  fileName: "app/components/PreviewTable/PreviewTable.tsx",
                                  lineNumber: 139,
                                  columnNumber: 21
                                }, this)
                              ]
                            },
                            void 0,
                            !0,
                            {
                              fileName: "app/components/PreviewTable/PreviewTable.tsx",
                              lineNumber: 101,
                              columnNumber: 19
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/PreviewTable/PreviewTable.tsx",
                          lineNumber: 93,
                          columnNumber: 17
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/PreviewTable/PreviewTable.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "th",
                    {
                      style: {
                        borderRight: "1px solid",
                        borderBottom: "1px solid",
                        borderColor: "rgba(204, 204, 204, 1)",
                        color: `${attributesGroupTextColor}`,
                        backgroundColor: `${attributesGroupBackColor}`
                      },
                      children: "Variant Title"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 144,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "td",
                    {
                      style: {
                        borderBottom: "1px solid",
                        borderColor: "rgba(204, 204, 204, 1)",
                        backgroundColor: `${backColor}`,
                        color: `${textColor}`
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { style: { textAlign: "center" }, children: "Default Title" }, void 0, !1, {
                        fileName: "app/components/PreviewTable/PreviewTable.tsx",
                        lineNumber: 163,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 155,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/PreviewTable/PreviewTable.tsx",
                  lineNumber: 143,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "th",
                    {
                      style: {
                        backgroundColor: `${attributesGroupBackColor}`,
                        color: `${attributesGroupTextColor}`,
                        borderRight: "1px solid",
                        borderBottom: "1px solid",
                        borderTop: "1px solid",
                        borderColor: "rgba(204, 204, 204, 1)"
                      },
                      children: "Price"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 167,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "td",
                    {
                      style: {
                        borderBottom: "1px solid",
                        borderColor: "rgba(204, 204, 204, 1)",
                        backgroundColor: `${backColor}`,
                        color: `${textColor}`
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { style: { textAlign: "center" }, children: "\u20B4,600.00 UAH" }, void 0, !1, {
                        fileName: "app/components/PreviewTable/PreviewTable.tsx",
                        lineNumber: 187,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 179,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/PreviewTable/PreviewTable.tsx",
                  lineNumber: 166,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "th",
                    {
                      style: {
                        backgroundColor: `${attributesGroupBackColor}`,
                        color: `${attributesGroupTextColor}`,
                        borderRight: "1px solid",
                        borderBottom: "1px solid",
                        borderColor: "rgba(204, 204, 204, 1)"
                      },
                      children: "Vendor"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 191,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "td",
                    {
                      style: {
                        borderBottom: "1px solid",
                        borderColor: "rgba(204, 204, 204, 1)",
                        backgroundColor: `${backColor}`,
                        color: `${textColor}`
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { style: { textAlign: "center" }, children: "Hydrogen Vendor" }, void 0, !1, {
                        fileName: "app/components/PreviewTable/PreviewTable.tsx",
                        lineNumber: 210,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 202,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/PreviewTable/PreviewTable.tsx",
                  lineNumber: 190,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "th",
                    {
                      style: {
                        backgroundColor: `${attributesGroupBackColor}`,
                        color: `${attributesGroupTextColor}`,
                        borderRight: "1px solid",
                        borderRadius: "0 0 0 10px",
                        borderColor: "rgba(204, 204, 204, 1)"
                      },
                      children: "Available"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 214,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                    "td",
                    {
                      style: {
                        backgroundColor: `${backColor}`,
                        color: `${textColor}`,
                        borderRadius: "0 0 10px 0"
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { style: { textAlign: "center" }, children: "true" }, void 0, !1, {
                        fileName: "app/components/PreviewTable/PreviewTable.tsx",
                        lineNumber: 232,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/PreviewTable/PreviewTable.tsx",
                      lineNumber: 225,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/PreviewTable/PreviewTable.tsx",
                  lineNumber: 213,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/PreviewTable/PreviewTable.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/PreviewTable/PreviewTable.tsx",
              lineNumber: 66,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/PreviewTable/PreviewTable.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/PreviewTable/PreviewTable.tsx",
    lineNumber: 24,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/PreviewTable/PreviewTable.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this);

// app/routes/app.comparison.table.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id, arrayMetafields = (await (await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: Metafields.Table
    }
  })).json()).data.appInstallation.metafields.edges, table;
  return arrayMetafields.length === 0 ? table = defaultStylesForTable : table = arrayToObjectMetafield(arrayMetafields), (0, import_node5.json)({
    table
  });
}, action3 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), formData = await request.formData(), objectFD = Object.fromEntries(formData), dataFormData = await JSON.parse(String(objectFD.data)), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id;
  return await admin.graphql(
    SET_METAFIELDS,
    {
      variables: {
        metafields: [
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.BackColor,
            value: String(dataFormData.table.backColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.TextColor,
            value: String(dataFormData.table.textColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.AttributesBackColor,
            value: String(dataFormData.table.attributesBackColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.AttributesTextColor,
            value: String(dataFormData.table.attributesTextColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.AttributesGroupTextColor,
            value: String(dataFormData.table.attributesGroupTextColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.AttributesGroupBackColor,
            value: String(dataFormData.table.attributesGroupBackColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.TopbarBackColor,
            value: String(dataFormData.table.topbarBackColor),
            ownerId: id
          },
          {
            namespace: Metafields.Table,
            type: MetafieldsType.Color,
            key: MetafieldsTableKeys.TopbarTextColor,
            value: String(dataFormData.table.topbarTextColor),
            ownerId: id
          }
        ]
      }
    }
  ), null;
};
function ComparisonTableSettings() {
  let { table } = (0, import_react9.useLoaderData)(), submit = (0, import_react9.useSubmit)(), [backColor, setBackColor] = (0, import_react8.useState)(table.backColor), [textColor, setTextColor] = (0, import_react8.useState)(table.textColor), [attributesBackColor, setAttributesBackColor] = (0, import_react8.useState)(table.attributesBackColor), [attributesTextColor, setAttributesTextColor] = (0, import_react8.useState)(table.attributesTextColor), [attributesGroupTextColor, setAttributesGroupTextColor] = (0, import_react8.useState)(table.attributesGroupTextColor), [attributesGroupBackColor, setAttributesGroupBackColor] = (0, import_react8.useState)(table.attributesGroupBackColor), [topbarBackColor, setTopbarBackColor] = (0, import_react8.useState)(table.topbarBackColor), [topbarTextColor, setTopbarTextColor] = (0, import_react8.useState)(table.topbarTextColor), [actualData, setActualData] = (0, import_react8.useState)(!0), [loadedData, setLoadedData] = (0, import_react8.useState)(!1), handleBackColorOnChange = (color) => {
    setBackColor(color);
  }, handleTextColorOnChange = (color) => {
    setTextColor(color);
  }, handleAttributesGroupBackColorOnChange = (color) => {
    setAttributesGroupBackColor(color);
  }, handleAttributesGroupTextColorOnChange = (color) => {
    setAttributesGroupTextColor(color);
  }, handleAttributesTextColorOnChange = (color) => {
    setAttributesTextColor(color);
  }, handleAttributesBackColorOnChange = (color) => {
    setAttributesBackColor(color);
  }, handleTopbarBackColor = (color) => {
    setTopbarBackColor(color);
  }, handleTopbarTextColor = (color) => {
    setTopbarTextColor(color);
  }, handleDiscardActionOnClick = () => {
    setBackColor(table.backColor), setTextColor(table.textColor), setAttributesBackColor(table.attributesBackColor), setAttributesTextColor(table.attributesTextColor), setAttributesGroupTextColor(table.attributesGroupTextColor), setAttributesGroupBackColor(table.attributesGroupBackColor), setTopbarBackColor(table.topbarBackColor), setTopbarTextColor(table.topbarTextColor);
  }, currentDataInClientObject = (0, import_react8.useMemo)(() => ({
    backColor,
    textColor,
    attributesBackColor,
    attributesTextColor,
    attributesGroupTextColor,
    attributesGroupBackColor,
    topbarBackColor,
    topbarTextColor
  }), [backColor, textColor, attributesBackColor, attributesTextColor, attributesGroupTextColor, attributesGroupBackColor, topbarBackColor, topbarTextColor]);
  return (0, import_react8.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, table)), setLoadedData(!1);
  }, [table, currentDataInClientObject]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.InlineStack, { gap: "200", wrap: !1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris5.Box,
      {
        background: "bg-fill",
        width: "400px",
        borderColor: "border",
        minHeight: "100vh",
        borderWidth: "050",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.BlockStack, { gap: "200", children: [
          !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_polaris5.ContextualSaveBar,
            {
              alignContentFlush: !0,
              message: "Unsaved changes",
              saveAction: {
                onAction: () => {
                  let data = JSON.stringify({ table: {
                    backColor,
                    textColor,
                    attributesBackColor,
                    attributesTextColor,
                    attributesGroupTextColor,
                    attributesGroupBackColor,
                    topbarBackColor,
                    topbarTextColor
                  } });
                  submit({ data }, { method: "POST" }), setLoadedData(!0);
                },
                loading: loadedData
              },
              discardAction: {
                onAction: handleDiscardActionOnClick
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 263,
              columnNumber: 37
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.comparison.table.tsx",
            lineNumber: 262,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Text, { as: "p", variant: "headingMd", children: "Table Style" }, void 0, !1, {
            fileName: "app/routes/app.comparison.table.tsx",
            lineNumber: 277,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.table.tsx",
            lineNumber: 278,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: backColor,
              onChange: handleBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 280,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              onChange: handleTextColorOnChange,
              initialColor: textColor
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 284,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Attributes Background Color",
              initialColor: attributesBackColor,
              onChange: handleAttributesBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 288,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Attributes Text Color",
              initialColor: attributesTextColor,
              onChange: handleAttributesTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 292,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Attributes Group Background Color",
              initialColor: attributesGroupBackColor,
              onChange: handleAttributesGroupBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 296,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Attributes Group Text Color",
              initialColor: attributesGroupTextColor,
              onChange: handleAttributesGroupTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 300,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.table.tsx",
            lineNumber: 304,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Text, { as: "p", variant: "headingSm", children: "Topbar Action Style" }, void 0, !1, {
            fileName: "app/routes/app.comparison.table.tsx",
            lineNumber: 306,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: topbarBackColor,
              onChange: handleTopbarBackColor
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 308,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ColorSetting,
            {
              title: "Text Color",
              initialColor: topbarTextColor,
              onChange: handleTopbarTextColor
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.table.tsx",
              lineNumber: 312,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.comparison.table.tsx",
          lineNumber: 259,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.comparison.table.tsx",
          lineNumber: 258,
          columnNumber: 25
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 252,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      PreviewTable,
      {
        backColor,
        textColor,
        attributesGroupBackColor,
        attributesGroupTextColor,
        attributesBackColor,
        attributesTextColor,
        topbarBackColor,
        topbarTextColor
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.table.tsx",
        lineNumber: 328,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 320,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.comparison.table.tsx",
      lineNumber: 319,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.comparison.table.tsx",
    lineNumber: 251,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.comparison.table.tsx",
    lineNumber: 250,
    columnNumber: 9
  }, this);
}

// app/routes/app.comparison.grid.tsx
var app_comparison_grid_exports = {};
__export(app_comparison_grid_exports, {
  action: () => action4,
  default: () => ProductGridPage,
  loader: () => loader4
});
var import_polaris6 = require("@shopify/polaris");
var import_polaris_icons = require("@shopify/polaris-icons"), import_react10 = require("react");
var import_node6 = require("@remix-run/node");
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id, arrayMetafields = (await (await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: Metafields.ProductsGridButton
    }
  })).json()).data.appInstallation.metafields.edges, productsGridButton;
  return arrayMetafields.length === 0 ? productsGridButton = defaultStylesForProductsGridButton : productsGridButton = arrayToObjectMetafield(arrayMetafields), (0, import_node6.json)({
    productsGridButton
  });
}, action4 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), formData = await request.formData(), objectFD = Object.fromEntries(formData), dataFormData = await JSON.parse(String(objectFD.data)), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id;
  return await admin.graphql(
    SET_METAFIELDS,
    {
      variables: {
        metafields: [
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsProductsGridButtonKeys.ShowCompareButton,
            value: String(dataFormData.productsGridButton.showCompareButton),
            ownerId: id
          },
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsProductsGridButtonKeys.ShowIcon,
            value: String(dataFormData.productsGridButton.showIcon),
            ownerId: id
          },
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsProductsGridButtonKeys.ShowLabel,
            value: String(dataFormData.productsGridButton.showLabel),
            ownerId: id
          },
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductsGridButtonKeys.BackgroundColor,
            value: String(dataFormData.productsGridButton.backgroundColor),
            ownerId: id
          },
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductsGridButtonKeys.BorderColor,
            value: String(dataFormData.productsGridButton.borderColor),
            ownerId: id
          },
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductsGridButtonKeys.AddCompareButtonTextColor,
            value: String(dataFormData.productsGridButton.addCompareButtonTextColor),
            ownerId: id
          },
          {
            namespace: Metafields.ProductsGridButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductsGridButtonKeys.RemoveCompareButtonTextColor,
            value: String(dataFormData.productsGridButton.removeCompareButtonTextColor),
            ownerId: id
          }
        ]
      }
    }
  ), null;
};
function ProductGridPage() {
  let submit = (0, import_react11.useSubmit)(), { productsGridButton } = (0, import_react11.useLoaderData)(), [showCompareButton, setShowCompareButton] = (0, import_react10.useState)(productsGridButton.showCompareButton === "true"), [showIcon, setShowIcon] = (0, import_react10.useState)(productsGridButton.showIcon === "true"), [showLabel, setShowLabel] = (0, import_react10.useState)(productsGridButton.showLabel === "true"), [backgroundColor, setBackgroundColor] = (0, import_react10.useState)(productsGridButton.backgroundColor), [borderColor, setBorderColor] = (0, import_react10.useState)(productsGridButton.borderColor), [addCompareButtonTextColor, setAddCompareButtonTextColor] = (0, import_react10.useState)(productsGridButton.addCompareButtonTextColor), [removeCompareButtonTextColor, setRemoveCompareButtonTextColor] = (0, import_react10.useState)(productsGridButton.removeCompareButtonTextColor), [actualData, setActualData] = (0, import_react10.useState)(!0), [loadedData, setLoadedData] = (0, import_react10.useState)(!1), handleShowCompareButtonOnChange = () => {
    setShowCompareButton(!showCompareButton);
  }, handleShowLabelOnChange = () => {
    setShowLabel(!showLabel);
  }, handleShowIconOnChange = () => {
    setShowIcon(!showIcon);
  }, handleBackgroundColorOnChange = (color) => {
    setBackgroundColor(color);
  }, handleBorderColorOnChange = (color) => {
    setBorderColor(color);
  }, handleAddCompareButtonTextColorOnChange = (color) => {
    setAddCompareButtonTextColor(color);
  }, handleRemoveCompareButtonTextColorOnChange = (color) => {
    setRemoveCompareButtonTextColor(color);
  }, currentDataInClientObject = (0, import_react10.useMemo)(() => ({
    showCompareButton: String(showCompareButton),
    showIcon: String(showIcon),
    showLabel: String(showLabel),
    backgroundColor,
    borderColor,
    addCompareButtonTextColor,
    removeCompareButtonTextColor
  }), [showCompareButton, showIcon, showLabel, backgroundColor, borderColor, addCompareButtonTextColor, removeCompareButtonTextColor]), handleSaveOnClick = () => {
    let data = JSON.stringify({
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
    submit({ data }, { method: "POST" }), setLoadedData(!0);
  }, handleDiscardActionOnClick = () => {
    setShowCompareButton(productsGridButton.showCompareButton === "true"), setShowIcon(productsGridButton.showIcon === "true"), setShowLabel(productsGridButton.showLabel === "true"), setBackgroundColor(productsGridButton.backgroundColor), setBorderColor(productsGridButton.borderColor), setAddCompareButtonTextColor(productsGridButton.addCompareButtonTextColor), setRemoveCompareButtonTextColor(productsGridButton.removeCompareButtonTextColor);
  };
  return (0, import_react10.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, productsGridButton)), setLoadedData(!1);
  }, [productsGridButton, currentDataInClientObject]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.InlineStack, { gap: "200", wrap: !1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_polaris6.Box,
      {
        background: "bg-fill",
        width: "400px",
        borderColor: "border",
        minHeight: "100vh",
        borderWidth: "050",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.BlockStack, { gap: "300", children: [
          !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_polaris6.ContextualSaveBar,
            {
              alignContentFlush: !0,
              message: "Unsaved changes",
              saveAction: {
                onAction: handleSaveOnClick,
                loading: loadedData
              },
              discardAction: {
                onAction: handleDiscardActionOnClick
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.grid.tsx",
              lineNumber: 255,
              columnNumber: 37
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 254,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Text, { as: "h4", variant: "headingMd", children: "Product Grid Page" }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 269,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 271,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_polaris6.ExceptionList,
            {
              items: [
                {
                  icon: import_polaris_icons.NoteMinor,
                  description: "If our app does not work with your theme after turn on widget. Please chat with us to be integrated with your theme quickly."
                }
              ]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.grid.tsx",
              lineNumber: 273,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BooleanSetting, { title: "Show Add To Compare button", valueOnChange: handleShowCompareButtonOnChange, value: showCompareButton }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 283,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BooleanSetting, { title: "Show Icon", value: showIcon, valueOnChange: handleShowIconOnChange }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 285,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BooleanSetting, { title: "Show Label", value: showLabel, valueOnChange: handleShowLabelOnChange }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 287,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 289,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Text, { as: "h4", variant: "headingSm", children: "Style" }, void 0, !1, {
            fileName: "app/routes/app.comparison.grid.tsx",
            lineNumber: 291,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: backgroundColor,
              onChange: handleBackgroundColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.grid.tsx",
              lineNumber: 293,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            ColorSetting,
            {
              title: "Border Color",
              initialColor: borderColor,
              onChange: handleBorderColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.grid.tsx",
              lineNumber: 298,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            ColorSetting,
            {
              title: "Add To Compare Text Color",
              initialColor: addCompareButtonTextColor,
              onChange: handleAddCompareButtonTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.grid.tsx",
              lineNumber: 303,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            ColorSetting,
            {
              title: "Remove From Compare Text Color",
              initialColor: removeCompareButtonTextColor,
              onChange: handleRemoveCompareButtonTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.grid.tsx",
              lineNumber: 308,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.comparison.grid.tsx",
          lineNumber: 251,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.comparison.grid.tsx",
          lineNumber: 250,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.grid.tsx",
        lineNumber: 244,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Box, { children: "Iframe Our Button" }, void 0, !1, {
      fileName: "app/routes/app.comparison.grid.tsx",
      lineNumber: 315,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.comparison.grid.tsx",
    lineNumber: 243,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.comparison.grid.tsx",
    lineNumber: 242,
    columnNumber: 9
  }, this);
}

// app/routes/app.comparison.atc.tsx
var app_comparison_atc_exports = {};
__export(app_comparison_atc_exports, {
  action: () => action5,
  default: () => ProductDetailSettings,
  loader: () => loader5
});
var import_polaris7 = require("@shopify/polaris"), import_react12 = require("react");
var import_node7 = require("@remix-run/node");
var import_react13 = require("@remix-run/react");

// app/components/PlusIcon.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), PlusIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 32 32", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("title", { children: "plus" }, void 0, !1, {
    fileName: "app/components/PlusIcon.tsx",
    lineNumber: 7,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { d: "M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" }, void 0, !1, {
    fileName: "app/components/PlusIcon.tsx",
    lineNumber: 8,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PlusIcon.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/PlusIcon.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// app/components/MinusIcon.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), MinusIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 32 32", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("title", { children: "minus" }, void 0, !1, {
    fileName: "app/components/MinusIcon.tsx",
    lineNumber: 5,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { d: "M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z" }, void 0, !1, {
    fileName: "app/components/MinusIcon.tsx",
    lineNumber: 6,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/MinusIcon.tsx",
  lineNumber: 4,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/MinusIcon.tsx",
  lineNumber: 3,
  columnNumber: 9
}, this);

// app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), PreviewProductDetailPageButton = ({ showLabel, showIcon, addToCompareTextColor, backColor, borderColor, removeFromCompareTextColor }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: {
  display: "flex",
  gap: "10px",
  flexDirection: "column"
}, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: {
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
    showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PlusIcon, {}, void 0, !1, {
      fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
      lineNumber: 36,
      columnNumber: 25
    }, this),
    showLabel && "Add to compare"
  ] }, void 0, !0, {
    fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
    lineNumber: 21,
    columnNumber: 17
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: {
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
    showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MinusIcon, {}, void 0, !1, {
      fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
      lineNumber: 58,
      columnNumber: 25
    }, this),
    showLabel && "Remove from compare"
  ] }, void 0, !0, {
    fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
    lineNumber: 43,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
  lineNumber: 16,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/PreviewProductDetailPageButton/PreviewProductDetailPageButton.tsx",
  lineNumber: 15,
  columnNumber: 9
}, this);

// app/routes/app.comparison.atc.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id, arrayMetafields = (await (await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: Metafields.ProductButton
    }
  })).json()).data.appInstallation.metafields.edges, productButton;
  return arrayMetafields.length === 0 ? productButton = defaultStylesForProductDetailPageButton : productButton = arrayToObjectMetafield(arrayMetafields), (0, import_node7.json)({
    productButton
  });
}, action5 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), formData = await request.formData(), objectFD = Object.fromEntries(formData), dataFormData = await JSON.parse(String(objectFD.data)), id = (await (await admin.graphql(GET_CURRENT_APP_ID)).json()).data.currentAppInstallation.id;
  return await admin.graphql(
    SET_METAFIELDS,
    {
      variables: {
        metafields: [
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsProductButtonKeys.Show,
            value: String(dataFormData.productButton.show),
            ownerId: id
          },
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsProductButtonKeys.ShowLabel,
            value: String(dataFormData.productButton.showLabel),
            ownerId: id
          },
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Boolean,
            key: MetafieldsProductButtonKeys.ShowIcon,
            value: String(dataFormData.productButton.showIcon),
            ownerId: id
          },
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductButtonKeys.BackColor,
            value: String(dataFormData.productButton.backColor),
            ownerId: id
          },
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductButtonKeys.BorderColor,
            value: String(dataFormData.productButton.borderColor),
            ownerId: id
          },
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductButtonKeys.AddToCompareTextColor,
            value: String(dataFormData.productButton.addToCompareTextColor),
            ownerId: id
          },
          {
            namespace: Metafields.ProductButton,
            type: MetafieldsType.Color,
            key: MetafieldsProductButtonKeys.RemoveFromCompareTextColor,
            value: String(dataFormData.productButton.removeFromCompareTextColor),
            ownerId: id
          }
        ]
      }
    }
  ), null;
};
function ProductDetailSettings() {
  let submit = (0, import_react13.useSubmit)(), { productButton } = (0, import_react13.useLoaderData)(), [showCompareButton, setShowCompareButton] = (0, import_react12.useState)(productButton?.show === "true"), [showIcon, setShowIcon] = (0, import_react12.useState)(productButton?.showIcon === "true"), [showLabel, setShowLabel] = (0, import_react12.useState)(productButton?.showLabel === "true"), [backColor, setBackColor] = (0, import_react12.useState)(productButton?.backColor), [borderColor, setBorderColor] = (0, import_react12.useState)(productButton?.borderColor), [addToCompareTextColor, setAddToCompareTextColor] = (0, import_react12.useState)(productButton?.addToCompareTextColor), [removeFromCompareTextColor, setRemoveFromCompareTextColor] = (0, import_react12.useState)(productButton?.removeFromCompareTextColor), [actualData, setActualData] = (0, import_react12.useState)(!0), [loadedData, setLoadedData] = (0, import_react12.useState)(!1), handleShowCompareButtonOnChange = () => {
    setShowCompareButton(!showCompareButton);
  }, handleShowIconOnChange = () => {
    setShowIcon(!showIcon);
  }, handleShowLabelOnChange = () => {
    setShowLabel(!showLabel);
  }, handleBackColorOnChange = (color) => {
    setBackColor(color);
  }, handleAddToCompareTextColorOnChange = (color) => {
    setAddToCompareTextColor(color);
  }, handleBorderColorOnChange = (color) => {
    setBorderColor(color);
  }, handleRemoveFromCompareTextColorOnChange = (color) => {
    setRemoveFromCompareTextColor(color);
  }, handleSaveOnClick = () => {
    let data = JSON.stringify(
      {
        productButton: {
          show: showCompareButton,
          showIcon,
          showLabel,
          backColor,
          borderColor,
          addToCompareTextColor,
          removeFromCompareTextColor
        }
      }
    );
    submit({ data }, { method: "POST" }), setLoadedData(!0);
  }, currentDataInClientObject = (0, import_react12.useMemo)(() => ({
    show: String(showCompareButton),
    showIcon: String(showIcon),
    showLabel: String(showLabel),
    backColor,
    borderColor,
    addToCompareTextColor,
    removeFromCompareTextColor
  }), [showCompareButton, showIcon, showLabel, backColor, borderColor, addToCompareTextColor, removeFromCompareTextColor]);
  return (0, import_react12.useEffect)(() => {
    setActualData(deepEqualObject(currentDataInClientObject, productButton)), setLoadedData(!1);
  }, [productButton, currentDataInClientObject]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.InlineStack, { gap: "200", wrap: !1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_polaris7.Box,
      {
        background: "bg-fill",
        width: "400px",
        borderColor: "border",
        minHeight: "100vh",
        borderWidth: "050",
        minWidth: "400px",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Page, { fullWidth: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.BlockStack, { gap: "300", children: [
          !actualData && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_polaris7.ContextualSaveBar,
            {
              alignContentFlush: !0,
              message: "Unsaved changes",
              saveAction: {
                onAction: handleSaveOnClick,
                loading: loadedData
              },
              discardAction: {
                onAction: () => {
                  setShowCompareButton(productButton?.show === "true"), setShowIcon(productButton?.showIcon === "true"), setShowLabel(productButton?.showLabel === "true"), setBackColor(productButton?.backColor), setBorderColor(productButton?.borderColor), setAddToCompareTextColor(productButton?.addToCompareTextColor), setRemoveFromCompareTextColor(productButton?.removeFromCompareTextColor);
                }
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 257,
              columnNumber: 37
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/app.comparison.atc.tsx",
            lineNumber: 256,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Text, { as: "h4", variant: "headingMd", children: "Product Detail Page" }, void 0, !1, {
            fileName: "app/routes/app.comparison.atc.tsx",
            lineNumber: 271,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.atc.tsx",
            lineNumber: 273,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            BooleanSetting,
            {
              title: "Show Add To Compare button",
              value: showCompareButton,
              valueOnChange: handleShowCompareButtonOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 275,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            BooleanSetting,
            {
              title: "Show Icon",
              value: showIcon,
              valueOnChange: handleShowIconOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 280,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            BooleanSetting,
            {
              title: "Show Label",
              value: showLabel,
              valueOnChange: handleShowLabelOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 285,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Divider, { borderColor: "border" }, void 0, !1, {
            fileName: "app/routes/app.comparison.atc.tsx",
            lineNumber: 290,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Text, { as: "p", variant: "headingSm", children: "Style" }, void 0, !1, {
            fileName: "app/routes/app.comparison.atc.tsx",
            lineNumber: 292,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            ColorSetting,
            {
              title: "Background Color",
              initialColor: backColor,
              onChange: handleBackColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 294,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            ColorSetting,
            {
              title: "Border Color",
              initialColor: borderColor,
              onChange: handleBorderColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 299,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            ColorSetting,
            {
              title: "Add To Compare Text Color",
              initialColor: addToCompareTextColor,
              onChange: handleAddToCompareTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 304,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            ColorSetting,
            {
              title: "Remove From Compare Text Color",
              initialColor: removeFromCompareTextColor,
              onChange: handleRemoveFromCompareTextColorOnChange
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.comparison.atc.tsx",
              lineNumber: 309,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.comparison.atc.tsx",
          lineNumber: 253,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.comparison.atc.tsx",
          lineNumber: 252,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 245,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_polaris7.Box, { background: "bg-fill-tertiary-active", minHeight: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: {
      width: "1000px",
      height: "100%",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      PreviewProductDetailPageButton,
      {
        showLabel,
        showIcon,
        backColor,
        borderColor,
        addToCompareTextColor,
        removeFromCompareTextColor
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.comparison.atc.tsx",
        lineNumber: 325,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 317,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.comparison.atc.tsx",
      lineNumber: 316,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.comparison.atc.tsx",
    lineNumber: 244,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.comparison.atc.tsx",
    lineNumber: 243,
    columnNumber: 9
  }, this);
}

// app/routes/app.comparison.tsx
var app_comparison_exports = {};
__export(app_comparison_exports, {
  default: () => ComparisonPage
});
var import_polaris9 = require("@shopify/polaris"), import_react14 = require("@remix-run/react");
var import_react15 = require("react");

// app/constants/buttons.ts
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
var import_polaris8 = require("@shopify/polaris"), import_polaris_icons2 = require("@shopify/polaris-icons"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), switchIcon = {
  detailPage: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Icon, { source: import_polaris_icons2.DetailedPopUpMajor }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 8,
    columnNumber: 24
  }, this),
  gridPage: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Icon, { source: import_polaris_icons2.TextBlockMajor }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 9,
    columnNumber: 22
  }, this),
  fixedButton: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Icon, { source: import_polaris_icons2.ButtonMinor }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 10,
    columnNumber: 25
  }, this),
  toolbar: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Icon, { source: import_polaris_icons2.ToolsMajor }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 11,
    columnNumber: 21
  }, this),
  table: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Icon, { source: import_polaris_icons2.AnalyticsTableMinor }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 12,
    columnNumber: 18
  }, this)
}, CustomNavListItem = ({ isActive, title, icon }) => {
  let SelectedComponent = switchIcon[icon] || (() => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "\u041D\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430" }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 16,
    columnNumber: 58
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: {
    margin: 2,
    width: 50,
    height: 50,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isActive ? "rgba(200, 200, 200, 0.4)" : "none"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: { padding: "75px 0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Tooltip, { content: title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_polaris8.Text, { fontWeight: "bold", as: "span", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SelectedComponent, {}, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 32,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 31,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 30,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/CustomNavListItem.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
};

// app/routes/app.comparison.tsx
var import_app_bridge_react = require("@shopify/app-bridge-react"), import_actions = require("@shopify/app-bridge/actions"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ComparisonPage() {
  let navigate = (0, import_react14.useNavigate)(), app = (0, import_app_bridge_react.useAppBridge)(), fullscreen = import_actions.Fullscreen.create(app);
  return (0, import_react15.useEffect)(() => (fullscreen.dispatch(import_actions.Fullscreen.Action.ENTER), navigate("/app/comparison/atc" /* ADD_TO_COMPARE */), () => {
    fullscreen.dispatch(import_actions.Fullscreen.Action.EXIT);
  }), []), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris9.FullscreenBar, { onAction: () => {
      navigate("/app" /* ROOT */);
    } }, void 0, !1, {
      fileName: "app/routes/app.comparison.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { style: { display: "flex", flexDirection: "row" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris9.Box, { background: "bg-fill", minHeight: "100%", width: "70px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris9.BlockStack, { align: "center", inlineAlign: "center", gap: "200", children: SettingsLinkList.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react14.NavLink, { style: { textDecoration: "none", color: "#000" }, to: item.path, children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(CustomNavListItem, { icon: item.icon, isActive, title: item.title }, Date.now() + index, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 41,
        columnNumber: 39
      }, this) }, Date.now() + index, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 39,
        columnNumber: 31
      }, this)) }, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 37,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 36,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris9.InlineStack, { wrap: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_polaris9.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 51,
        columnNumber: 27
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 50,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 49,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.comparison.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.comparison.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.comparison.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this);
}

// app/routes/app._index.tsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action6,
  default: () => Index,
  loader: () => loader6
});
var import_react26 = require("react"), import_node8 = require("@remix-run/node"), import_polaris15 = require("@shopify/polaris");
var import_react27 = require("@remix-run/react");

// app/hooks/useToggle.tsx
var import_react16 = require("react"), useToggle = (defaultValue) => {
  let [value, setValue] = (0, import_react16.useState)(!!defaultValue), toggle = (0, import_react16.useCallback)(() => setValue((x) => !x), []);
  return [value, toggle, setValue];
};

// app/routes/app._index.tsx
var import_react_hook_form = require("react-hook-form");

// app/constants/validation.ts
var FeatureNameInput = {
  required: {
    value: !0,
    message: "Feature name is required"
  }
}, DescriptionInput = {
  required: {
    value: !0,
    message: "Description is required"
  }
};

// app/routes/app._index.tsx
var import_app_bridge = require("@shopify/app-bridge"), import_actions2 = require("@shopify/app-bridge/actions");

// app/helpers/initialItems.ts
var INITIAL_ITEMS = [
  {
    id: "item-1",
    content: "Variant Title",
    description: "Product Variants Name",
    active: !0,
    value: "variantsTitle"
  },
  {
    id: "item-2",
    content: "Price",
    description: "Product Price",
    active: !0,
    value: "price"
  },
  {
    id: "item-9",
    content: "Compared At Price",
    description: "Product Compared At Price",
    active: !1,
    value: "comparedAtPrice"
  },
  {
    id: "item-3",
    content: "SKU",
    description: "Variant SKU",
    active: !1,
    value: "sku"
  },
  {
    id: "item-4",
    content: "Barcode",
    description: "Variant Barcode",
    active: !1,
    value: "barcode"
  },
  {
    id: "item-5",
    content: "Type",
    description: "Product Type",
    active: !1,
    value: "type"
  },
  {
    id: "item-6",
    content: "Vendor",
    description: "Product Vendor",
    active: !0,
    value: "vendor"
  },
  {
    id: "item-7",
    content: "Available",
    description: "Product In Stock or Not",
    active: !0,
    value: "available"
  },
  {
    id: "item-8",
    content: "Description",
    description: "Product Description",
    active: !1,
    value: "description"
  },
  {
    id: "item-10",
    content: "Tags",
    description: "Product Tags",
    active: !1,
    value: "tags"
  }
], JSON_INITIAL_ITEMS = JSON.stringify(INITIAL_ITEMS);

// app/helpers/linkBuilder.ts
var redirectEditorLink = (shopName, themeId) => `https://admin.shopify.com/store/${shopName}/themes/current/editor?context=apps&template=product&activateAppId=${themeId}/product_compare`;

// app/helpers/getCompareMeta.ts
var getCompareMeta = async (admin, id) => {
  let metafields = await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: "product_meta"
    }
  }), defaultMetafields = await admin.graphql(GET_APP_METAFIELDS, {
    variables: {
      ownerId: id,
      namespace: "default_product_meta"
    }
  }), metafieldsJSON = await metafields.json(), defaultMetafieldsJSON = await defaultMetafields.json();
  return {
    meta: metafieldsJSON.data.appInstallation.metafields.edges,
    defaultMeta: defaultMetafieldsJSON.data.appInstallation.metafields.edges
  };
};

// app/helpers/addProductMeta.ts
var addProductMeta = async (request, data) => {
  let { admin } = await authenticate.admin(request), id = data.get("id"), namespace = data.get("namespace"), key = data.get("key"), value = data.get("value"), type = data.get("type");
  return await admin.graphql(SET_METAFIELDS, {
    variables: {
      metafields: [
        {
          namespace,
          key,
          type,
          value,
          ownerId: id
        }
      ]
    }
  });
};

// app/helpers/addAndDelMetafield.ts
var addAndDelMetafield = async (admin, formData, request) => {
  formData.get("action") === "del" ? await admin.graphql(DEL_METAFIELD, {
    variables: {
      input: {
        id: formData.get("metaId")
      }
    }
  }) : await addProductMeta(request, formData);
};

// app/components/DraggableItem/DraggableItems.tsx
var import_react24 = require("react"), import_react_beautiful_dnd = require("react-beautiful-dnd"), import_polaris14 = require("@shopify/polaris");

// app/components/DraggableItem/DraggableItem.styled.tsx
var import_styled = __toESM(require("@emotion/styled")), DragList = import_styled.default.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`, DragItem = import_styled.default.li`
  border-radius: 4px;
  :hover {
    background-color: #f5f5f5;
  }
`, DragBox = import_styled.default.div`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
`, DragCheckboxContainer = import_styled.default.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

// app/components/MetafieldModal/MetafieldModal.tsx
var import_polaris12 = require("@shopify/polaris"), import_react22 = require("react");

// app/components/MetafieldModalForm/MetafieldModalForm.tsx
var import_polaris11 = require("@shopify/polaris"), import_react21 = require("react");

// app/hooks/useCreateMeta.tsx
var import_react17 = require("@remix-run/react"), import_react18 = require("react"), useCreateMeta = (id, meta) => {
  let submit = (0, import_react17.useSubmit)(), [isPickerOpen, setIsPickerOpen] = (0, import_react18.useState)(!1), [pickerPayload, setPickerPayload] = (0, import_react18.useState)([]), [key, setKey] = (0, import_react18.useState)(""), [value, setValue] = (0, import_react18.useState)(""), [loadingMeta, setLoadingMeta] = (0, import_react18.useState)(!1), pattern = "^[a-zA-Z]+(_[a-zA-Z]+)*$";
  (0, import_react18.useEffect)(() => {
    setLoadingMeta(!1);
  }, [meta]);
  let handleSubmit = (0, import_react18.useCallback)(() => {
    if (pickerPayload.length && key && value) {
      setLoadingMeta(!0);
      let metaData = meta.find((item) => item.node.key === key), parsedValue = [];
      metaData && (parsedValue = JSON.parse(metaData.node.value));
      let updatedValue = parsedValue.map((item) => item.productId === pickerPayload[0].id ? { productId: item.productId, value } : item);
      JSON.stringify(updatedValue) === JSON.stringify(parsedValue) && updatedValue.push({ productId: pickerPayload[0].id, value }), submit(
        {
          key,
          value: JSON.stringify([...updatedValue]),
          id,
          namespace: "product_meta",
          type: "json"
        },
        { replace: !0, method: "POST" }
      ), setKey(""), setValue(""), setPickerPayload([]);
    }
  }, [key, value, pickerPayload]), handlePicker = (0, import_react18.useCallback)((selectPayload) => {
    setIsPickerOpen(!1), setPickerPayload(selectPayload.selection);
  }, []), handleKeyChange = (0, import_react18.useCallback)((value2) => {
    setKey(value2);
  }, []), handleValueChange = (0, import_react18.useCallback)((value2) => {
    setValue(value2);
  }, []);
  return {
    key,
    value,
    isPickerOpen,
    pickerPayload,
    loadingMeta,
    pattern,
    setIsPickerOpen,
    handleSubmit,
    handlePicker,
    handleKeyChange,
    handleValueChange
  };
};

// app/components/MetafieldModalForm/MetafieldModalForm.styled.tsx
var import_styled2 = __toESM(require("@emotion/styled")), CheckboxList = import_styled2.default.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 150px;
`, CheckboxContainer = import_styled2.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, CheckboxDelBtn = import_styled2.default.button`
  border: none;
  background-color: inherit;
  padding: 0;
  cursor: pointer;
`;

// app/components/MetafieldModalForm/MetafieldModalForm.tsx
var import_app_bridge_react2 = require("@shopify/app-bridge-react");

// app/components/MetafieldModalForm/MetafieldModalCheckbox.tsx
var import_react19 = require("react");
var import_polaris10 = require("@shopify/polaris"), import_react20 = require("@remix-run/react"), import_polaris_icons3 = require("@shopify/polaris-icons"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), MetafieldModalCheckbox = ({
  idx,
  item,
  checkedItems,
  setCheckedItems,
  id
}) => {
  let submit = (0, import_react20.useSubmit)(), [loading, setLoading] = (0, import_react19.useState)(!1), [btnId, setBtnId] = (0, import_react19.useState)("");
  (0, import_react19.useEffect)(() => {
    setLoading(!1);
  }, [item]);
  let handleChange = (0, import_react19.useCallback)(
    (itemId) => {
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [itemId]: !prevCheckedItems[itemId]
      }));
    },
    [checkedItems]
  ), handleDelBtn = (0, import_react19.useCallback)((e) => {
    setLoading(!0), setBtnId(e.currentTarget.id), submit(
      { action: "del", id, metaId: e.currentTarget.id },
      { replace: !0, method: "POST" }
    );
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CheckboxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_polaris10.Checkbox,
      {
        label: item.node.key,
        checked: checkedItems[item.node.key],
        onChange: () => handleChange(item.node.key)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MetafieldModalForm/MetafieldModalCheckbox.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CheckboxDelBtn, { id: item.node.id, type: "button", onClick: handleDelBtn, children: loading && btnId === item.node.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris10.Spinner, { accessibilityLabel: "Spinner example", size: "small" }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalCheckbox.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_polaris10.Icon, { source: import_polaris_icons3.DeleteMajor, tone: "base" }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalCheckbox.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalCheckbox.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MetafieldModalForm/MetafieldModalCheckbox.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};

// app/components/MetafieldModalForm/MetafieldModalForm.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), MetaForm = ({
  id,
  meta,
  setCheckedItems,
  checkedItems
}) => {
  let {
    key,
    value,
    isPickerOpen,
    pickerPayload,
    loadingMeta,
    pattern,
    setIsPickerOpen,
    handlePicker,
    handleSubmit,
    handleKeyChange,
    handleValueChange
  } = useCreateMeta(id, meta), onPickerBtnClick = (0, import_react21.useCallback)(() => {
    setIsPickerOpen(!0);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_polaris11.Form, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_polaris11.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CheckboxList, { children: meta.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      MetafieldModalCheckbox,
      {
        id,
        idx,
        item,
        setCheckedItems,
        checkedItems
      },
      idx,
      !1,
      {
        fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
        lineNumber: 40,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_app_bridge_react2.ResourcePicker,
      {
        resourceType: "Product",
        open: isPickerOpen,
        onSelection: handlePicker,
        selectMultiple: !1,
        onCancel: () => {
          setIsPickerOpen(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
        lineNumber: 51,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_polaris11.Button, { fullWidth: !0, onClick: onPickerBtnClick, children: "Select a product" }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_polaris11.Text, { variant: "headingMd", as: "h3", children: pickerPayload.length ? pickerPayload[0].title : "" }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_polaris11.TextField,
      {
        pattern,
        value: key,
        onChange: handleKeyChange,
        label: "Key",
        type: "text",
        autoComplete: "text",
        requiredIndicator: !1,
        helpText: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: 'The key of the metafield to use in extension. Example text format "Example_text"' }, void 0, !1, {
          fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
        lineNumber: 66,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_polaris11.TextField,
      {
        value,
        onChange: handleValueChange,
        label: "Value",
        type: "text",
        autoComplete: "text",
        helpText: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "The value of the metafield to use in extension." }, void 0, !1, {
          fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
        lineNumber: 81,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_polaris11.Button, { submit: !0, loading: loadingMeta, children: "Save meta" }, void 0, !1, {
      fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/MetafieldModalForm/MetafieldModalForm.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};

// app/components/MetafieldModal/MetafieldModal.styled.tsx
var import_styled3 = __toESM(require("@emotion/styled")), ModalContainer = import_styled3.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

// app/components/MetafieldModal/MetafieldModal.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), MetafieldModal = ({ appId, meta, setItems }) => {
  let [active, setActive] = (0, import_react22.useState)(!1), [isAddBtnDisabled, setIsAddBtnDisabled] = (0, import_react22.useState)(!1), [newMetaItems, setNewMetaItems] = (0, import_react22.useState)([]), [checkedItems, setCheckedItems] = (0, import_react22.useState)(
    meta.reduce((acc, item) => (acc[item.node.key] = !1, acc), {})
  );
  (0, import_react22.useEffect)(() => {
    let newMetaItems2 = meta.reduce((acc, item) => {
      for (let key in checkedItems)
        if (Object.prototype.hasOwnProperty.call(checkedItems, key) && item.node.key === key && checkedItems[key]) {
          let newMetaObj = {
            id: item.node.id,
            content: item.node.key.split("_").filter((item2) => item2 !== "_").join(" "),
            description: "Product Metafield",
            key: item.node.key,
            active: !1
          };
          acc.push(newMetaObj);
        }
      return acc;
    }, []);
    newMetaItems2.length ? setIsAddBtnDisabled(!1) : setIsAddBtnDisabled(!0), setNewMetaItems(newMetaItems2);
  }, [checkedItems]);
  let handleChange = (0, import_react22.useCallback)(() => {
    setActive(!active);
  }, [active]), handleAddFieldAction = (0, import_react22.useCallback)(() => {
    setItems((prevState) => [
      ...prevState,
      ...newMetaItems.filter(
        (el) => !prevState.find((item) => item.id === el.id)
      )
    ]), setCheckedItems({}), setActive(!active);
  }, [active, newMetaItems]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ModalContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris12.Button, { onClick: handleChange, children: "Add Metafields" }, void 0, !1, {
      fileName: "app/components/MetafieldModal/MetafieldModal.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_polaris12.Modal,
      {
        open: active,
        onClose: handleChange,
        title: "New Metafield",
        primaryAction: {
          content: "Add Field",
          onAction: handleAddFieldAction,
          disabled: isAddBtnDisabled
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_polaris12.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          MetaForm,
          {
            id: appId,
            meta,
            setCheckedItems,
            checkedItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/MetafieldModal/MetafieldModal.tsx",
            lineNumber: 77,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/MetafieldModal/MetafieldModal.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MetafieldModal/MetafieldModal.tsx",
        lineNumber: 66,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MetafieldModal/MetafieldModal.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
};

// app/components/DraggableItem/DraggableItems.tsx
var import_react25 = require("@remix-run/react");

// app/components/DraggableItem/DraggableItem.tsx
var import_react23 = require("react");
var import_polaris13 = require("@shopify/polaris");
var import_polaris_icons4 = require("@shopify/polaris-icons"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), DraggableItem = ({ provided, items, setItems, item }) => {
  let isInitialRenderOne = (0, import_react23.useRef)(!0), [checkedItems, setCheckedItems] = (0, import_react23.useState)(
    items.reduce((acc, item2) => (acc[item2.id] = item2.active, acc), {})
  );
  (0, import_react23.useEffect)(() => {
    if (isInitialRenderOne.current) {
      isInitialRenderOne.current = !1;
      return;
    }
    setItems((prevState) => prevState.map((item2) => {
      for (let key in checkedItems)
        if (Object.prototype.hasOwnProperty.call(checkedItems, key)) {
          let element = checkedItems[key];
          if (item2.id === key)
            return { ...item2, active: element };
        }
    }));
  }, [checkedItems]);
  let handleChange = (0, import_react23.useCallback)(
    (itemId) => {
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [itemId]: !prevCheckedItems[itemId]
      }));
    },
    [checkedItems]
  ), handleDelBtn = (0, import_react23.useCallback)(
    (e) => {
      let filteredItems = items.filter(
        (item2) => item2.id !== e.currentTarget.id
      );
      setItems(filteredItems);
    },
    [items]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DragItem, { ref: provided.innerRef, ...provided.draggableProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DragBox, { checked: checkedItems[item.id], children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      DragCheckboxContainer,
      {
        onClick: (e) => {
          e.target.nodeName !== "INPUT" && handleChange(item.id);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            import_polaris13.Checkbox,
            {
              label: "",
              checked: checkedItems[item.id],
              onChange: () => handleChange(item.id)
            },
            void 0,
            !1,
            {
              fileName: "app/components/DraggableItem/DraggableItem.tsx",
              lineNumber: 73,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris13.Text, { variant: "bodyMd", fontWeight: "regular", as: "h3", children: item.content }, void 0, !1, {
              fileName: "app/components/DraggableItem/DraggableItem.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris13.Text, { variant: "bodyMd", fontWeight: "regular", as: "h3", children: item.description }, void 0, !1, {
              fileName: "app/components/DraggableItem/DraggableItem.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/DraggableItem/DraggableItem.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/DraggableItem/DraggableItem.tsx",
        lineNumber: 65,
        columnNumber: 9
      },
      this
    ),
    Boolean(item.key) && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(CheckboxDelBtn, { id: item.id, type: "button", onClick: handleDelBtn, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris13.Icon, { source: import_polaris_icons4.DeleteMajor, tone: "base" }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItem.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItem.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { ...provided.dragHandleProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_polaris13.Icon, { source: import_polaris_icons4.DragHandleMinor, tone: "base" }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItem.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItem.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DraggableItem/DraggableItem.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/DraggableItem/DraggableItem.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};

// app/components/DraggableItem/DraggableItems.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), DraggableItems = ({ appId, meta, defaultMeta }) => {
  let isInitialRenderTwo = (0, import_react24.useRef)(!0), submit = (0, import_react25.useSubmit)(), [loading, setLoading] = (0, import_react24.useState)(!1), [items, setItems] = (0, import_react24.useState)(() => JSON.parse(defaultMeta[0]?.node.value)), [itemsChange, setItemsChange] = (0, import_react24.useState)(!0);
  (0, import_react24.useEffect)(() => {
    setItemsChange(!1), setLoading(!1), setItems(JSON.parse(defaultMeta[0].node.value));
  }, [defaultMeta]), (0, import_react24.useEffect)(() => {
    if (isInitialRenderTwo.current) {
      isInitialRenderTwo.current = !1;
      return;
    }
    defaultMeta[0].node.value === JSON.stringify(items) ? setItemsChange(!1) : setItemsChange(!0);
  }, [items]);
  let handleDragEnd = (0, import_react24.useCallback)(
    (result) => {
      if (!result.destination)
        return;
      let updatedItems = Array.from(items), [removed] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, removed), setItems(updatedItems);
    },
    [items]
  ), handleSaveNewMeta = (0, import_react24.useCallback)(() => {
    setLoading(!0), submit(
      {
        key: "product_comparison",
        value: JSON.stringify(items),
        id: appId,
        namespace: "default_product_meta",
        type: "json"
      },
      { replace: !0, method: "POST" }
    );
  }, [loading, items]), handleDiscardMeta = (0, import_react24.useCallback)(() => {
    setItems(JSON.parse(defaultMeta[0].node.value)), setItemsChange(!1);
  }, [defaultMeta, itemsChange, items]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    itemsChange && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_polaris14.ContextualSaveBar,
      {
        alignContentFlush: !0,
        message: "Unsaved changes",
        saveAction: {
          onAction: handleSaveNewMeta,
          loading
        },
        discardAction: {
          onAction: handleDiscardMeta
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/DraggableItem/DraggableItems.tsx",
        lineNumber: 69,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react_beautiful_dnd.DragDropContext, { onDragEnd: handleDragEnd, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react_beautiful_dnd.Droppable, { droppableId: "droppable-list", children: (provided) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(DragList, { ref: provided.innerRef, ...provided.droppableProps, children: [
      items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react_beautiful_dnd.Draggable, { draggableId: item.id, index, children: (provided2) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        DraggableItem,
        {
          provided: provided2,
          items,
          setItems,
          item
        },
        void 0,
        !1,
        {
          fileName: "app/components/DraggableItem/DraggableItems.tsx",
          lineNumber: 88,
          columnNumber: 21
        },
        this
      ) }, item.id, !1, {
        fileName: "app/components/DraggableItem/DraggableItems.tsx",
        lineNumber: 86,
        columnNumber: 17
      }, this)),
      provided.placeholder
    ] }, void 0, !0, {
      fileName: "app/components/DraggableItem/DraggableItems.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItems.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItems.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MetafieldModal, { appId, meta, setItems }, void 0, !1, {
      fileName: "app/components/DraggableItem/DraggableItems.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DraggableItem/DraggableItems.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
};

// app/routes/app._index.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let { admin, session } = await authenticate.admin(request), currentTheme = (await admin.rest.resources.Theme.all({
    session
  })).data.find((item) => item.role === "main"), id = await (await admin.graphql(GET_CURRENT_APP_ID)).json(), shopName = session.shop.split(".")[0], response = await admin.rest.resources.Asset.all({
    session,
    theme_id: currentTheme.id,
    asset: { key: "config/settings_data.json" }
  }), { meta, defaultMeta } = await getCompareMeta(
    admin,
    id.data.currentAppInstallation.id
  ), data = JSON.parse(String(response.data[0].value)), themeId = process.env.SHOPIFY_THEME_EXTENSION_ID;
  return (0, import_node8.json)({
    data,
    currentTheme,
    shopName,
    themeId,
    id,
    meta,
    defaultMeta
  });
}, action6 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), formData = await request.formData();
  await addAndDelMetafield(admin, formData, request);
  let { meta, defaultMeta } = await getCompareMeta(admin, formData.get("id"));
  return (0, import_node8.json)({
    meta,
    defaultMeta
  });
};
function Index() {
  let loaderData = (0, import_react27.useLoaderData)(), actionData = (0, import_react27.useActionData)(), submit = (0, import_react27.useSubmit)(), app = (0, import_app_bridge.createApp)(shopify.config), redirect2 = import_actions2.Redirect.create(app), [value, toggle] = useToggle(!1), { handleSubmit, control, reset, watch } = (0, import_react_hook_form.useForm)({
    defaultValues: {
      feature: "",
      description: ""
    }
  });
  (0, import_react26.useEffect)(() => {
    loaderData.defaultMeta.length || submit(
      {
        key: "product_comparison",
        value: JSON_INITIAL_ITEMS,
        id: loaderData.id.data.currentAppInstallation.id,
        namespace: "default_product_meta",
        type: "json"
      },
      { replace: !0, method: "POST" }
    );
  }, [submit]);
  let showAlert = (0, import_react26.useMemo)(() => loaderData?.data?.current?.blocks ? loaderData?.data?.current?.blocks["2396933968462544605"]?.disabled : !0, [loaderData]), handleActivateClick = () => {
    redirect2.dispatch(
      import_actions2.Redirect.Action.REMOTE,
      redirectEditorLink(loaderData.shopName, loaderData.themeId)
    );
  }, handleSubmitFeedbackForm = () => {
    let featureName = watch("feature"), description = watch("description");
    new Promise((resolve) => {
      resolve({ featureName, description });
    }).finally(() => {
      reset(), toggle();
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Frame, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.BlockStack, { gap: "400", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Text, { variant: "headingXl", as: "h1", children: "Dashboard" }, void 0, !1, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this),
    showAlert && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Banner, { title: "Active our app on your theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.BlockStack, { gap: "200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Text, { as: "p", children: "Our application is still disabled in your theme. It is required to be enabled to start storefront integration." }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 148,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Button, { onClick: handleActivateClick, variant: "primary", children: "Activate App" }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 154,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 153,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 147,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 146,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Text, { as: "p", children: [
              "We hope our App will be suitable for your business\u{1F60A}",
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/app._index.tsx",
                lineNumber: 173,
                columnNumber: 17
              }, this),
              "If you want to customize the app to better suit your business, submit a request and we'll consider making it happen!"
            ] }, void 0, !0, {
              fileName: "app/routes/app._index.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Button, { onClick: toggle, children: "Request a feature" }, void 0, !1, {
              fileName: "app/routes/app._index.tsx",
              lineNumber: 177,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 163,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Modal, { open: value, onClose: toggle, title: "Request new feature", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Modal.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("form", { onSubmit: handleSubmit(handleSubmitFeedbackForm), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          import_react_hook_form.Controller,
          {
            name: "feature",
            control,
            rules: FeatureNameInput,
            render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              import_polaris15.TextField,
              {
                label: "Feature Name",
                autoComplete: "off",
                value: field.value,
                error: fieldState.error?.message,
                onChange: field.onChange,
                placeholder: "e.g. Translate store front texts"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.tsx",
                lineNumber: 189,
                columnNumber: 27
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 183,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          import_react_hook_form.Controller,
          {
            name: "description",
            control,
            rules: DescriptionInput,
            render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              import_polaris15.TextField,
              {
                label: "Description",
                onChange: field.onChange,
                value: field.value,
                error: fieldState.error?.message,
                placeholder: "Explain more about your feature",
                multiline: 5,
                autoComplete: "off"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app._index.tsx",
                lineNumber: 207,
                columnNumber: 27
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 201,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Divider, { borderColor: "border" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 219,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: { textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Button, { variant: "primary", submit: !0, children: "Send" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 221,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 220,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 182,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Text, { variant: "headingLg", as: "h2", children: "Comparison Fields Setting" }, void 0, !1, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 230,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_polaris15.Card, { children: Boolean(loaderData.defaultMeta.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      DraggableItems,
      {
        appId: loaderData.id.data.currentAppInstallation.id,
        meta: actionData ? actionData?.meta : loaderData.meta,
        defaultMeta: actionData ? actionData?.defaultMeta : loaderData.defaultMeta
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 235,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 233,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 141,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 140,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.tsx
var route_exports = {};
__export(route_exports, {
  action: () => action7,
  default: () => Auth,
  links: () => links,
  loader: () => loader7
});
var import_react28 = require("react"), import_node9 = require("@remix-run/node"), import_polaris16 = require("@shopify/polaris"), import_react29 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-XBXYCZPP.css";

// app/routes/auth.login/error.server.tsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader7 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node9.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action7 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node9.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react29.useLoaderData)(), actionData = (0, import_react29.useActionData)(), [shop, setShop] = (0, import_react28.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris16.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris16.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris16.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react29.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris16.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris16.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.tsx",
      lineNumber: 49,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_polaris16.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.tsx",
        lineNumber: 52,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_polaris16.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.tsx",
      lineNumber: 62,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 47,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.tsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action8
});
var action8 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/auth.$.tsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader8
});
var loader8 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/_index/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader9
});
var import_node10 = require("@remix-run/node"), import_react30 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader9 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node10.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node10.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react30.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/app.tsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader10
});
var import_node11 = require("@remix-run/node"), import_react31 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react32 = require("@shopify/shopify-app-remix/react");
var import_react33 = require("react"), import_app_bridge_react3 = require("@shopify/app-bridge-react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader10 = async ({ request }) => (await authenticate.admin(request), (0, import_node11.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App3() {
  let { apiKey } = (0, import_react31.useLoaderData)(), [appProviderLoad, setAppProviderLoad] = (0, import_react33.useState)(!1);
  return (0, import_react33.useEffect)(() => {
    setAppProviderLoad(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react32.AppProvider, { isEmbeddedApp: !0, apiKey, children: appProviderLoad && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_app_bridge_react3.Provider, { config: shopify.config, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react31.Link, { to: "/app" /* ROOT */, rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react31.Link, { to: "/app/comparison" /* COMPARISON */, children: "Comparison" }, void 0, !1, {
        fileName: "app/routes/app.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react31.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react31.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3VIWTASQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-EANB4GN4.js", "/build/_shared/chunk-R5POWXF3.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VUEDSTCX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FZYKW7Q2.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-OE27S7AH.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-WD5KJCUX.js", "/build/_shared/chunk-AHRZ4I3J.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-G3SH5OYF.js", imports: ["/build/_shared/chunk-YKNNQKH4.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.comparison": { id: "routes/app.comparison", parentId: "routes/app", path: "comparison", index: void 0, caseSensitive: void 0, module: "/build/routes/app.comparison-JOXAIZQG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/app.comparison.atc": { id: "routes/app.comparison.atc", parentId: "routes/app.comparison", path: "atc", index: void 0, caseSensitive: void 0, module: "/build/routes/app.comparison.atc-PROCQK4Y.js", imports: ["/build/_shared/chunk-4NT7NZIW.js", "/build/_shared/chunk-AJEI3VWP.js", "/build/_shared/chunk-YKNNQKH4.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.comparison.fixed-btn": { id: "routes/app.comparison.fixed-btn", parentId: "routes/app.comparison", path: "fixed-btn", index: void 0, caseSensitive: void 0, module: "/build/routes/app.comparison.fixed-btn-NML4OIUC.js", imports: ["/build/_shared/chunk-4NT7NZIW.js", "/build/_shared/chunk-AJEI3VWP.js", "/build/_shared/chunk-YKNNQKH4.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.comparison.grid": { id: "routes/app.comparison.grid", parentId: "routes/app.comparison", path: "grid", index: void 0, caseSensitive: void 0, module: "/build/routes/app.comparison.grid-YBMK36FJ.js", imports: ["/build/_shared/chunk-4NT7NZIW.js", "/build/_shared/chunk-AJEI3VWP.js", "/build/_shared/chunk-YKNNQKH4.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.comparison.table": { id: "routes/app.comparison.table", parentId: "routes/app.comparison", path: "table", index: void 0, caseSensitive: void 0, module: "/build/routes/app.comparison.table-ZXLE7AJU.js", imports: ["/build/_shared/chunk-AJEI3VWP.js", "/build/_shared/chunk-YKNNQKH4.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.comparison.toolbar": { id: "routes/app.comparison.toolbar", parentId: "routes/app.comparison", path: "toolbar", index: void 0, caseSensitive: void 0, module: "/build/routes/app.comparison.toolbar-LEKQOPRW.js", imports: ["/build/_shared/chunk-4NT7NZIW.js", "/build/_shared/chunk-AJEI3VWP.js", "/build/_shared/chunk-YKNNQKH4.js", "/build/_shared/chunk-S6Y3EBRO.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-Z6LPBAD4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-75ANNZ2G.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-OBV6KFN7.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-YCEDH7MD.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "93c93ef5", hmr: { runtime: "/build/_shared\\chunk-R5POWXF3.js", timestamp: 1702635139941 }, url: "/build/manifest-93C93EF5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.comparison.fixed-btn": {
    id: "routes/app.comparison.fixed-btn",
    parentId: "routes/app.comparison",
    path: "fixed-btn",
    index: void 0,
    caseSensitive: void 0,
    module: app_comparison_fixed_btn_exports
  },
  "routes/app.comparison.toolbar": {
    id: "routes/app.comparison.toolbar",
    parentId: "routes/app.comparison",
    path: "toolbar",
    index: void 0,
    caseSensitive: void 0,
    module: app_comparison_toolbar_exports
  },
  "routes/app.comparison.table": {
    id: "routes/app.comparison.table",
    parentId: "routes/app.comparison",
    path: "table",
    index: void 0,
    caseSensitive: void 0,
    module: app_comparison_table_exports
  },
  "routes/app.comparison.grid": {
    id: "routes/app.comparison.grid",
    parentId: "routes/app.comparison",
    path: "grid",
    index: void 0,
    caseSensitive: void 0,
    module: app_comparison_grid_exports
  },
  "routes/app.comparison.atc": {
    id: "routes/app.comparison.atc",
    parentId: "routes/app.comparison",
    path: "atc",
    index: void 0,
    caseSensitive: void 0,
    module: app_comparison_atc_exports
  },
  "routes/app.comparison": {
    id: "routes/app.comparison",
    parentId: "routes/app",
    path: "comparison",
    index: void 0,
    caseSensitive: void 0,
    module: app_comparison_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
