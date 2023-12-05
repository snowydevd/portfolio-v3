"use client";

// import Image from "next/image";
import WelcomeHero from "./components/Hero/welcome-hero";
import About from "./components/Hero/about-me";
import Projects from "./components/Hero/projects";
import Technologies from "./components/Hero/technologies";
import Contact from "./components/Hero/contact";
import { AiOutlineArrowUp } from "react-icons/ai";

import Link from "next/link";

// import beach from "../public/beach.png";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-start">
        <section className="w-full lg:w-[850px] lg:p-0 p-3 ">
          <div>
            <WelcomeHero />
          </div>
          <div>
            <About />
          </div>
          <div className="mt-10" id="projects">
            <Projects />
          </div>
          {/* <div className="mt-10" id="technologies">
            <Technologies />
          </div> */}
          <div>
            <Contact />
          </div>
          <div className="w-full flex justify-center items-center text-2xl mb-3">
            <Link href="#home" className="hover:text-blue-500 duration-200">
              <AiOutlineArrowUp />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
