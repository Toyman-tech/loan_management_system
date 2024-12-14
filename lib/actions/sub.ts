"use server";

import { revalidatePath } from "next/cache";
import Camp from "../models/camp.model";
import Subscription from "../models/subscriptions.model";
import { connectToDB } from "../mongoose"


interface  Params{
    email: string,
    path:string,
} 

 export async function createNewSubscription(
    {
    email, 
    path,
}: Params
){
   console.log('first connection');
    
   try {
           console.log(  {
            email,
            path,  
        });
         connectToDB();
           
        
         const newSub = await Subscription.create(
            {
             email,  
            }
            );
           await newSub.save();
    
            
                revalidatePath(path);
            
            console.log('done and dusted');


    } catch (error:any) {
        throw new Error(`Failed to create/update member: ${error.message}`)
    }  
};


