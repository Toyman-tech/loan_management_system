"use client";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { KeyboardArrowDownOutlined, SearchOutlined } from "@mui/icons-material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import MobileTopbar from "./MobileTopbar";

const MainTopbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleMenuOpen = (
    setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => (event: React.MouseEvent<HTMLElement>) => {
    setter(event.currentTarget);
  };

  const handleMenuClose = (
    setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  ) => () => {
    setter(null);
  };

  return (
    <React.Fragment>
      <Box
        component="header"
        width={"100%"}
        sx={{
          backgroundColor: "#2A4F55",
          position: "sticky",
          top: 0,
          zIndex: 20,
          py: 1,
          borderBottom: "1px solid #c5c5c5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            px: { lg: "24px", md: "24px", sm: "1em", xs: "1em" },
            minHeight: { lg: "50px", md: "50px", sm: "50px", xs: "45px" },
          }}
        >
          <Box
            sx={{
              display: { lg: "block", md: "block", sm: "block", xs: "none" },
            }}
          >
            <FormControl
              sx={{
                width: { lg: "560px", md: "100%", sm: "100%", xs: "100%" },
              }}
            >
              <TextField
                placeholder="Search for anything"
                name="keyword"
                size="small"
                variant="outlined"
                type="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined sx={{ width: "28px", height: "28px" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "#0177AB03",
                  "& .MuiInputBase-root": {
                    width: "100%",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #F5F9FC",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #F5F9FC",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button onClick={handleMenuOpen(setAnchorEl2)}>
                <IconButton
                  color="inherit"
                  sx={{ backgroundColor: "#ffff", borderRadius: "8px" }}
                >
                  <Badge
                    color="warning"
                    sx={{
                      "& .MuiBadge-badge": {
                        top: "5px",
                        right: "6px",
                        backgroundColor: "#7065F0",
                      },
                    }}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    variant="dot"
                  >
                    <NotificationsNoneOutlinedIcon />
                  </Badge>
                </IconButton>
              </Button>
              <Menu
                anchorEl={anchorEl2}
                id="notification-menu"
                open={open2}
                onClose={handleMenuClose(setAnchorEl2)}
              ></Menu>
            </Box>
            <Box>
              <Button
                onClick={handleMenuOpen(setAnchorEl)}
                sx={{
                  display: { lg: "flex", md: "flex", sm: "none", xs: "flex" },
                  borderRadius: "8px",
                  boxShadow: "0px 0px 36px #7065F01A",
                  textTransform: "initial",
                  fontSize: "13px",
                  fontWeight: 200,
                  backgroundColor: {sm:"#fff", md:"#fff", xs:''},
                  color: "black",
                  marginLeft: { md: "30px", xs: "2px" },
                  paddingLeft: { md: "10px", xs: "5px" },
                  border: {sm:"1px solid #EDF2F7", md:"1px solid #EDF2F7"},
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                {/* <Avatar
                  sx={{
                    bgcolor: { md:"#457B83",  sm:"#457B83", xs:"#457B83"},
                    marginRight: "15px",
                    width: 34,
                    height: 34,
                    color:{xs:'#000000', md:'#fff', sm:'#fff'}
                  }}
                  alt="Vaad Media"
                  src={"/"}
                /> */}
                 <Avatar
                    sx={{
                      bgcolor: { md:"#457B83",  sm:"#457B83", xs:"#457B83"},
                      marginRight: "15px",
                      width: 34,
                      height: 34,
                      color:{xs:'#ffff', md:'#fff', sm:'#fff'}
                    }}
                    alt="Vaad Media"
                  >
                    <PersonOutlineIcon />
                  </Avatar>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Typography>
                  Abubakar Habeeb
                </Typography>
                <KeyboardArrowDownOutlined color="disabled" />
                </Box>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleMenuClose(setAnchorEl)}
              >
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  <Link href="/">
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        color: "#2A4F55",
                        marginRight: "20px",
                        cursor: "pointer",
                        fontSize: "15.17px",
                        fontWeight: "500",
                      }}
                    >
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose(setAnchorEl)}>
                  <Link href="/">
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        color: "#2A4F55",
                        marginRight: "20px",
                        cursor: "pointer",
                        fontSize: "15.17px",
                        fontWeight: "500",
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            {/* <Avatar
              src={"/"}
              sx={{
                bgcolor: "#0177AB",
                width: 34,
                height: 34,
                display: { lg: "none", md: "none", sm: "flex", xs: "none" },
              }}
              alt="john doe"
              onClick={handleMenuOpen(setAnchorEl)}
            /> */}
          </Box>
          <IconButton
            onClick={() => setOpenNav(true)}
            sx={{ display: { lg: "none", md: "none", sm: "flex" } }}
          >
            <Box color='#ffff' 
            display='flex'
            >
            <HiOutlineMenuAlt1 />
            </Box>
          </IconButton>
        </Box>
      </Box>
      <MobileTopbar onClose={() => setOpenNav(false)} open={openNav} />
    </React.Fragment>
  );
};

export default MainTopbar;
