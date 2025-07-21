import React, { useState } from "react";
import { Main, Box, Button, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { getTranslation } from "../utils/getTranslation";

const HomePage = () => {
  const { formatMessage } = useIntl();
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSync = async () => {
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

       

        <Box paddingTop={4} display="flex" gap={4}>
          <Button onClick={handleSync} loading={uploading}>
            Sync with 1C
          </Button>
         
        </Box>

        {message && (
          <Box paddingTop={4}>
            <Typography variant="epsilon">{message}</Typography>
          </Box>
        )}
      </Box>
    </Main>
  );
};

export default HomePage;
