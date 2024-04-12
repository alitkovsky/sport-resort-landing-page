import Image from "next/image";

const Partners = () => {
   return (
      <section className="brands mt-[80px] xl:mt-[150px] relative z-20">
         <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
               <Image
                  src="/brands/01.svg"
                  width={132}
                  height={44}
                  alt=""
               />
               <Image
                  src="/brands/02.svg"
                  width={103}
                  height={103}
                  alt=""
                  className="brands__img"
               />
               <Image
                  src="/brands/03.svg"
                  width={164}
                  height={44}
                  alt=""
                  className="brands__img"
               />
               <Image
                  src="/brands/04.svg"
                  width={146}
                  height={45}
                  alt=""
                  className="brands__img"
               />
               <Image
                  src="/brands/05.svg"
                  width={118}
                  height={48}
                  alt=""
                  className="brands__img"
               />
            </div>
         </div>
      </section>
  );
};

export default Partners;