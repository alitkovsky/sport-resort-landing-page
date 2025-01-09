import Image from "next/image";
import SearchBox from "@/components/search-box";

const Hero = () => {
  return (
    <section className="section w-full h-[100dvh] bg-hero bg-cover bg-bottom bg-no-repeat grid grid-cols-12 items-baseline">
      <h2 className="subgrid col-span-12 font-script text-accent-secondary text-[300px] drop-shadow-xl self-end mb-[120px]">make the right</h2>
      <div className="subgrid col-span-12 h-[128px] flex justify-between z-10">
        <h1 className="text-white text-[300px] font-circularBlack drop-shadow-xl">move.</h1>
        <div className="hidden xl:flex gap-x-4 self-end">
          <div className="w-[56px] h-[56px] bg-white/20 rounded-full border border-white border-dashed justify-center flex">
            <Image
              width={32}
              height={58}
              src="/hero/arrow-down.svg"
              alt=""
              className="absolute mt-[-15px]"
            />
          </div>
          <div className="flex flex-col font-circularMedium text-white text-[18px] uppercase leading-[20px] justify-center">
            <p>explore</p>
            <p>destinations</p>
          </div>
        </div>
      </div>
   </section>
  );
};

export default Hero;