"use client";

import Card from "@/components/card";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const destinationsData = [
   {
      id: 1,
      image: "/more/destination-1.png",
      name: "Estaing",
      location: "France",
   },
   {
      id: 2,
      image: "/more/destination-2.png",
      name: "Vík í Mýrda",
      location: "Iceland",
   },
   {
      id: 3,
      image: "/more/destination-3.png",
      name: "Harmony Village",
      location: "Norway",
   },
   {
      id: 4,
      image: "/more/destination-4.png",
      name: "Montego Bay",
      location: "Jamaica",
   },
];

const More = () => {
   const layoutClasses = [
      "col-span-4 row-span-2", // First card
      "col-span-4 h-[245px]",  // Second card
      "col-span-4",            // Third card
      "col-span-8",            // Fourth card
    ];
   return (
      <section className="section">
         <div className="grid-cols-subgrid col-span-10 col-start-2 flex flex-col items-center justify-center text-center pt-[100px]">
            <motion.h2
               className="font-script text-accent text-[200px] leading-[72%]"
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               more
            </motion.h2>
            <motion.h3
               className="text-[80px] font-circularBlack"
               variants={fadeIn("up", 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
               destinations
            </motion.h3>
            <div className="my-[50px] min-w-[56px] rounded-full self-center bg-divider">&nbsp;</div>
            <motion.p
               className="mx-w-[80%] text-grey-secondary font-circularBook text-[26px] mx-auto mb-[90px]"
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.2 }}
            >
                  Your peace of mind doesn’t have to be tied to where everyone else is. We have a good number of travel and relocation destinations. Take your time and find the perfect one for you.
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
            className="grid-cols-subgrid grid-rows-2 grid col-span-12 row-span-2 gap-[var(--grid--main-gutter)] bento-hover"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
         >
            {destinationsData.map((destination, index) => (
                  <Card key={destination.id} cardImg={destination.image} name={destination.name} location={destination.location} layoutClasses={`${layoutClasses[index]} bento-card`} />
               )
            )}
         </motion.div>
      </section>
  );
};

export default More;