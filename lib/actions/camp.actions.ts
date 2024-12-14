"use server";

import { revalidatePath } from "next/cache";
import Camp from "../models/camp.model";
import { connectToDB } from "../mongoose"


interface  Params{
    name:  string,
    email: string,
    district:string,
    phoneNumber : string,
    path: string,
} 

 export async function createNewCampite(
    {
    name,  
    email, 
    district,
    phoneNumber, 
    path,
}: Params
){
   console.log('first connection');
    
   try {
           console.log(  {
            name,  
            email,  
            district,
            phoneNumber, 
            path,
        });
         connectToDB();
           
        
         const newCampite = await Camp.create(
            {
                name,  
                email,  
                district,
                phoneNumber 
            }
            );
           await newCampite.save();
    
            
                revalidatePath(path);
            
            console.log('done and dusted');


    } catch (error:any) {
        throw new Error(`Failed to create/update member: ${error.message}`)
    }  
};


