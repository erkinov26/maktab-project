/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

export default function DeleteModal({ modalText, deleteFunc, buttonText }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 370,
    height: 200,
    bgcolor: "#fff",
    textAlign: "center",
    borderRadius: "16px",
    boxShadow: " 0px 6px 19px 0px rgba(0, 0, 0, 0.15)",
    p: 4,
  };

  return (
    <div>
      <Button
        sx={{ color: buttonText !== "O'chirish" ? "red" : null }}
        onClick={handleOpen}
      >
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalText}
          </Typography>
          <Button onClick={handleClose} sx={{ m: 4 }}>
            Yo{"'"}q
          </Button>
          <Button
            onClick={() => {
              deleteFunc(), handleClose();
            }}
            sx={{ m: 4 }}
            variant="contained"
          >
            Ha
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
