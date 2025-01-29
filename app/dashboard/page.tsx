import Image from "next/image";
import styles from "./page.module.css";
import { Box, Stack } from "@mui/material";
import LoanForm from "@/components/LoanForm";

export default function Home() {
  return (
    <main>
      <Stack direction={"column"} mt={3} p={3}
      spacing={5}
      >
        <Box 
        display='flex'
        justifyContent={'center'}
        textAlign={'center'}
        fontWeight={700}
        sx={{
          font:'15px',

        }}>
          WELCOME TO NIPOST (OSUN) CRESCENT MULTIPOURPOSE COOPERATIVE SOCIETY
          LIMITED (MCCSL)
        </Box>
        <Box>
            <LoanForm/>
        </Box>
      </Stack>
    </main>
  );
}
