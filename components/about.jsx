"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "react-responsive";

import Stats from "@/components/stats";

const About = () => {
   const isMobile = useMediaQuery({
      query: "(max-width: 768px)",
   });

   const [ref, inView] = useInView({
      threshold: !isMobile ? 0.5 : null,
   });

   const slideInFromLeft = {
      hidden: {
        x: -200,
        opacity: 0
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "fadeIn",
          duration: 1,
          delay: 0.3
        }
      },
      exit: {
         x: -200,
         poacity: 0,
         transition: {
            duration: 1,
            delay: 0.4
         }
      }
    };

    const slideInFromRight = {
      hidden: {
        x: 200,
        opacity: 0
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "fadeIn",
          duration: 1,
          delay: 0.7,
          stiffness: 100
        }
      },
      exit: {
         x: 200, // move back to the right on exit
         opacity: 0,
         transition: {
           duration: 1, // smooth exit over 1 second
           delay: 0.3 // delay before starting the exit animation
         }
       }
    };

  return (
   <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row">
            <motion.div
               className="flex-1 relative"
               variants={slideInFromLeft}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.4 }}
            >
               <Image
                  src={"/about/img2.png"}
                  width={559}
                  height={721}
                  alt=""
               />
            </motion.div>
            <motion.div
               className="xl:max-w-[470px]"
               variants={slideInFromRight}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.4 }}
            >
               <h2 className="h2 mb-[38px]">About us</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia laborum in expedita similique dolorem, ratione recusandae ea dolorum laudantium nostrum inventore magni minus quidem distinctio quisquam porro alias incidunt?
               </p>
               <div className="my-5 xl:my-10 min-h-[35px]">
                  {inView && <Stats />}
               </div>
               <p className="mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia laborum in expedita similique dolorem, ratione recusandae ea dolorum laudantium nostrum inventore magni minus quidem distinctio quisquam porro alias incidunt?
               </p>
               <Button variant="accent">Explore More</Button>
            </motion.div>
         </div>
      </div>
   </section>
  );
};

export default About;