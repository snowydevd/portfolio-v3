"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SimpleStudios from "../../../public/projects/simple-studios.png";
import Asl from "../../../public/projects/ASL.png";
import Oxilife from "../../../public/OXILIFE.png";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Projects() {
  const projects = [
    {
      id: "simplestudios",
      label: "Simple Studios",
      image: SimpleStudios,
      link: "https://www.simple-studios-uy.com",
    },
    {
      id: "oxilife",
      label: "Oxilife (En proceso)",
      image: Oxilife,
      link: "#projects",
    },
    {
      id: "asl",
      label: "ASL",
      image: Asl,
      link: "https://asl-marketing.vercel.app",
    },
  ];
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center  h-[60vh]">
      <div className="w-full flex lg:justify-end lg:items-end items-center justify-center">
        <h2 className={`${Playfair.className} text-6xl`}>Proyectos</h2>
      </div>
      <div
        className={` w-full mt-8 rounded-2xl text-white p-3 flex justify-between`}
      >
        <div className="w-full flex flex-col justify-center items-center gap-9">
          {projects.map((project) => {
            return (
              <div key={project.id} className="">
                <div>
                  <Link
                    href={project.link}
                    target="__blank"
                    className=" hover:opacity-80 duration-200"
                  >
                    <Image
                      alt={project.id}
                      src={project.image}
                      width={800}
                      className="rounded-lg"
                    />
                  </Link>

                  <h1
                    className={`${Playfair.className} text-2xl text-yellow-800`}
                  ></h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
