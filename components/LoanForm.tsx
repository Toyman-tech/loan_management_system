"use client"
import { useState } from "react";
// import { setupMandate } from '../services/remitaService'; // Import the mandate setup service
import { TextField, Button, Box, Typography, Stack } from "@mui/material";
import { setupMandate } from "@/lib/action";

const LoanForm = () => {
  const [mandateData, setMandateData] = useState({
    // merchantId: "MERCHANT_ID",
    // serviceTypeId: "SERVICE_TYPE_ID",
    // apiKey: "YOUR_API_KEY", // Ensure this is securely stored
    payerName: "",
    payerEmail: "",
    payerPhone: "",
    payerBankCode: "",
    payerAccount: "",
    amount: "",
    startDate: "",
    endDate: "",
    frequency: "Month",
  });

  const handleInputChange = (e : any) => {
    setMandateData({ ...mandateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await setupMandate(mandateData);
      alert(`Mandate setup successful! Response: ${JSON.stringify(response)}`);
    } catch (error) {
      alert('Error setting up mandate. Please try again.');
    }
  };

  return (
    <Box>
      <Stack direction="column" spacing={2}>
        <Box display="flex" justifyContent={"center"} sx={{}}>
          LOAN APPLICATION FORM
        </Box>
        <TextField
          label="Payer Name"
          name="payerName"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="Payer Email"
          name="payerEmail"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="Payer Phone"
          name="payerPhone"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="Payer Bank Code"
          name="payerBankCode"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="Payer Account"
          name="payerAccount"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="Start Date"
          name="startDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          label="End Date"
          name="endDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
        <Button
          onClick={handleSubmit}
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
          Apply
        </Button>
      </Stack>
    </Box>
  );
};

export default LoanForm;
