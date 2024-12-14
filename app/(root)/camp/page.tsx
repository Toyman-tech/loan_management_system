import CampPortal from "@/components/forms/CampPortal";




async function Page() {
  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 max-sm:px-[0.5rem]  py-20  bg-[#1ca39333]'>
      <h1 className='head-text text-center '>DHP REGISTRATION FORM </h1>
      <p className='mt-3 text-base-regular text-dark-3 px-3 max-sm:text-center'>
      THE DAWN, youth wing of The Companion and The Criterion is an organization of 
      highly motivated and focused Muslim youths and young adults with a shared goal of 
     learning and propagating Islam, while making significant impact in the society we live 
     in and the religion we practice. The organization is currently present in Oyo, Osun, Kwara, Lagos and Abuja.
      </p>

      <section className='mt-9 bg-[#0000001a] p-6 mx-2'>
        <CampPortal  />
      </section>
    </main>
  );
}

export default Page;