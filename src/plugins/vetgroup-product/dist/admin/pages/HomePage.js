import React, { useState } from "react";
import { Main, Box, Button, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { getTranslation } from "../utils/getTranslation";
const HomePage = () => {
    const { formatMessage } = useIntl();
    // const [file, setFile] = useState<File | null>(null); // File upload disabled
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   if (event.target.files && event.target.files.length > 0) {
    //     setFile(event.target.files[0]);
    //   }
    // };
    // const handleUpload = async () => {
    //   if (!file) {
    //     setMessage("Please select a file first.");
    //     return;
    //   }
    //   setUploading(true);
    //   setMessage("");
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   try {
    //     const response = await fetch("/api/vetgroup-product/upload", {
    //       method: "POST",
    //       body: formData,
    //     });
    //     if (!response.ok) {
    //       throw new Error("Upload failed");
    //     }
    //     const result = await response.json();
    //     setMessage(result.message || "File uploaded successfully!");
    //   } catch (error) {
    //     setMessage(`Error uploading file. Please try again. ${error}`);
    //   } finally {
    //     setUploading(false);
    //   }
    // };
    const handleSync = async () => {
        setUploading(true);
        setMessage("");
        try {
            const res = await fetch("/api/vetgroup-product/sync", {
                method: "GET",
            });
            const data = await res.json();
            setMessage(data.message || "Sync completed successfully");
        }
        catch (err) {
            setMessage("Sync failed: " + err);
        }
        finally {
            setUploading(false);
        }
    };
    const handlePublish = async () => {
        setUploading(true);
        setMessage("");
        try {
            const res = await fetch("/api/vetgroup-product/publish-other", {
                method: "POST",
            });
            const data = await res.json();
            setMessage(data.message || "Publish completed successfully");
        }
        catch (err) {
            setMessage("Publish failed: " + err);
        }
        finally {
            setUploading(false);
        }
    };
    return (React.createElement(Main, null,
        React.createElement(Box, { padding: 6 },
            React.createElement(Typography, { variant: "alpha" },
                "Welcome to",
                " ",
                formatMessage({
                    id: getTranslation("plugin.name"),
                    defaultMessage: "VetGroup Product Sync",
                })),
            React.createElement(Box, { paddingTop: 4, display: "flex", gap: 4 },
                React.createElement(Button, { onClick: handleSync, loading: uploading }, "Sync with 1C"),
                React.createElement(Button, { onClick: handlePublish, loading: uploading }, "Publish Products")),
            message && (React.createElement(Box, { paddingTop: 4 },
                React.createElement(Typography, { variant: "epsilon" }, message))))));
};
export default HomePage;
