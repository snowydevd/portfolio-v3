"use client";

import React from "react";

import Image from "next/image";
import avatar from "../../../public/avatar.png";
// import { GeistSans } from "geist/font";
import Link from "next/link";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

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
    <div className="w-full flex-col lg:flex-row flex py-2 mt-2 lg:mt-6">
      <div className="w-full ">
        <div className=" rounded-lg flex flex-col j">
          <h1 className={`text-4xl font-bold`}>Lautaro Chini</h1>
          <h2 className={`text-2xl mb-2 font-semibold`}>Web-Developer</h2>
          <div className="w-full flex gap-3 text-3xl items-center lg:justify-start">
            {socials.map((social) => {
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="__blank"
                  className="hover:text-gray-400 duration-200"
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-2/4 "></div>
    </div>
  );
}
