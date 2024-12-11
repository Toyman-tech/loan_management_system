import axios from "axios";
import crypto from "crypto";

const apiKey = process.env.NEXT_PUBLIC_REMITA_API_KEY
const apiToken = process.env.NEXT_PUBLIC_REMITA_API_TOKEN
const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID
// Function to generate AUTHORIZATION header (SHA-512)
const generateAuthorization = (requestId :any)  => {
  const stringToHash = `${apiKey}${requestId}${apiToken}`;
  return crypto.createHash("sha512").update(stringToHash).digest("hex");
};

// Function to fetch salary history
export const getSalaryHistory = async (customerDetails : any) => {
  const {
    requestId,
    firstName,
    lastName,
    middleName,
    accountNumber,
    bankCode,
    bvn,
  } = customerDetails;

  // Generate AUTHORIZATION header
  const authorization = generateAuthorization(requestId);

  // Prepare API payload
  const payload = {
    authorisationCode: "", // optional
    firstName,
    lastName,
    middleName,
    accountNumber,
    bankCode,
    bvn,
    authorisationChannel: "USSD",
  };

  try {
    // Call the Salary History API
    const response = await axios.post(
      "https://demo.remita.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/salary/history/provideCustomerDetails",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          API_KEY: apiKey,
          MERCHANT_ID: merchantId,
          REQUEST_ID: requestId,
          AUTHORIZATION: authorization,
        },
      }
    );

    // Return the API response
    return response.data;
  } catch (error) {
    console.error("Error fetching salary history:", error);
    throw new Error("Failed to fetch salary history.");
  }
};

//  FUNCTION TO DETERMINE ELIGIBILITY
export const checkEligibility = (salaryData : any) => {
    if (!salaryData || salaryData.status !== 'success') {
      return { eligible: false, reason: 'Unable to fetch salary data' };
    }
  
    const { salaryCount, salaryPaymentDetails, loanHistoryDetails } = salaryData.data;
  
    // Business rules for eligibility
    if (parseInt(salaryCount, 10) < 6) {
      return { eligible: false, reason: 'Insufficient salary history (minimum 6 months required).' };
    }
  
    const totalSalary = salaryPaymentDetails.reduce((sum : any, payment : any) => sum + parseInt(payment.amount, 10), 0);
    const averageSalary = totalSalary / salaryPaymentDetails.length;
  
    if (averageSalary < 100000) {
      return { eligible: false, reason: 'Salary too low to qualify for a loan.' };
    }
  
    if (loanHistoryDetails?.some((loan:any) => loan.status === 'NEW' || loan.outstandingAmount > 0)) {
      return { eligible: false, reason: 'Outstanding loans must be cleared first.' };
    }
  
    return { eligible: true };
  };


//   FUNCTION TO MANDATE LOAN SETUP
export const generateHash = (serviceTypeId : any, requestId : any, amount : any) => {
    const stringToHash = `${merchantId}${serviceTypeId}${requestId}${amount}${apiKey}`;
    return crypto.createHash('sha512').update(stringToHash).digest('hex');
  };
  export const setupMandate = async (mandateData : any) => {
    const {
      serviceTypeId,
      payerName,
      payerEmail,
      payerPhone,
      payerBankCode,
      payerAccount,
      amount,
      startDate,
      endDate,
      frequency,
    } = mandateData;
  
    // Generate a unique request ID
    const requestId = `REQ-${Date.now()}`;
  
    // Generate the hash
    const hash = generateHash(serviceTypeId, requestId, amount);
  
    // Prepare request payload
    const payload = {
      merchantId,
      serviceTypeId,
      hash,
      payerName,
      payerEmail,
      payerPhone,
      payerBankCode,
      payerAccount,
      requestId,
      amount,
      startDate,
      endDate,
      mandateType: 'SO', // SO = Standing Order
      frequency,
    };
  
    try {
      // Send API request
      const response = await axios.post(
        'https://demo.remita.net/remita/exapp/api/v1/send/api/echannelsvc/echannel/mandate/setup',
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error setting up mandate:', error);
      throw new Error('Failed to set up mandate.');
    }
  };
  
  