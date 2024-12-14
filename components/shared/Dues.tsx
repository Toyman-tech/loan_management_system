"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { PaystackButton } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import { usePathname, useRouter } from "next/navigation";
import { transactionHistory } from "@/constants";
import { createNewDue } from "@/lib/actions/due.action";
import Swal from "sweetalert2";


type referenceObj = {
	message: string;
	reference: string;
	status: "sucess" | "failure";
	trans: string;
	transaction: string;
	trxref: string;
};


const Dues = () => {
    const [plan, setplan] = useState('monthly');
    const [success, setSuccess] = useState
   (false);
   const [amount, setamount] = useState(6000)
    const [ref, setRef] = useState("");
	  const [email, setEmail] = useState("");
	  const [name, setName] = useState("");
	  const [surname, setSurname] = useState("");
	 const [phone, setPhone] = useState("");
	 const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
	 const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const router= useRouter();
   const pathname= usePathname();
	
   useEffect(() => {
     if(plan==='monthly'){
       setamount(500)
      } else if (plan==='bi-annual'){
        setamount(2500)
      }else if (plan === 'annual'){
       setamount(5000)
      }
	  }, [plan]);
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
		amount: (amount * 100) | 0,
		publicKey: 'pk_test_ece0d36011752069541699e8594f339dd08f4683',
		currency: "NGN",
	};

	const componentProps = {
        ...config,
        text: `Pay ₦${amount}`,
        onSuccess:(reference: referenceObj)=> {
          const data:any = reference	 
                setSuccess(true);
            setEmail("");
            setName("");
            setSurname("");
            setPhone("");
            
             if (data.status === "success") {
               createNewDue( 
             {
              name: name + " " + surname,
              email: email,
              amount:amount,
              plan:plan, 
              phoneNumber: phone, 
              path: pathname,
            }
            );
        setShowSuccessMessage(true);
        Swal.fire({
          title: "Congratulations!",
          text: `  Your ${plan} payment of ${amount} is successful, May Allah continue to provide for you.`,
          icon: "success",
          confirmButtonColor: '#085F32', // Set the background color for the OK button to green
          confirmButtonText: 'AMEN',
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
    <section>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full flexStart text-bold">Membership Dues Plans &gt; </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-full">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={plan} onValueChange={setplan} className='flex w-full'>
          <DropdownMenuRadioItem value="annual">Annual</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bi-annual">Bi-annual</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="monthly">Monthly</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
     </DropdownMenu>
     <div className='mt-9 bg-[#0000001a] p-3'>
        <h1 className="font-bold">Your Dues Account Details</h1>
        <div className='mt-3 h-0.5 w-full bg-[#00800052]' />
        <div className="flex flex-col mt-5 font-semibold">
        <div className="flex flex-row justify-between mt-2">
          <div className="">Amount to be paid 
          </div>
          <div> &#x20A6;{plan==='monthly' ? '6,000.00' : '5,000.00'}</div>
        </div>
        <div className='mt-5 flexCenter'>Your plan renews Yearly</div>
        </div>
        <div className='mt-3 h-0.5 w-full bg-[#00800052]' />
        <div className="flex flex-col justify-between mt-5 font-semibold">
           <div className='flex flex-row font-bold p-3 text-lg justify-center mb-3 '><div>Membership Due Payment form</div>
           {/* <div><Button className={`user-card_btn  bg-[#339c33a6] `} onClick={() => ('hello')} >
            View All
        </Button></div> */}
           </div>
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
				<label htmlFor="phone-number" className='text-base-semibold text-dark-2'>Your phone number</label>
				<input
					type="phone-number"
					id="phone-number"
          className='account-form_input no-focus'
          required
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
		 {showErrorMessage && (
          <div className="text-xl  flex flexCenter font-semibold
		  justify-center  text-light mt-1">
           Payment cancelled, please check yur internet connection and try again.
          </div>
         )} 
			<PaystackButton {...componentProps} className=' flex flecCenter justify-center p-3 bg-[#085F32] text-center text-white hover:text-zinc-600' />
		  </div>
             {/* {transactionHistory.map((list)=>(
               <div className='p-3' key={list.history}>{list.history}</div>
             ))} */}
        </div>
     </div>
    </section>
  )
} 

export default Dues;