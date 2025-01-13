"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import MobileNav from "@/components/mobile-nav";
import Nav from "@/components/nav";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobileViewport(window.innerWidth < 1020);
        if (window.innerWidth >= 1020) {
          setIsMobileNavOpen(false);
        }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="section fixed z-50 top-0 w-full h-[82px]">
      <div className="header w-full h-full subgrid grid col-span-12 items-center rounded-xl px-[40px]">
          <Link href="/" className="col-span-4">
            <h1 className="text-[82px] font-script text-accent-secondary hover:text-accent blend">relocate</h1>
          </Link>
          <div className="col-span-8 col-start-5 self-center place-self-end">
          {!isMobileViewport && (
               <Nav />
            )}

            {isMobileViewport && (
               <MobileNav
                  toggleMobileNav={toggleMobileNav}
                  isMobileNavOpen={isMobileNavOpen}
               />
            )}

            {isMobileViewport && isMobileNavOpen && (
               <div
                  className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 bg-accent ${
                     isMobileNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onClick={closeMobileNav}
               >
                  <Nav
                     onNavClick={closeMobileNav}
                     isMobile={true}
                  />
               </div>
            )}
          </div>
      </div>
    </header>
  );
};

export default Header;