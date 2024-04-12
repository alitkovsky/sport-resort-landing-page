"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSwiper = () => {

   return (
      <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20">
         <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
            <div className="flex flex-col items-center pt-[88px] pb-[110px]">
               <h2 className="testimonial__title h2 mb-9 text-center">What clients say</h2>

               <div className="w-full">
                  <Swiper
                     className="testimonial__slider swiper h-[400px]"
                     loop={true}
                     cssMode={true}
                     pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                     }}
                     modules={[Pagination]}
                     slidesPerView={3}
                     spaceBetween={20}
                     breakpoints={{
                        320: {
                           slidesPerView: 1,
                        },
                        960: {
                           slidesPerView: 2,
                        },
                        1200: {
                           slidesPerView: 3,
                        },
                           }}
                     >
                     <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                           <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                              <div className="flex gap-4 mb-6">
                                 <Image
                                    src="/testimonial/01.png"
                                    width={77}
                                    height={77}
                                    alt=""
                                 />
                                 <div>
                                    <h3 className="h3">Nattasha Mith</h3>
                                    <div>Greenville, USA</div>
                                 </div>
                              </div>
                              <p>
                                 Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                              </p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                              <div className="flex gap-4 mb-6">
                                 <Image
                                    src="/testimonial/02.png"
                                    width={77}
                                    height={77}
                                    alt=""
                                 />
                                 <div>
                                    <h3 className="h3">Jessica White</h3>
                                    <div>Oak Ridge, USA</div>
                                 </div>
                              </div>
                              <p>
                                 Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                              </p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                              <div className="flex gap-4 mb-6">
                                 <Image
                                    src="/testimonial/03.png"
                                    width={77}
                                    height={77}
                                    alt=""
                                 />
                                 <div>
                                    <h3 className="h3">Mike Davis</h3>
                                    <div>Berlin, Germany</div>
                                 </div>
                              </div>
                              <p>
                                 Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                              </p>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                           <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                              <div className="flex gap-4 mb-6">
                                 <Image
                                    src="/testimonial/04.png"
                                    width={77}
                                    height={77}
                                    alt=""
                                 />
                                 <div>
                                    <h3 className="h3">Olivia Wilson</h3>
                                    <div>Blue Ridge, France</div>
                                 </div>
                              </div>
                              <p>
                                 Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                              </p>
                           </div>
                        </SwiperSlide>
                     </div>
                     <div className="swiper-pagination"></div>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
  );
};

export default TestimonialsSwiper;