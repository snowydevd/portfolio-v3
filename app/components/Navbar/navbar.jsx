"use client";

import React from "react";
// import ThemeSwitcher from "./switch";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitcher";

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
  // console.log(pathname);
  return (
    <div className="w-full flex justify-center items-center sticky top-0 overflow-visible bg-base-100 z-50">
      <nav className=" w-[750px] flex flex-row justify-between items-center">
        <div className="lg:block hidden">
          <ul className={`flex items-center gap-5`}>
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
        <ThemeSwitcher />
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
