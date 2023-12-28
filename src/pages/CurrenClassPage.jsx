/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable react/prop-types
import { Box, Button, ButtonGroup, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "../ui-components/Navbar";
import PupilsTable from "./PupilsTable";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import DeleteModal from "../ui-components/DeleteModal";
import { useSelector } from "react-redux";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const CLASS_DATA_SLICE = useSelector((state) => state.classData);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CurrentClassPage = ({ currentClass }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px 50px",
        }}
      >
        <Box>
          <h1>{currentClass.classNumber}-sinf</h1>
          <Box
            sx={{
              marginTop: "40px",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            <div
              style={{ marginRight: "15px" }}
              className="currentClassMainBoxImg"
            ></div>
            <div>
              <p
                style={{
                  color: "#002540",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {currentClass.tutor}
              </p>
              <p
                style={{
                  color: "#C7C7C7",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Kurator
              </p>
            </div>
          </Box>
        </Box>
        <ButtonGroup orientation="vertical">
          <Button sx={{ backgroundColor: "#0094FF" }} variant="contained">
            Tahrirlash
          </Button>{" "}
          <br />
          <DeleteModal
            currentClass={currentClass}
            modalText="Sinf o'chirislishiga rozimisiz ?"
          />
        </ButtonGroup>
      </Box>
      <hr />
      <Box sx={{ padding: "25px 50px" }}>
        <p>
          <b style={{ color: "#002540" }}>Tashkil qilindi:</b> 15.09.2022
        </p>
        <p>
          <b style={{ color: "#002540" }}>Jami o`quvchi:</b>{" "}
          {currentClass.pupils.length} nafar
        </p>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Guruh №1" {...a11yProps(0)} />
            <Tab label="Fanlar" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PupilsTable currentClass={currentClass}></PupilsTable>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Fanlar
        </CustomTabPanel>
      </Box>
    </Fragment>
  );
};

export default CurrentClassPage;
