'use client'
import { createNewCampite } from "@/lib/actions/camp.actions";
import { usePathname, useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import Swal from 'sweetalert2'
import useWindowSize from 'react-use/lib/useWindowSize'
import  ReactConfetti from 'react-confetti'

type referenceObj = {
	message: string;
	reference: string;
	status: "sucess" | "failure";
	trans: string;
	transaction: string;
	trxref: string;
};
interface Props {
  userId: string;
}

function CampPortal  ()  {
	const [ref, setRef] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [phone, setPhone] = useState("");
	const [state, setState] = useState("");
	const [success, setSuccess] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const router= useRouter();
   const pathname= usePathname();
   const { width, height } = useWindowSize();
	useEffect(() => {
		setSuccess(false);
		setRef("" + Math.floor(Math.random() * 1000000000 + 1));
	}, [success]);

	const config: PaystackProps = {
		reference: ref,
		email: email,
		firstname: name,
		lastname: surname,
		label: name + " " + surname,
		amount: (15350 * 100) | 0,
		publicKey: 'pk_test_ece0d36011752069541699e8594f339dd08f4683',
		currency: "NGN",
	};

	const componentProps = {
        ...config,
        text: `Pay ₦15,350`,
		onSuccess:(reference: referenceObj)=> {
			const data:any = reference	 
		    	setSuccess(true);
				setEmail("");
				setState("");
				setName("");
				setSurname("");
				setPhone("");
        
         if (data.status === "success") {
           createNewCampite( 
         {
          name: name + " " + surname,
          email: email,
          district: state, 
          phoneNumber: phone, 
          path: pathname,
        }
        );
		setShowSuccessMessage(true);
			Swal.fire({
			  title: "Alhamdullilah!",
			  text: "Your Payment is succesful🎉🎉",
			  icon: "success",
			  confirmButtonColor: '#085F32', // Set the background color for the OK button to green
              confirmButtonText: 'OK',
			});
		setTimeout(()=>{
			setShowSuccessMessage(false)
			
			
		}, 5000)   
		

	}   
	   
		},
        onClose:() => {
			setShowErrorMessage(true);
			
		setTimeout(()=>{
			setShowErrorMessage(false)
					}, 5000)},
    };
	

	return (
		<>
		<div className="space-y-8 flex flex-col justify-start gap-8" >
			<div className='flex flex-col gap-3 w-full'>
				<label htmlFor="email" className='text-base-semibold text-dark-2'>Email Address</label>
				<input
					type="email"
					id="email-address"
					required
          className='account-form_input no-focus'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<label htmlFor="district" className='text-base-semibold text-dark-2'>District</label>
				<input
					type='text'
					required
					value={state}
          className='account-form_input no-focus'
					onChange={(e) => setState(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<label htmlFor="first-name" className='text-base-semibold text-dark-2'>First Name</label>
				<input
					type="text"
					id="first-name"
          className='account-form_input no-focus'
          required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<label htmlFor="last-name" className='text-base-semibold text-dark-2'>Last Name</label>
				<input
					type="text"
					id="last-name"
          className='account-form_input no-focus'
          required
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<label htmlFor="last-name" className='text-base-semibold text-dark-2'>Your phone number</label>
				<input
					type="phone-number"
					id="phone-number"
          className='account-form_input no-focus'
          required
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
            {/* {showSuccessMessage && (<ReactConfetti width={width} height={height}/>)} */}
		 {showErrorMessage && (
          <div className="text-xl  flex flexCenter font-semibold
		  justify-center  text-light mt-1">
           Payment cancelled, please check yur internet connection and try again.
          </div>
         )} 
			<PaystackButton {...componentProps} className=' flex flecCenter justify-center p-3 bg-[#085F32] text-center text-white hover:text-dark-1' />
		</div>
		</>
	);
};

export default CampPortal;