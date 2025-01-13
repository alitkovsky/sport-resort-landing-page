"use client";

import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/socials";
import Nav from "@/components/nav";
import Waves from "@/components/waves";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import path from "path";



const product = [
  {
    path: "/",
    name: "Why Relocate?",
  },
  {
    path: "/",
    name: "Features",
  },
  {
    path: "/",
    name: "Omnichannel",
  },
  {
    path: "/",
    name: "Community",
  },
  {
    path: "/",
    name: "Webinars",
  },
  {
    path: "/",
    name: "Marketplace",
  }
];

const company = [
  {
    path: "/",
    name: "Team",
  },
  {
    path: "/",
    name: "About",
  },
  {
    path: "/",
    name: "Jobs",
  },
  {
    path: "/",
    name: "Partners",
  },
  {
    path: "/",
    name: "Press",
  },
  {
    path: "/",
    name: "Blog",
  },
  {
    path: "/",
    name: "Newsletter",
  }
];

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
            className="flex-1 absolute bottom-[-10px] w-full video-overlay bg-shore bg-no-repeat bg-cover bg-bottom"
          ></div>
        </div>
      </div>
      <div className="section">
        <div className="grid-cols-subgrid col-span-12 grid pb-[40px]">
            <div className="col-span-4 lg:col-span-5">
            <h1 className="text-[82px] font-script text-accent-secondary hover:text-accent blend mb-[20px]">relocate</h1>
              <p className="text-[var(--color-grey)] leading-9 font-circularBook text-[16px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti neque illum harum pariatur distinctio.
              </p>
            </div>
            <div className="col-span-3 justify-self-center text-center">
              <div className="flex-1 xl:w-[300px]">
                <h4 className="mb-6 font-circularBlack text-[16px] text-[var(--color-grey)]">Product</h4>
                <ul className="flex flex-col text-[16px] font-circularBook text-[var(--color-grey)]">
                  {product.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-3 justify-self-center text-center">
              <div className="flex-1 xl:w-[300px] text-[var(--color-grey)]">
                <h4 className="mb-6 font-circularBlack text-[16px] text-[var(--color-grey)]">Company</h4>
                <ul className="flex flex-col text-[16px] font-circularBook text-[var(--color-grey)]">
                  {company.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 justify-self-center content-center">
              <div className="flex-1 text-[var(--color-grey)]">
                <Socials containerStyles="flex flex-col gap-y-[28px]" />
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;