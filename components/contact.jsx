import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "react-icons/ri";

const Contact = () => {
   return (
      <section className="news mt-[80px] xl:mt-[150px] relative z-20">
         <div className="contact__container container mx-auto bg-primary sm:rounded-[70px] py-[80px]">
            <div className="contact__text max-w-[640px] mx-auto text-center">
               <h2 className="h2 text-white mb-4">Do you want to join Interno?</h2>
               <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
                  It is a long established fact will be distracted.
               </p>
               <Button
                  variant="accent"
                  className="mx-auto"
               >
                  Get free estimation
                  <RiArrowRightLine
                     className="text-primary"
                  />
               </Button>
            </div>
         </div>
      </section>
   );
};

export default Contact;