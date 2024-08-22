"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import ProductDropdown from "./ProductDropdown";
import SolutionDropdown from "./SolutionDropdown";
import ResourcesDropdown from "./ResourceDropdown";
import AboutLink from "./AboutLink"; // Import the new component

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolledPastSection, setHasScrolledPastSection] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("first-section");
      if (section) {
        const sectionBottom = section.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        setHasScrolledPastSection(sectionBottom < 0);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize scroll state
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]);

  const navbarClasses = isHomePage
    ? `w-full fixed top-0 z-20 transition-colors duration-300 ease-in-out ${hasScrolledPastSection ? "bg-white text-text-color shadow-lg" : "bg-transparent text-white"
    }`
    : "w-full fixed top-0 z-20 bg-white text-text-color shadow-lg";

  const signInButtonClass = `rounded-full px-6 py-3 font-semibold ${isHomePage && !hasScrolledPastSection ? "bg-white text-accent-color" : "bg-accent-color text-white"
    }`;

  return (
    <section className={navbarClasses}>
      <div className="flex h-[80px] container items-center justify-between">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/">
            <Image
              className="w-[100px] md:w-[130px] lg:w-[160px] h-[30px]"
              src={
                isHomePage
                  ? hasScrolledPastSection
                    ? "/edge-sense-logo.svg"
                    : "/edgesense-logo-white.png"
                  : "/edge-sense-logo.svg"
              }
              alt="EdgeSense Logo"
              width={130}
              height={30}
            />
          </Link>
          <div className="hidden md:flex">
            <AboutLink isTransparent={isHomePage && !hasScrolledPastSection} isHomePage={isHomePage} />
            <ProductDropdown isTransparent={isHomePage && !hasScrolledPastSection} />
            <SolutionDropdown isTransparent={isHomePage && !hasScrolledPastSection} />
            <ResourcesDropdown isTransparent={isHomePage && !hasScrolledPastSection} />
          </div>
        </div>
        <div className="flex items-center">
          <Link href="/" className={`${signInButtonClass} hidden md:inline-block`}>
            Sign In
          </Link>
          <div className="block md:hidden">
            <RiMenu3Line className="text-3xl" onClick={toggleMenu} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-20 p-4 flex flex-col gap-4">
          <div className="relative flex flex-col items-center gap-6">
            <button className="absolute top-4 right-4 text-3xl" onClick={closeMenu}>
              <RiCloseLine className="text-text-color" />
            </button>
            <div className="grid gap-10 justify-center mt-[100px]">
              <details>
                <summary className="h4 text-text-color font-semibold text-center">Products</summary>
                <ul className="flex flex-col gap-4 mt-4 items-center">
                  <li><Link className="text-text-color h5" href="/products/edgevision">EdgeVision</Link></li>
                  <li><Link className="text-text-color h5" href="/products/edgenode">EdgeNode</Link></li>
                  {/* <li><Link className="text-text-color h5" href="#">New Product</Link></li> */}
                </ul>
              </details>
              <details>
                <summary className="h4 text-text-color font-semibold text-center">Solutions</summary>
                <ul className="flex flex-col gap-4 mt-4 items-center">
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Energy Management System</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Water Management System</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">HVAC Optimization</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Predictive Maintenance</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Ambient Monitoring</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Steam trap monitoring</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Busbar Monitoring</Link></li>
                  <li><Link className="text-text-color h5" href="/solutions/solution-l2">Plant Digitalization</Link></li>
                </ul>
              </details>
              <details>
                <summary className="h4 text-text-color font-semibold text-center">Resources</summary>
                <ul className="flex flex-col gap-4 mt-4 items-center">
                  <li><Link className="text-text-color h5" href="/case-study">Case Study</Link></li>
                  <li><Link className="text-text-color h5" href="/blogs">Blogs</Link></li>
                  <li><Link className="text-text-color h5" href="/faqs">FAQs</Link></li>
                  <li><Link className="text-text-color h5" href="/downloads">Downloads</Link></li>
                </ul>
              </details>
            </div>
            <Link href="/" className="bg-accent-color text-white rounded-2xl mt-6 px-6 py-3 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
