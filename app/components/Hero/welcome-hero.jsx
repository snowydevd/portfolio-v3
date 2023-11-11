"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";

import Image from "next/image";
import avatar from "../../../public/avatar.png";
// import { GeistSans } from "geist/font";
import Link from "next/link";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function WelcomeHero() {
  const socials = [
    {
      id: "ig",
      icon: <AiOutlineInstagram />,
      link: "https://www.instagram.com/lautarochini",
    },

    {
      id: "github",
      icon: <AiOutlineGithub />,
      link: "https://github.com/snowydevd",
    },
  ];
  return (
    <div className="w-full flex-col lg:flex-row flex lg:justify-between lg:items-center items-center justify-center  h-[50vh]">
      <div className="w-full ">
        <div className=" rounded-lg lg:text-left text-center flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <Image
            alt="Lautaro Chini's photo"
            src={avatar}
            width={150}
            className="rounded-full  lg:hidden block"
          />
          <h1
            className={`${Playfair.className} text-5xl lg:text-7xl font-medium`}
          >
            Lautaro Chini
          </h1>
          <h2 className={`${Playfair.className} text-2xl lg:text-4xl mb-2`}>
            Web-Developer
          </h2>
          <div className="w-full flex gap-3 text-4xl justify-center items-center lg:justify-start">
            {socials.map((social) => {
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="__blank"
                  className="hover:text-yellow-950 duration-200"
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
          {/* <Link
            href="about"
            className={`${Playfair.className} px-4 py-3 rounded-lg bg-cyan-700 hover:bg-cyan-800 duration-100 text-white font-light text-xl`}
          >
            Sobre mi
          </Link> */}
        </div>
      </div>
      <div className="w-2/4 ">
        <Image
          alt="Lautaro Chini's photo"
          src={avatar}
          width={500}
          className="rounded-full  lg:block hidden"
        />
        {/* <Spline scene="https://prod.spline.design/b40CPGjx-TtpMCIP/scene.splinecode" /> */}
      </div>
    </div>
  );
}
