import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import Nav from "@/components/nav";


const Header = () => {
  return (
    <header className="absolute w-full max-w-[1440px] py-8 xl:py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white">СТИМУЛ</h1>
          </Link>
          <div className="hidden xl:flex">
            <div className="flex items-center gap-x-12">
              <Nav
                containerStyles="flex items-center justify-between"
                listStyles="flex gap-x-12 text-white"
              />
              <Button
                variant="outline"
                className="px-10 h-[3.625rem]"
              >
                Book a room
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:hidden absolute right-8 top-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;