"use client";

import React, { useState } from "react";
import { RiMenu4Line, RiMenuLine } from "react-icons/ri";
import {Link as ScrollLink} from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNav = ({ containerStyles, linkStyles, links }) => {
   const [isOpen, setIsOpen] = useState(false);

  return (
   <div className={`${containerStyles}`}>
      <div
         className="cursor-pointer outline-none"
         onClick={() => setIsOpen(!isOpen)}
      >
         <RiMenu4Line className="text-3xl transition-all duration-300" />
      </div>
      <aside
         className={`${
            isOpen ? "right-0" : "-right-full"
         } bg-beige fixed z-20 w-full t-10 top-[90px] bottom-0 transition-all duration-500`}
      >
         <div className="container flex flex-col justify-between mx-auto">
            <ul className="flex flex-col gap-y-4">
               {links.map((link, index) => {
                  return (
                     <li
                        key={index}
                        offset={link.offset}
                        onClick={() => setIsOpen(false)}
                        className={`${linkStyles}`}
                     >
                        <a href={link.url}>{link.name}</a>
                     </li>
                  );
               })}
            </ul>
            {/* <ScrollLink
               to="reservation"
               smooth
               offset={-150}
            >
               <Button
                  variant="outline"
               >
                  Book a table
               </Button>
            </ScrollLink> */}
         </div>
      </aside>
   </div>
  );
};

export default MobileNav;