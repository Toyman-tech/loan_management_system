
import { redirect } from 'next/navigation';
import { fetchUser, fetchUsers, getActivity } from '@/lib/actions/user.actions';
import Link from 'next/link';
import Image from 'next/image';
 

const Page = async  () => {
  
  return (
   <section>
      <h1 className='head-text mb-10'>
        Activity
      </h1>
      
    </section>
  
  )
}
  
  export default Page;