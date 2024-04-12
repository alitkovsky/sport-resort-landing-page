import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/socials";

const Footer = ({ containerStyles, linkStyles, links }) => {
   return (
      <section className="footer mt-[80px] xl:mt-[150px] relative z-20">
         <div className="container mx-auto px-0">
            <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
               <div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
                  <Link
                     href={"/"}
                     className="flex justify-center xl:justify-start mb-8"
                  >
                     <Image
                        src="/logo.svg"
                        width={177}
                        height={50}
                        alt="logo"
                     />
                  </Link>
                  <p className="mb-8 text-xl">
                     It is a long established fact that a reader will be distracted lookings.
                  </p>
                  <Socials
                     containerStyles="text-primary flex gap-[54px] justify-center xl:justify-start"
                  />
               </div>
               <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
                  <div className="footer__item">
                     <h3 className="h3 mb-3">
                        Pages
                     </h3>
                     <ul className="flex flex-col gap-4">
                        {links.map((link, index) => {
                           return (
                              <li key={index}>
                                 <Link
                                    href={link.url}
                                    className={`${linkStyles}`}
                                 >
                                    {link.name}
                                 </Link>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="footer__item">
                     <h3 className="h3 mb-3">
                        Services
                     </h3>
                     <ul className="flex flex-col gap-4">
                        <li>
                           <Link
                              href={"/"}
                              className={""}
                           >
                              Kitchen
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={"/"}
                              className={""}
                           >
                              Living Areas
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={"/"}
                              className={""}
                           >
                              Bathroom
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={"/"}
                              className={""}
                           >
                              Bedroom
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
                     <h3 className="h3 mb-3">Contact</h3>
                     <div className="flex flex-col gap-6 text-[20px]">
                        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                        <p>contact@interno.com</p>
                        <p>(123) 456 - 7890</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className="footer__copyright text-center text-lg py-10 bg-beige xl:border-t">
            Copyright © Interno 2024. All rights reserved.
         </p>
      </section>
   );
};

export default Footer;