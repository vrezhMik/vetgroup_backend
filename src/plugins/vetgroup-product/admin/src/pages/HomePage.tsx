import React, { useState } from "react";
import { Main, Box, Button, Typography, Input } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { getTranslation } from "../utils/getTranslation";

const HomePage = () => {
  const { formatMessage } = useIntl();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      setMessage(
        JSON.stringify(result.message) || "File uploaded successfully!",
      );
    } catch (error) {
      setMessage(`Error uploading file. Please try again. ${error}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Main>
      <Box padding={6}>
        <Typography variant="alpha">
          Welcome to{" "}
          {formatMessage({
            id: getTranslation("plugin.name"),
            defaultMessage: "VetGroup Product Sync",
          })}
        </Typography>

        <Box paddingTop={4}>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </Box>

        <Box paddingTop={4}>
          <Button onClick={handleUpload} loading={uploading}>
            Upload
          </Button>
        </Box>

        {message && (
          <Box paddingTop={4}>
            <Typography variant="epsilon">{message}</Typography>
          </Box>
        )}
      </Box>
      <Button
        variant="secondary"
        onClick={async () => {
          setUploading(true);
          setMessage("");
          try {
            const res = await fetch("/api/vetgroup-product/sync", {
              method: "GET",
            });

            const data = await res.json();
            setMessage(data.message || "Sync completed successfully");
          } catch (err) {
            setMessage("Sync failed: " + err);
          } finally {
            setUploading(false);
          }
        }}
      >
        Sync with 1C
      </Button>
    </Main>
  );
};

export default HomePage;
