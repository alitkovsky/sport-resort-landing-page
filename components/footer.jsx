"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/socials";
import Nav from "@/components/nav";
import Waves from "@/components/waves";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <footer className="bg-green w-full overflow-hidden">
      <div className="bg-shore h-[523px]">
      <Waves />
      </div>
      <div className="section">
        <div
          // variants={fadeIn("up", 0.4)}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: false, amount: 0 }}
          className="grid-cols-subgrid col-span-12"
        >
          <div className="flex flex-col xl:flex-row rounded-xl min-h-[394px]">
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
              <p className="text-white leading-9">
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
        </div>
        <div className="grid-cols-subgrid col-span-12 grid py-12">
          <p className="col-span-6 text-white font-semibold">
            Copyright &copy; 2024. All rights reserved.
          </p>
          <Socials
            containerStyles="col-span-6 flex gap-x-4 text-white justify-self-end xl:mx-0"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer;