import { jsxs, jsx } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Main, Box, Typography, Button } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { P as PLUGIN_ID } from "./index-Vbpxp4X8.mjs";
const getTranslation = (id) => `${PLUGIN_ID}.${id}`;
const HomePage = () => {
  const { formatMessage } = useIntl();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
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
  return /* @__PURE__ */ jsxs(Main, { children: [
    /* @__PURE__ */ jsxs(Box, { padding: 6, children: [
      /* @__PURE__ */ jsxs(Typography, { variant: "alpha", children: [
        "Welcome to",
        " ",
        formatMessage({
          id: getTranslation("plugin.name"),
          defaultMessage: "VetGroup Product Sync"
        })
      ] }),
      /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          accept: ".csv",
          onChange: handleFileChange,
          disabled: uploading
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsx(Button, { onClick: handleUpload, loading: uploading, children: "Upload" }) }),
      message && /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsx(Typography, { variant: "epsilon", children: message }) })
    ] }),
    /* @__PURE__ */ jsx(
      Button,
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
const NotFoundPage = () => /* @__PURE__ */ jsx("div", { children: "Page Not Found" });
const App = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
  ] });
};
export {
  App as default
};
