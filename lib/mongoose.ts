import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  console.log('hello db');
  
  mongoose.set("strictQuery", true);

 if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");

  //If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};










// import mongoose from "mongoose";

// let isConnected = false ;

// export const connectToDB = async () => {
//     mongoose.set('strictQuery', true);

//     if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
//     if(isConnected) return
    
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
         
//         isConnected= true;
//         console.log('connected to Mongodb succesfully');
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }