import { RiMagicLine, RiToolsLine, RiCompasses2Line, RiArrowRightLine } from "react-icons/ri";

const Steps = () => {
   return (
      <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
               <div className="steps__step text-center">
                  <div className="mb-4">
                     <RiCompasses2Line className="text-5xl text-accent mx-auto" />
                  </div>
                  <h3 className="h3 mb-5">Project Plannig</h3>
                  <p className="mb-5 max-w-md mx-auto">
                     There are many variations of the passages of lorem Ipsum from available, majority.
                  </p>
                  <a href="#" className="font-medium flex justify-center items-center gap-2">
                     Read more
                     <RiArrowRightLine className="text-accent" />
                  </a>
               </div>
               <div className="steps__step text-center">
                     <RiMagicLine className="text-5xl text-accent mx-auto" />
                  <div className="mb-4">
                  </div>
                  <h3 className="h3 mb-5">Gaining Materials</h3>
                  <p className="mb-5 max-w-md mx-auto">
                     There are many variations of the passages of lorem Ipsum from available, majority.
                  </p>
                  <a href="#" className="font-medium flex justify-center items-center gap-2">
                     Read more
                     <RiArrowRightLine className="text-accent" />
                  </a>
               </div>
               <div className="steps__step text-center">
                  <div className="mb-4">
                     <RiToolsLine className="text-5xl text-accent mx-auto" />
                  </div>
                  <h3 className="h3 mb-5">Project Execution</h3>
                  <p className="mb-5 max-w-md mx-auto">
                     There are many variations of the passages of lorem Ipsum from available, majority.
                  </p>
                  <a href="#" className="font-medium flex justify-center items-center gap-2">
                     Read more
                     <RiArrowRightLine className="text-accent" />
                  </a>
               </div>
            </div>
         </div>
      </section>
  );
};

export default Steps;