/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable react/prop-types
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Navbar from "../ui-components/Navbar";
import PupilsTable from "./PupilsTable";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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
      <Box sx={{ width: "100%" }}>
        <Box component="div" sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Guruh №1" {...a11yProps(0)} />
            <Tab label="Fanlar" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel component="div" value={value} index={0}>
          <PupilsTable currentClass={currentClass}></PupilsTable>
        </CustomTabPanel>
        <CustomTabPanel component="div" value={value} index={1}>
          Fanlar
        </CustomTabPanel>
      </Box>
    </Fragment>
  );
};

export default CurrentClassPage;
