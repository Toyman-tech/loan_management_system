import { Box, Button, Link, Stack } from "@mui/material";
import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
import MobileTopbar from "./MobileTopbar";
import MainTopbar from "./MainTopbar";
const Topbar = () => {
  return (
    <React.Fragment>
      {/* <Box
        display={{
          md: "none",
          xs: "flex",
        }}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
        width="100vw"
      >
        <MobileTopbar/>
      </Box> */}
      <Box
        // display={{
        //   md: "flex",
        //   xs: "none",
        // }}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
        // width="100vw"
      >
        <MainTopbar/>
      </Box>
    </React.Fragment>
  );
};

export default Topbar;
