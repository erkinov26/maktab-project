/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ErrorOutline } from "@mui/icons-material";

export default function PupilInfo({ clickedPupil }) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 460, padding: "35px 40px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ width: "100%" }}>
        <div className="clickedPupilImgBox"></div>
      </div>
      <h1 className="clickedPupilName">{clickedPupil.full_name}</h1>
      <p className="clickedPupilId">id: {clickedPupil.id}</p>
      <div className="clickedPupilNumberbox">
        <p className="clickedPupilNumber">{clickedPupil.phone_number}</p>
        <p className="clickedPupilNumber"> {clickedPupil.gmail}</p>
      </div>
      <hr />
      <p className="clickedPupilInfoTitle">About</p>
      <p className="clickedPupilInfoText">
        Cristiano Ronaldo, in full Cristiano Ronaldo dos Santos Aveiro (born
        February 5, 1985, Funchal, Madeira, Portugal), Portuguese football
        (soccer) forward who was one of the greatest players of his generation.
        Ronaldos father, José Dinis Aveiro, was the
      </p>
      <div className="clickedPupilInfoBox">
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">Tug{"'"}ulgan sana</p>
          <p className="clickedPupilInfoText">{clickedPupil.birth_date}</p>
        </div>
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">Login</p>
          <p className="clickedPupilInfoText">{clickedPupil.login}</p>
        </div>
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">Jinsi</p>
          <p className="clickedPupilInfoText">{clickedPupil.sex}</p>
        </div>
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">Parol</p>
          <p className="clickedPupilInfoText">{clickedPupil.password}</p>
        </div>
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">Manzil</p>
          <p className="clickedPupilInfoText">{clickedPupil.address}</p>
        </div>
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">O{"'"}qish summasi</p>
          <p className="clickedPupilInfoText">{clickedPupil.contract}</p>
        </div>
        <div className="clickedPupilInfoItem">
          <p className="clickedPupilInfoTitle">User name</p>
          <p className="clickedPupilInfoText">{clickedPupil.user_name}</p>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <Button sx={{ color: "#FFC121" }} onClick={toggleDrawer("right", true)}>
        <ErrorOutline />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
}
