import * as z from 'zod';

export const CampValidation =  z.object({
    email: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30), 
    name: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    gender: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    age: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    district: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    country: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    maritalStatus: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    phoneNumber: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    statesVisited: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(50),
    expectations: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(1000),
    profession: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
    skills: z.string().min(3, {message: 'MINIMUM OF 3 CHARACTERS'}).max(30),
})