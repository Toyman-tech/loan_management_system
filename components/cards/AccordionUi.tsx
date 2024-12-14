import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const AccordionUi = () =>{
    return (
      <Accordion type="single" collapsible  className="w-full px-3 py-1.5 text-[#183115] ">
        <AccordionItem value="item-1">
          <AccordionTrigger className='font-[500]text-[15px] max-xs:text-[13px] hover:no-underline'>How many Districts does the Dawn have?</AccordionTrigger>
            <AccordionContent className="text-[#777777]">
          The Dawn has 5 major districts located in 5 States. Kwara, Osun, Oyo, Lagos state and the FCT. We are constantly expanding and may soon be in a location near you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='font-[500] text-[15px]  hover:no-underline'>What's the Age limit for membership?</AccordionTrigger>
          <AccordionContent className="text-[#777777]">
          Membership starts from pre teen years (8), to early adulthood
          </AccordionContent >
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='font-[200]text-[10px] hover:no-underline'>How many programs are held in a year?</AccordionTrigger>
          <AccordionContent className="text-[#777777]">
          Programs and activities are organised both at the national and district levels. The national organises two major events in a year which are Dawah Holiday Program (DHP) and the. National Summit. The districts are given a list of programmes to be executed by the national body and also have the liberty to organise some other activities independently. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className='font-[500] text-[15px] hover:no-underline'> What's DHP?</AccordionTrigger>
          <AccordionContent className="text-[#777777]">
          Dawah Holiday Programme is an annual 10 day event that is targeted at building the spiritual, intellectual and social aspects of the life of Muslims while ensuring that they also use the platform to connect with more Muslims from across Nigeria. The event holds every 23rd December - 1st January.
          </AccordionContent >
          </AccordionItem>
          <AccordionItem value="item-5">
          <AccordionTrigger className='font-[500] text-[15px] hover:no-underline'> How to become a member?
          </AccordionTrigger>
          <AccordionContent className="text-[#777777]">
          You can become a member by registering through our membership registration portal.  Or by reaching out to the district Amir of your state or the national secretary of the association.
          </AccordionContent >
        </AccordionItem>
      </Accordion>
    )
  }
  
  export default AccordionUi;