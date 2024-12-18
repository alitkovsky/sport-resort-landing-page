"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const hotelData = [
   {
      image: "/find/hotel-1.png",
      name: "Hotel De Luna",
      location: "Singapore",
   },
   {
      image: "/find/hotel-2.png",
      name: "Inna Tretes Hotel",
      location: "Singapore",
   },
   {
      image: "/find/hotel-3.png",
      name: "Felight Hotel",
      location: "Singapore",
   },
   {
      image: "/find/hotel-4.png",
      name: "Mercusuar Hotel",
      location: "Singapore",
   },
];

const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
         <div className="text-center">
            <motion.h2
               className="h2 mb-6"
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               Find your best hotel
            </motion.h2>
            <motion.p
               className="mx-w-[638px] mx-auto mb-8"
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia qui iste mollitia fugiat animi est possimus earum doloribus laboriosam tempore ipsum, quis adipisci, labore repudiandae cupiditate odio pariatur recusandae?
            </motion.p>
            <motion.div
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
            </motion.div>
         </div>
         <motion.div
            className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
         >
            {hotelData.map((hotel, index) => {
               return (
                  <div
                     key={index}
                     className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
                  >
                     <Image
                        src={hotel.image}
                        width={270}
                        height={270}
                        alt=""
                     />
                     <div className="p-6">
                        <h4 className="h4 group-hover:text-white transition-all duration-300">
                           {hotel.name}
                        </h4>
                        <p className="group-hover:text-white transition-all duration-300">{hotel.location}</p>
                     </div>
                  </div>
               )
            })}
         </motion.div>
      </div>
    </section>
  );
};

export default Find;