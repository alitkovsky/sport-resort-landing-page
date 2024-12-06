"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const testimonialsData = [
   {
      img: "/testimonials/img-1.png",
      message:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iste, fugiat magni laboriosam repellendus maxime voluptatum, ad atque obcaecati sapiente consequatur quos, minus pariatur corrupti beatae! Suscipit iste inventore assumenda iure facilis, aspernatur itaque aliquid.",
      authorName: "Rober Rene",
      location: "Singapore",
   },
   {
      img: "/testimonials/img-2.png",
      message:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iste, fugiat magni laboriosam repellendus maxime voluptatum, ad atque obcaecati sapiente consequatur quos, minus pariatur corrupti beatae! Suscipit iste inventore assumenda iure facilis, aspernatur itaque aliquid.",
      authorName: "Rober Rene",
      location: "Singapore",
   }
];

const Testimonials = () => {
  return (
    <motion.section
      className="bg-soft_green xl:h-[880px]"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
   >
      <motion.div
         className="container mx-auto"
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
      >
         <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="xl:h-[680px] overflow-hidden"
         >
            {testimonialsData.map((slide, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                        <Image
                           src={slide.img}
                           width={470}
                           height={470}
                           alt=""
                           className="hidden xl:flex"
                        />
                        <div className="flex-1 bg-white/20 text-white p-12">
                           <p className="text-lg leading-9 mb-8">
                              {slide.message}
                           </p>
                           <p className="text-xl font-bold">
                              {slide.authorName}
                           </p>
                           <p>{slide.location}</p>
                        </div>
                     </div>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;