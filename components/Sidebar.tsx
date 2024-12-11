"use client";
import { LogoutIcon } from "@/client/svgs";
import {
  clientSideBarLinks1,
  clientSideBarLinks2,
} from "@/constants/clientSideBarLinks";
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
// import LogoutModal from "./logout-modal";

const Sidebar = () => {
  const pathname = usePathname();
  const handleSideBar = () => setIsSideOpen(!isSideOpen);
  const router = useRouter();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [openLogoutMod, setOpenLogoutMod] = useState(false);

  const handleOpenLogoutMod = () => setOpenLogoutMod(true);
  const handleCloseLogoutMod = () => {
    setOpenLogoutMod(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2A4F55",
        // color: "#ffff",
        display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: "fixed",
        scrollbarWidth: "none",
        top: 0,
        width: "280px",
        color: "#000000",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box
        component="nav"
        sx={{
          flex: "1 1 auto",
          p: "12px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0",
          },
        }}
      >
         <Stack spacing={2} sx={{ px: 2, pt: 1 }}>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alinItems: "center",
          }}
        >
         <Box  color='#ffff' pt='5px'>MCSL LOAN-MANAGEMENT</Box>
        </Box>
      </Stack>
      <Divider sx={{ m: "27px", backgroundColor: "#EDF2F7" }} />
        <Stack sx={{ height: "100%", gap: "15px" }}>
          {clientSideBarLinks1.map((item) => (
            <Link
              className="dashboard-nav"
              href={item.url}
              key={item.name}
              data-active={pathname === item.url || undefined}
              style={{
                backgroundColor: pathname === item.url ? "#ffff" : "",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: 600,
                padding: "15px",
                gap: "15px",
                color: "#ffff",
                // &hover:{
                //   backgroundColor: "#457B83c4",
                //   color:'#ffff',
                //   boxShadow:'black'
                // }
              }}
            >
              <item.icon style={{ color: "#000000" }} />
              <Typography
                sx={{
                  color: pathname === item.url ? "#000000" : "#ffff",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
          {/* <Divider />
          {clientSideBarLinks2.map((item) => (
            <Link
              className="dashboard-nav"
              href={item.url}
              key={item.name}
              data-active={pathname === item.url || undefined}
              style={{
                backgroundColor: pathname === item.url ? "#ffff" : "",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: 600,
                padding: "15px",
                gap: "15px",
              }}
            >
              <item.icon style={{ color: "#000000" }} />
              <Typography
                sx={{
                  color: pathname === item.url ? "#000000" : "#ffff",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))} */}
          <Button
            sx={{
              backgroundColor:
                pathname === "/dashboard/logout" ? "#000000" : "",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontSize: "13px",
              fontWeight: 600,
              padding: "20px",
              paddingLeft: "-1px",
              // paddingLeft:'1px',
              gap: "15px",
            }}
            onClick={() => {
              handleSideBar();
              handleOpenLogoutMod();
            }}
          >
            <LogoutIcon />
            <Typography
              sx={{
                color: pathname === "dashboard/logout" ? "#000000" : "#ffff",
              }}
            >
              Logout
            </Typography>
          </Button>
        </Stack>
      </Box>
      {/* <LogoutModal open={openLogoutMod} handleClose={handleCloseLogoutMod} /> */}

      <Backdrop
        open={isSideOpen}
        sx={{ zIndex: 20, display: { md: "none !important" } }}
        onClick={handleSideBar}
      />
    </Box>
  );
};
export default Sidebar;
