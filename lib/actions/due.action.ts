"use server";

import { revalidatePath } from "next/cache";
import Due from "../models/due.model";
import { connectToDB } from "../mongoose"


interface  Params{
    name:  string,
    email: string,
    phoneNumber : string,
    path: string,
    amount:number,
    plan:string,
} 

 export async function createNewDue(
    {
    name,  
    email, 
    phoneNumber,
    amount,
    plan, 
    path,
}: Params
){
//    console.log('first connection');
    
   try {
        //    console.log(  {
        //     name,  
        //     email,  
        //     ,
        //     phoneNumber, 
        //     path,
        // });
         connectToDB();
           
        
         const newDue = await Due.create(
            {
                name,  
                email,  
                phoneNumber,
                amount,
                plan 
            }
            );
           await newDue.save();
    
            
                revalidatePath(path);
            
            console.log('done and dusted');


    } catch (error:any) {
        throw new Error(`Failed to create/update member: ${error.message}`)
    }  
};