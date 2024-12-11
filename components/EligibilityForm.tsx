"use client"
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Stack } from "@mui/material";
import { checkEligibility, getSalaryHistory } from "@/lib/action";
// import { getEligibility } from "../services/remitaService";

const EligibilityForm = () => {
  const [customerDetails, setCustomerDetails] = useState({
    // apiKey: "YOUR_API_KEY",
    // apiToken: "YOUR_API_TOKEN",
    // merchantId: "DEMOMDA1234",
    requestId: `REQ-${Date.now()}`,
    firstName: "",
    lastName: "",
    middleName: "",
    accountNumber: "",
    bankCode: "",
    bvn: "",
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e : any) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await getSalaryHistory(customerDetails);
      setResult(response );
    } catch (error) {
      alert("Error fetching salary history. Please try again.");
    }
  };

  return (
    <Box>
       <Stack direction="column" spacing={2}>
        <Box display="flex" justifyContent={"center"} sx={{}}>
          LOAN ELIGIBILITY FORM
        </Box>
      <TextField
        label="First Name"
        name="firstName"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Middle Name"
        name="middleName"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Account Number"
        name="accountNumber"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="Bank Code"
        name="bankCode"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <TextField
        label="BVN"
        name="bvn"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}
      sx={{
        height: 45.7, // Custom height
        width: "100%",
        justifyContent: "center",
        display: "flex",
        borderRadius: "8px",
        boxShadow: "none",
        textTransform: "initial",
        fontSize: "13px",
        fontWeight: 200,
        backgroundColor: "#2A4F55",
        ":hover": {
          backgroundColor: "#457b83",
        },
      }}
      variant="contained"
      type="submit"
      >
        Check Eligibility
      </Button>

      {result && (
        <Box mt={4}>
          <Typography variant="h6">Salary History Result:</Typography>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </Box>
      )}
      </Stack>
    </Box>
  );
};

export default EligibilityForm;
