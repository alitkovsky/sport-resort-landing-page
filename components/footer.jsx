"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/socials";
import Nav from "@/components/nav";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12">
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href='/'>
                <Image
                  src="/footer/logo.svg"
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p className="text-black leading-9">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti neque illum harum pariatur distinctio.
              </p>
            </div>
            <div className="flex xl:gap-x-16 xl:ml-32">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <Nav
                  containerStyles=""
                  listStyles="flex flex-col gap-y-6 text-lg"
              />
              </div>
              <div className="flex-1 xl:w-[300px]">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+12 345 678901</li>
                  <li>info@stimul-hotel.com</li>
                  <li>stimul-hotel.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col xl:flex-row xl:justify-between py-12 xl:-mt-32">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2024. All rights reserved.
          </p>
          <Socials
            containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer;