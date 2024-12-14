import Image from "next/image"
import AccordionUi from "../cards/AccordionUi"


const Faq = () => {
  return (
    <section className="bg-[#FB374805] flex flex-col gap-5 text-[#183115]">
        <div className="justify-between align-middle flex flex-row px-3 pt-5 text-center" id="faq">
          <div className="flex justify-center align-middle font-bold text-[25px] text-[#183115]">FAQs</div>
          <div className="flex text-[15px] align-middle pt-2.5 text-[#333333]">See More</div>
        </div>
       <AccordionUi />
    </section>
  )
}

export default Faq;