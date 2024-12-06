"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Featured = () => {
  return (
    <motion.section
      className="bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2}}
    >
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-[30px]">
        <Image
          className="xl:mr-[50px]"
          src="/featured/icon.svg"
          width={73}
          height={84}
          alt=""
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Book an awesome room in less than a minute.
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque numquam alias asperiores, cupiditate commodi voluptatem vitae vel, culpa eligendi dicta suscipit nihil nisi doloribus fugiat tempora sit minus maxime perferendis!
        </p>
      </div>
    </motion.section>
  );
};

export default Featured;