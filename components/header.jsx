import Image from "next/image";

import Nav from "@/components/nav";
import MobileNav from "@/components/mobile-nav";

const Header = ({ links }) => {
  return (
    <>
      <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-beige">
        <div className="container mx-auto flex justify-between h-full items-center">
          <a href="" className="uppercase font-logo font-bold text-[2rem]">
            Стимул
          </a>
          <Nav
               containerStyles="hidden xl:flex flex-col gap-4 lg:flex lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none font-secondary transition-all duration-300"
               linkStyles="capitalize list-none cursor-pointer"
               links={links}
            />
            {/* <ScrollLink to="reservation" smooth={true}>
               <Button variant="orange" size="sm">
                  Book a table
               </Button>
            </ScrollLink> */}
            <MobileNav
               containerStyles="xl:hidden lg:hidden"
               linkStyles="flex capitalize list-none cursor-pointer"
               links={links}
            />
        </div>
      </header>
    </>
  );
};

export default Header;