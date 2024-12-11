import Image from "next/image";
import styles from "./page.module.css";
import { Box, Stack } from "@mui/material";
import EligibilityForm from "@/components/EligibilityForm";

export default function Home() {
  return (
    <main>
      <Stack direction={"column"}  mt={3} p={3}
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
            <EligibilityForm/>
        </Box>
      </Stack>
    </main>
  );
}
