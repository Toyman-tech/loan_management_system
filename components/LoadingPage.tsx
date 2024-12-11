import { Backdrop, CircularProgress, Stack } from "@mui/material";
import { ReactNode } from "react";

export default function LoadingPage({
  zIndex,
  info,
}: {
  zIndex?: number;
  info?: ReactNode;
}) {
  return (
    <Backdrop
      open={true}
      sx={{ zIndex: zIndex ?? 25, backdropFilter: "blur(3px)" }}
    >
      <Stack
        spacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <CircularProgress />
        {info}
      </Stack>
    </Backdrop>
  );
}
