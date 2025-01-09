"use client";

import Card from "@/components/card";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const hotelData = [
   {
      id: 1,
      image: "/find/hotel-1.png",
      name: "Hotel De Luna",
      location: "Singapore",
   },
   {
      id: 2,
      image: "/find/hotel-2.png",
      name: "Inna Tretes Hotel",
      location: "Singapore",
   },
   {
      id: 3,
      image: "/find/hotel-3.png",
      name: "Felight Hotel",
      location: "Singapore",
   },
   {
      id: 4,
      image: "/find/hotel-4.png",
      name: "Mercusuar Hotel",
      location: "Singapore",
   },
];

const Find = () => {
  return (
    <section className="section feature">
         <div className="grid-cols-subgrid col-span-10 col-start-2 flex flex-col items-center justify-center text-center">
            <motion.h2
               className="font-script text-accent-secondary text-[200px] leading-[52%]"
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               top
            </motion.h2>
            <motion.h3
               className="text-white text-[80px] font-circularBlack"
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               destinations
            </motion.h3>
            <div className="my-[50px] min-w-[56px] rounded-full self-center bg-white/20">&nbsp;</div>
            <motion.p
               className="mx-w-[80%] text-white font-circularBook text-[26px] mx-auto mb-[90px]"
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
                It’s hard enough deciding to move, you don’t have to worry about where to move to. These are some of the most popular and best locations to move to based on a  number of factors.
            </motion.p>
            {/* <motion.div
               variants={fadeIn("up", 0.6)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               <Button
                  variant="accent"
                  className="px-12 mb-14 xl:mb-28"
               >
                  View All
               </Button>
            </motion.div> */}
         </div>
         <motion.div
            className="grid-cols-subgrid grid col-span-12 gap-[var(--grid--main-gutter)] group"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
         >
            {hotelData.map((hotel) => (
                  <Card key={hotel.id} cardImg={hotel.image} name={hotel.name} location={hotel.location} layoutClasses="col-span-6 md:col-span-3 h-[353px] lg:h-[553px]" />
               )
            )}
         </motion.div>
    </section>
  );
};

export default Find;