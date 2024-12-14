"use client";

import * as z from 'zod';
import Swal from 'sweetalert2'
import  ReactConfetti from 'react-confetti' 
import useWindowSize from 'react-use/lib/useWindowSize'
import {useForm} from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import {usePathname, useRouter} from 'next/navigation'
import { MemberValidation } from '@/lib/validatons/members';
import { createNewMember } from '@/lib/actions/member.actions';



interface Props {
  btnTitle: string;
}

function MembersForm ({ btnTitle}: Props)  {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const router= useRouter();
  const pathname= usePathname();

  const { width, height } = useWindowSize();

  const form = useForm<z.infer<typeof MemberValidation>>({
  resolver : zodResolver(MemberValidation),
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
      support: '',

    }
   });  


   const onSubmit= async (values: z.infer<typeof MemberValidation>) => {
    // create
    
    try {
      await createNewMember( 
     {
        name: values.name,
        email: values.email,
        gender: values.gender, 
        age: values.age, 
        district: values.district,
        country: values.country, 
        maritalStatus: values.maritalStatus,  
        phoneNumber: values.phoneNumber, 
        statesVisited: values.statesVisited, 
        expectations: values.expectations, 
        profession: values.profession, 
        skills: values.skills, 
        support: values.support,
        path: pathname,
      }
      );   
    setShowSuccessMessage(true);
    
      Swal.fire({
        title: "Congratulations!",
        text: "  You are now a registered member of THE DAWN, congratulations!! 🎉🎉🎉",
        icon: "success",
        confirmButtonColor: '#085F32', // Set the background color for the OK button to green
        confirmButtonText: 'OK',
      });
      form.reset()
  
		setTimeout(()=>{
			setShowSuccessMessage(false)
      
		}, 5000)
    } catch (error : any) {
      setShowErrorMessage(true);
      setTimeout(()=>{
        setShowErrorMessage(false)
       
      }, 5000)   
      
    }
    
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
            Name (First Name, Middle Name, Surname)
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
               Gender
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
      <FormField
        control={form.control}
        name="support"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base-semibold text-dark-2'>
            Would you be willing to support The Dawn financially by paying monthly dues?
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
        {/* {showSuccessMessage && 
          (<ReactConfetti width={width} height={height}/>)
         } */}
         {showErrorMessage && (
          <div className="text-xl  flex flexCenter font-semibold
		  justify-center  text-light mt-1">
          please check yur internet connection and try again.
          </div>
         )}
       <Button type="submit" className=' bg-[#085F32]'>Submit</Button>
    </form>
  </Form>
  )
}

export default MembersForm;