import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Box, Container, Stack } from "@mui/material";
// import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Bottombar from "@/components/Bottombar";
import Sidebar from "@/components/Sidebar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <Stack direction="column">
    <html lang="en">
      <body className={dmSans.className} suppressHydrationWarning={true}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            minHeight: "100vh",
            backgroundColor: "#F9F9F9",
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          <Sidebar />
          {/* <Topbar /> */}

          <Box
            sx={{
              display: "flex",
              flex: "1 1 auto",
              flexDirection: "column",
              pl: { lg: "280px", md: "280px", sm: "0px" },
            }}
          >
            <Box sx={{ position: "sticky", top: 0, zIndex: 20 }}>
              <Topbar />
            </Box>
            <Box sx={{ p: { md: "1em", xs: "0px" }, width: "100%" }}>
              {children}
            </Box>
          </Box>
        </Box>
      </body>
    </html>

    // </Stack>
  );
}