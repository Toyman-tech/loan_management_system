"use server";

import { revalidatePath } from "next/cache";
import Member from "../models/member.model";
import { connectToDB } from "../mongoose"


interface  Params{
    name:  string,
    email: string,
    gender: string,
    age: string,
    district:string,
    country: string,
    maritalStatus : string,
    phoneNumber : string,
    statesVisited: string,
    expectations: string,
    profession: string,
    skills: string,
    support: string,
    path: string,
} 

// export async function createNewMember() {
//     console.log(`hello world`);
//     connectToDB();
    
// }

 export async function createNewMember(
    {
    name,  
    email, 
    gender, 
    age, 
    district,
    country, 
    maritalStatus,  
    phoneNumber, 
    statesVisited, 
    expectations, 
    profession, 
    skills, 
    support, 
    path,
}: Params
){
   console.log('first connection');
    
   try {
           console.log(  {
            name,  
            email, 
            gender, 
            age, 
            district,
            country, 
            maritalStatus,  
            phoneNumber, 
            statesVisited, 
            expectations, 
            profession, 
            skills, 
            support, 
            path,
        });
         connectToDB();
           
        
         const newMember = await Member.create(
            {
                name,  
                email, 
                gender, 
                age, 
                district,
                country, 
                maritalStatus,  
                phoneNumber, 
                statesVisited, 
                expectations, 
                profession, 
                skills, 
                support, 
            }
            );
    
            
                revalidatePath(path);
            
            console.log('done and dusted');


    } catch (error:any) {
        throw new Error(`Failed to create/update member: ${error.message}`)
    }  
};




 // try {
    //     connectToDB();
    //     console.log('connected');
        
    //     const newMember = await Member.create(
    //         {
    //           
    //             name,  
    //             email, 
    //             gender, 
    //             age, 
    //             district,
    //             country, 
    //             maritalStatus,  
    //             phoneNumber, 
    //             statesVisited, 
    //             expectations, 
    //             profession, 
    //             skills, 
    //             support, 
    //         }
    //         );
    //        await newMember.save();
    
            
    //             revalidatePath(path);
            
    //         console.log('done and dusted');
            
    // } catch (error: any) {
    //     throw new Error(`Failed to create/update member: ${error.message}`)
    // }
   