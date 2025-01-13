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
      <div className="h-[523px] w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
        >
          <source src="/footer/bg-waves.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay flex-col">
          <div
            className="flex-1 video-overlay"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 60%)",
            }}
          ></div>
          <div
            className="flex-1 video-overlay bg-shore bg-no-repeat bg-contain bg-bottom"
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="grid-cols-subgrid col-span-12 grid">
            <div className="col-span-3">
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
            <div className="col-span-3">
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
            <div className="col-span-3">
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
            <div className="col-span-3">
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
        <p className="col-span-12 text-white font-semibold">
            Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;