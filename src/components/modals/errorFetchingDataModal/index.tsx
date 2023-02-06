import React from "react";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import "./index.css";

interface IProps {
  errorMessage: string;
  closeModal: () => void;
}

export default function ErrorFetchingDataModal({
  errorMessage,
  closeModal,
}: IProps) {
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
        <h4 className="loadingDataText">{errorMessage}</h4>
        <button className="closeModalButton" onClick={closeModal}>
          Ok
        </button>
      </Box>
    </Modal>
  );
}
