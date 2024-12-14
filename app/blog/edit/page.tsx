
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";


// Copy paste most of the code as it is from the /onboarding

async function Page() {

  return (
    <>
      <h1 className='head-text'>Edit Profile</h1>
      <p className='mt-3 text-base-regular text-light-2'>Make any changes</p>
    </>
  );
}

export default Page;