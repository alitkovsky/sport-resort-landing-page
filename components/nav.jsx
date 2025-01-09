"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/",
    name: "Find Hotel"
  },
  {
    path: "/",
    name: "About Us"
  },
  {
    path: "/",
    name: "Contact Us"
  },
]

const Nav = ({ onNavClick = () => {}, isMobile = false }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.6, // section is active when 60% is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setActiveSection(entry.target.id); // update active section
          }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
        sections.forEach((section) => observer.unobserve(section)); // cleanup observer
    };
  }, []);

  const isActive = (id) => activeSection === id;

  return (
    <>
      <nav className={`${isMobile ? "flex flex-col items-center z-90" : ""} main-nav`}>
        <ul className={`${isMobile ? "" : ""}`}>
            {links.map((link, index) => (
              <li key={index}>
                  <Link
                    onClick={(event) => {
                        ScrollToSection(link.path, event);
                        onNavClick();
                    }}
                    href=""
                    scroll={false}
                    aria-label={link.name}
                    aria-current={isActive(link.name) ? "true" : "false"}
                    className={`decoration text-[var(--color-black)] font-circularMedium ${isActive(link.path) ? "active" : ""} ${isMobile ? "pt-4 top-0" : ""}`}
                  >
                    {link.name}
                  </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;