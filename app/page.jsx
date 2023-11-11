"use client";

// import Image from "next/image";
import WelcomeHero from "./components/Hero/welcome-hero";
import About from "./components/Hero/about-me";
import Projects from "./components/Hero/projects";
import Contact from "./components/Hero/contact";
// import beach from "../public/beach.png";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-start">
      <section
        className="w-full lg:p-0 p-4 lg:w-[560px] xl:w-[900px] flex flex-col justify-center items-center h-[80vh] mb-56"
        id="home"
      >
        <WelcomeHero />
      </section>
      <section
        className="w-full lg:p-0 p-4 lg:w-[560px] xl:w-[900px] flex flex-col justify-center items-center mb-56 h-[90vh]"
        id="about"
      >
        <About />
      </section>
      <section
        className="w-full lg:p-0 p-4 lg:w-[560px] xl:w-[900px] flex flex-col justify-center items-center mb-16 mt-32 h-[90vh]"
        id="projects"
      >
        <Projects />
      </section>
      <section
        className="w-full lg:p-0 p-4 lg:w-[560px] xl:w-[900px] flex flex-col justify-center items-center mb-16 mt-32 h-[90vh]"
        id="contact"
      >
        <Contact />
      </section>
    </main>
  );
}
