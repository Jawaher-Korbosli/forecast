import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import React from "react";
import "./index.css";

export default function FetchingDataModal() {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    outline: "none",
  };
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="fetchingDataModalBox">
        <h4 className="loadingDataText">Loading Data ...</h4>
        <CircularProgress color="secondary" />
      </Box>
    </Modal>
  );
}
