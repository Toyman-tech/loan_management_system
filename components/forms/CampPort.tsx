"use client";

import * as z from 'zod';

import {useForm} from 'react-hook-form'
import { usePathname, useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CampValidation } from '@/lib/validatons/camp';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNewCampite } from '@/lib/actions/camp.actions';



interface Props {
  userId: string;
  btnTitle: string;
}

function CampPort
 ({ userId, btnTitle}: Props)  {
   const router= useRouter();
   const pathname= usePathname();
   const form = useForm<z.infer<typeof CampValidation>>({
    resolver : zodResolver(CampValidation),
    defaultValues : {
      name:  '',
      email: '',
      gender: '',
      age: '',
      district:'',
      country: '',
      maritalStatus : '',
      phoneNumber : '',
      statesVisited: '',
      expectations: '',
      profession: '',
      skills: '',

    }
   });
   
   

   const onSubmit= async (values: z.infer<typeof CampValidation>) => {
    // create
    
  
    // await createNewCampite( 
      
    //   {
    //     id: userId,
    //     name: values.name,
    //     email: values.email,
    //     gender: values.gender, 
    //     age: values.age, 
    //     district: values.district,
    //     country: values.country, 
    //     maritalStatus: values.maritalStatus,  
    //     phoneNumber: values.phoneNumber, 
    //     statesVisited: values.statesVisited, 
    //     expectations: values.expectations, 
    //     profession: values.profession, 
    //     skills: values.skills, 
    //     path: pathname,
    //   }
    //   );
      await router.push('/paymentPortal')
     console.log('update done here' );
     
      
    
   }


  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col justify-start gap-10">
    
     <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
               Email
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
     <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            Name (First Name, Middle Nameinitial, Surname)
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> 
 
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
               gender
            </FormLabel>
            <FormControl>
              <Input
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      /> 

      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
               Age (years)
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> 
      <FormField
        control={form.control}
        name="district"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            District/State
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
               Country
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="maritalStatus"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            Marital Status
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            Phone number
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="statesVisited"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            States visited mostly within 6months
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="expectations"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            What are your expectations from the organization?
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="profession"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            What is your profession/Choice of a career?
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="skills"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            What teachable skill(s) do you possess?
            </FormLabel>
            <FormControl>
              <Input 
              type='text'
              className='account-form_input no-focus'
              {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

       <Button type="submit" className=' bg-[#085F32]'>Click here to continue</Button>
    </form>
  </Form>
  )
}

export default CampPort;
