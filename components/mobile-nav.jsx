"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/components/nav";
import Socials from "@/components/socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-svh p-12">
          <Link href="/" className="mb-24">
            <Image
              src="/header/stimul-logo.svg"
              width={300}
              height={89}
              alt=""
              priority
            />
          </Link>
          <Nav
            containerStyles="text-black"
            listStyless="flex flex-col gap-y-6 text-xl"
          />
          <div>
            <Socials containerStyles="flex gap-x-4 text-black" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;