"use client";

import React from "react";
// import ThemeSwitcher from "./switch";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitcher";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      id: "about",
      label: "Sobre mi",
      link: "#about",
    },
    {
      id: "projects",
      label: "Proyectos",
      link: "#projects",
    },
    {
      id: "tecnologias",
      label: "Tecnologias",
      link: "#technologies",
    },
    {
      id: "contact",
      label: "Contacto",
      link: "#contact",
    },
  ];
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
    {
      id: "linkedin",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/lautaro-chini-peyran-a88a50173/",
    },
  ];
  // console.log(pathname);
  return (
    <div className="w-full flex justify-center items-center sticky top-0 overflow-visible bg-base-100 z-50">
      <nav className=" w-[750px] flex flex-row justify-between items-center border-b">
        <div className="lg:block hidden">
          <ul className={`flex items-center gap-5 `}>
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="text-md font-light hover:text-gray-500 rounded-lg duration-100 py-4"
                >
                  <Link href={link.link}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex">
          <div className="w-full flex gap-3 text-2xl items-center lg:justify-start">
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
          <ThemeSwitcher />
        </div>

        <div className="lg:hidden block">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 bg-transparent hover:bg-transparent border-none text-xl"
            >
              <AiOutlineMenu />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-md font-light hover:text-yellow-950 rounded-lg duration-100"
                  >
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
