import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiArrowRightSLine } from "react-icons/ri";

const News = () => {
   return (
      <section className="news mt-[80px] xl:mt-[150px] relative z-20">
         <div className="container mx-auto px-0">
            <div className="max-w-[810px] mx-auto text-center mb-[52px]">
               <h2 className="news__title h2 mb-3">
                  Articles and News
               </h2>
               <p className="news__subtitle">
                  It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
               </p>
            </div>

            <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
               <div className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                  <Image
                     src="/news/01.png"
                     width={340}
                     height={290}
                     alt=""
                     className="mb-5"
                  />
                  <div className="flex flex-col gap-[30px]">
                     <h3 className="h3">
                        Lets Get Solution For Building Construction Work
                     </h3>
                     <div className="flex items-center justify-between">
                        <p className="text-base">22 June, 2024</p>
                        <Button
                           variant="rounded"
                           size="sm"
                        >
                           <RiArrowRightSLine
                              className="text-primary pl-1 text-3xl"
                           />
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                  <Image
                     src="/news/02.png"
                     width={340}
                     height={290}
                     alt=""
                     className="mb-5"
                  />
                  <div className="flex flex-col gap-[30px]">
                     <h3 className="h3">
                        Low Cost Latest Invented Interior Designing Ideas.
                     </h3>
                     <div className="flex items-center justify-between">
                        <p className="text-base">24 June, 2024</p>
                        <Button
                           variant="rounded"
                           size="sm"
                        >
                           <RiArrowRightSLine
                              className="text-primary pl-1 text-3xl"
                           />
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                  <Image
                     src="/news/03.png"
                     width={340}
                     height={290}
                     alt=""
                     className="mb-5"
                  />
                  <div className="flex flex-col gap-[30px]">
                     <h3 className="h3">
                        Best For Any Office & Business Interior Solution
                     </h3>
                     <div className="flex items-center justify-between">
                        <p className="text-base">28 June, 2024</p>
                        <Button
                           variant="rounded"
                           size="sm"
                        >
                           <RiArrowRightSLine
                              className="text-primary pl-1 text-3xl"
                           />
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default News;