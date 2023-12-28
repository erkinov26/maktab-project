/* eslint-disable react/prop-types */
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { classDataSliceAction } from "../store/ClassesData";

export default function DeleteModal({ currentClass, modalText }) {
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

  console.log(currentClass.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(
      classDataSliceAction.deleteClass({
        id: currentClass.id,
      })
    );
  };
  const deleteClass = () => {
    navigate("/sinflar");
    deleteItem();
  };

  return (
    <div>
      <Button onClick={handleOpen}>O{"'"}chirish</Button>
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
          <Button onClick={deleteClass} sx={{ m: 4 }} variant="contained">
            Ha
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
