import Footer from "@/components/landing/Footer"
import Navbar from "@/components/landing/Navbar";
import { Metadata } from "next"
// import { Inter } from "next/font/google"
import "../globals.css";
// const inter = Inter({ subsets: ['latin'] })
import { addDays, addHours } from 'date-fns';
import Countdown from '@/components/ui/Countdown';


export const metadata: Metadata = {
  title: 'THE DAWN',
  description: 'A website for all pious muslims',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentDate = new Date();
  const launchDate = addHours(addDays(currentDate, 7), 5);

  // Check if the current date is after the launch date
  const launchDateReached = true 
  //currentDate >= launchDate;

  return (
    
    <html lang="en">
      <body >
      {launchDateReached ? (
  // Real page content when launch date has been reached
  <div>
    {/* // bg-[#1ca39333] */}
      <Navbar />
      <main className="flex w-[100vw] bg-[#ffff] "> 
        {children}
      </main>
      <Footer/>
   </div>
) : (
  // Countdown when launch date has not been reached
  <div className='flex flexCenter flex-col mt-[40vh] gap-5 text-bold font-bold '>
    <h1>Website Launch Countdown</h1>
    <Countdown  />
  </div>
)}
 </body>
    </html>
  )
}
