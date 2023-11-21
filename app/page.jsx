"use client";

// import Image from "next/image";
import WelcomeHero from "./components/Hero/welcome-hero";
import About from "./components/Hero/about-me";
import Projects from "./components/Hero/projects";
import Technologies from "./components/Hero/technologies";
import Contact from "./components/Hero/contact";

// import beach from "../public/beach.png";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-start">
        <section className="w-full lg:w-[750px] lg:p-0 p-5 ">
          <div>
            <WelcomeHero />
          </div>
          <div>
            <About />
          </div>
          {/* <div className="w-full mt-3">
            <video loop muted autoPlay className="rounded-lg">
              <source src="/waves.mp4" type="video/mp4" />
            </video>
          </div> */}
          <div className="mt-10" id="projects">
            <Projects />
          </div>
          <div className="mt-10" id="technologies">
            <Technologies />
          </div>
          <div>
            <Contact />
          </div>
        </section>
        {/* <section
          className="w-full lg:p-0 p-4 lg:w-[560px] xl:w-[900px] flex flex-col justify-center items-center h-[80vh] mb-56"
          id="home"
        >
          
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
        </section> */}
      </main>
    </>
  );
}
