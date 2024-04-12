import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
   return (
      <>
         <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>

         <section className="hero h-[640px] w-full xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed bg-slate-500/80 bg-blend-multiply xl:rounded-bl-[290px] relative z-20">
            <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
               <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
                  <h1 className="h1 mb-8 text-beige">
                     Спортивные сборы в Крыму
                  </h1>
                  <p className="mb-8 text-beige">
                     Специальные предложения для спортивных школ. Спортивные сборы по футболу, водным видам спорта. А так же танцам и другим видам спорта.
                  </p>
                  <Button className="mx-auto xl:mx-0 text-[#f7e6d3]">
                     Get free estimation
                     <RiArrowRightLine
                        className="text-accent"
                     />
                  </Button>
               </div>
            </div>
         </section>
      </>
  );
};

export default Hero;