import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiPhoneFill, RiArrowRightLine } from "react-icons/ri";

const About = () => {
   return (
      <section className="about mt-[80px] xl:mt-[200px] relative z-20">
         <div className="container mx-auto xl:px-0">
            <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
               <div className="about__text flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
                  <h2 className="h2">
                     Спортивный центр "Стимул"
                  </h2>
                  <p>
                     это частный отель, созданный для популяризации спорта и здорового образа жизни. Уже более 15 лет мы усердно работаем над улучшением предлагаемых услуг, увеличиваем количество спортивных объектов и уровень компетентности наших специалистов. Расположение в уединенном месте, вдали от дорог и шумных мест, позволяет нашим гостям полноценно отдохнуть, восстановить своё здоровье и улучшить свои спортивные показатели.
                  </p>

                  <div className="flex items-center justify-center xl:justify-start gap-4">
                     <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                        <RiPhoneFill className="text-accent text-4xl" />
                     </div>
                     <dix className="text-left">
                        <div className="text-2xl font-bold">978 844 19 28</div>
                        <div>Всегда рады помочь</div>
                     </dix>
                  </div>
                  {/* <Button className="mx-auto xl:mx-0">
                     Get free estimation
                     <RiArrowRightLine className="text-accent" />
                  </Button> */}
               </div>
               <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
                  <Image
                     src="/about/img.png"
                     width={653}
                     height={700}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </section>
  );
};

export default About;