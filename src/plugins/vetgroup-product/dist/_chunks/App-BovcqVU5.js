"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const reactRouterDom = require("react-router-dom");
const react = require("react");
const designSystem = require("@strapi/design-system");
const reactIntl = require("react-intl");
const index = require("./index-XW0i10CT.js");
const getTranslation = (id) => `${index.PLUGIN_ID}.${id}`;
const HomePage = () => {
  const { formatMessage } = reactIntl.useIntl();
  const [file, setFile] = react.useState(null);
  const [uploading, setUploading] = react.useState(false);
  const [message, setMessage] = react.useState("");
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }
    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/vetgroup-product/upload", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      const result = await response.json();
      setMessage(
        JSON.stringify(result.message) || "File uploaded successfully!"
      );
    } catch (error) {
      setMessage(`Error uploading file. Please try again. ${error}`);
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Main, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 6, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "alpha", children: [
        "Welcome to",
        " ",
        formatMessage({
          id: getTranslation("plugin.name"),
          defaultMessage: "VetGroup Product Sync"
        })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          type: "file",
          accept: ".csv",
          onChange: handleFileChange,
          disabled: uploading
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: handleUpload, loading: uploading, children: "Upload" }) }),
      message && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "epsilon", children: message }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Button,
      {
        variant: "secondary",
        onClick: async () => {
          setUploading(true);
          setMessage("");
          try {
            const res = await fetch("/api/vetgroup-product/sync", {
              method: "GET"
            });
            const data = await res.json();
            setMessage(data.message || "Sync completed successfully");
          } catch (err) {
            setMessage("Sync failed: " + err);
          } finally {
            setUploading(false);
          }
        },
        children: "Sync with 1C"
      }
    )
  ] });
};
const NotFoundPage = () => /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Page Not Found" });
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(NotFoundPage, {}) })
  ] });
};
exports.default = App;
