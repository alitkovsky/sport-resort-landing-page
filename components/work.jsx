import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiArrowRightSLine } from "react-icons/ri";

const Work = () => {
   return (
      <section className="work mt-[80px] xl:mt-[150px] relative z-20">
         <div className="container mx-auto xl:px-0">

            <div className="text-center mb-24">
               <h2 className="h2 work__title mb-4">
                  Follow Our Projects
               </h2>
               <p className="work__subtitle max-w-3xl mx-auto">
                  It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
               </p>
            </div>

            <div className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">

               <div className="w-full max-w-[548px] h-full mx-auto">
                  <Image
                     src="/work/01.png"
                     width={548}
                     height={525}
                     alt=""
                     className="mb-6"
                  />
                  <div className="flex justify-between items-center w-full">
                     <div>
                        <h3 className="h3">Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                     </div>
                     <Button
                        variant="rounded"
                        size="md"
                     >
                        <RiArrowRightSLine
                           className="text-primary pl-1 text-3xl h-16"
                        />
                     </Button>
                  </div>
               </div>
               <div className="w-full max-w-[548px] h-full mx-auto">
                  <Image
                     src="/work/02.png"
                     width={548}
                     height={525}
                     alt=""
                     className="mb-6"
                  />
                  <div className="flex justify-between items-center w-full">
                     <div>
                        <h3 className="h3">Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                     </div>
                     <Button
                        variant="rounded"
                        size="md"
                     >
                        <RiArrowRightSLine
                           className="text-primary pl-1 text-3xl h-16"
                        />
                     </Button>
                  </div>
               </div>
               <div className="w-full max-w-[548px] h-full mx-auto">
                  <Image
                     src="/work/03.png"
                     width={548}
                     height={525}
                     alt=""
                     className="mb-6"
                  />
                  <div className="flex justify-between items-center w-full">
                     <div>
                        <h3 className="h3">Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                     </div>
                     <Button
                        variant="rounded"
                        size="md"
                     >
                        <RiArrowRightSLine
                           className="text-primary pl-1 text-3xl h-16"
                        />
                     </Button>
                  </div>
               </div>
               <div className="w-full max-w-[548px] h-full mx-auto">
                  <Image
                     src="/work/04.png"
                     width={548}
                     height={525}
                     alt=""
                     className="mb-6"
                  />
                  <div className="flex justify-between items-center w-full">
                     <div>
                        <h3 className="h3">Modern Kitchen</h3>
                        <p>Decor/Architecture</p>
                     </div>
                     <Button
                        variant="rounded"
                        size="md"
                     >
                        <RiArrowRightSLine
                           className="text-primary pl-1 text-3xl h-16"
                        />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Work;