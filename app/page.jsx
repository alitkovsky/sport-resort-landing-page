"use client";

import "remixicon/fonts/remixicon.css";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Steps from "@/components/steps";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Partners from "@/components/partners";
import Work from "@/components/work";
import Stats from "@/components/stats";
import News from "@/components/news";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import linksData from "@/data/links.json";

export default function Home() {

  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 600,
  });

  useEffect(() => {
    // hero
    sr.reveal(".hero__text", { origin: "top" });

    // steps
    sr.reveal(".steps__step", { distance: "100px", interval: 100 });

    // about
    sr.reveal(".about__img", { origin: "right", delay: 800 });
    sr.reveal(".about__text", { origin: "left" });

    // testimonial
    sr.reveal(".testimonial__bg", { delay: 800 });
    sr.reveal(".testimonial__slider", { delay: 1000 });
    sr.reveal(".testimonial__title");

    // brands
    sr.reveal(".brands__img", { delay: 600, interval: 100, distance: "100px" });

    // work
    sr.reveal(".work__title");
    sr.reveal(".work__subtitle", { delay: 800 });
    sr.reveal(".work__grid", { delay: 1000 });

    // stats
    sr.reveal(".stats");
    sr.reveal(".stats__item", { distance: "100px", interval: 100});

    // news
    sr.reveal(".news__title");
    sr.reveal(".news__subtitle", { delay: 800 });
    sr.reveal(".news__item", { delay: 1000, distance: "100px", interval: 100});

    // contact
    sr.reveal(".contact__container");
    sr.reveal(".contact__text", { delay: 800 });

    // footer
    sr.reveal(".footer__item", { distance: "100px", interval: 100 });
    sr.reveal(".footer__copyright");
  }, [sr]);

  return (
    <main className="flex flex-col w-full max-w-[1440px] mx-auto bg-beige overflow-hidden min-h-svh">
      <Header links={linksData} />
      <Hero />
      <About />
      <Steps />
      <Testimonials />
      <Partners />
      <Work />
      <Stats />
      <News />
      <Contact />
      <Footer links={linksData} />
    </main>
  );
};