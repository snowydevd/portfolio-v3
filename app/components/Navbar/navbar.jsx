"use client";

import React from "react";
// import ThemeSwitcher from "./switch";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});
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
      id: "contact",
      label: "Contacto",
      link: "#contact",
    },
  ];
  // console.log(pathname);
  return (
    <div className="w-full flex justify-center items-center sticky top-0 overflow-visible backdrop-blur-md">
      <nav className="w-full xl:w-[900px] flex flex-row justify-between items-center py-3 px-2 rounded-lg">
        <h3
          className={`${Playfair.className} text-3xl font-semibold mix-blend-normal`}
        >
          <Link href="#home">LC</Link>
        </h3>
        <div className="lg:block hidden">
          <ul className={`${Playfair.className} flex items-center gap-5`}>
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
            {/* <ThemeSwitcher /> */}
          </ul>
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
