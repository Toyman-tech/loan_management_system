"use client";
import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
import { LogoutIcon } from "@/client/svgs";
import { usePathname } from "next/navigation";
// import LogoutModal from "./logout-modal";
import Image from "next/image";
import Link from "next/link";
import {
  clientSideBarLinks1,
  clientSideBarLinks2,
} from "@/constants/clientSideBarLinks";

interface MobileNavProps {
  onClose: () => void;
  open: boolean;
}

const MobileTopbar = ({ onClose, open }: MobileNavProps) => {
  const pathname = usePathname();
  const [openLogoutMod, setOpenLogoutMod] = useState(false);

  const handleOpenLogoutMod = () => setOpenLogoutMod(true);
  const handleCloseLogoutMod = () => {
    setOpenLogoutMod(false);
  };
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#2A4F55",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          scrollbarWidth: "none",
          width: "80%",

          "&::-webkit-scrollbar": { display: "none" },
        },
      }}
      onClose={onClose}
      open={open}
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
              }}
              onClick={onClose}
            >
              <item.icon style={{ color: "#FFF" }} />
              <Typography
                sx={{
                  color: pathname === item.url ? "#000000" : "#ffff",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
          <Divider />
          {/* {clientSideBarLinks2.map((item) => (
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
              onClick={onClose}
            >
              <item.icon style={{ color: "#FFF" }} />
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
              fontSize: "15px",
              fontWeight: 600,
              padding: "20px",
              paddingLeft: "-1px",
              // paddingLeft:'1px',
              gap: "15px",
            }}
            onClick={() => {
              handleOpenLogoutMod();
              // onClose();
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
        {/* <LogoutModal open={openLogoutMod} handleClose={handleCloseLogoutMod} /> */}
      </Box>
    </Drawer>
  );
};

export default MobileTopbar;


