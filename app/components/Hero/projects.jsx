"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SimpleStudios from "../../../public/projects/simple-studios.png";
import Asl from "../../../public/projects/ASL.png";
import Oxilife from "../../../public/OXILIFE.png";
import Am from "../../../public/projects/AM.png";
import Sr from "../../../public/projects/SR.png";
import Imc from "../../../public/projects/IMC.png";
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
  const simpleProjects = [
    {
      id: "aljeandroPortfolio",
      label: "Alejandro Martinez",
      image: Am,
      link: "https://alejandro-m.com",
    },
    {
      id: "santiagoPortfolio",
      label: "Santiago Rivas",
      image: Sr,
      link: "https://santiago-rivas.vercel.app",
    },
    {
      id: "imc",
      label: "Calculadora IMC",
      image: Imc,
      link: "/",
    },
  ];
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center mt-16">
      <div className="w-full flex items-start justify-start">
        <h2 className={` text-2xl font-bold`}>Proyectos destacados</h2>
      </div>
      <div
        className={` w-full mt-8 rounded-2xl text-white flex justify-between`}
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
                      className="rounded-xl"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-start justify-start mt-32">
        <h2 className={` text-2xl font-bold`}>Otros proyectos</h2>
      </div>
      <div
        className={` w-full mt-8 rounded-2xl flex justify-start items-start `}
      >
        <div className="w-full flex justify-center items-center gap-9 mb-32 flex-wrap">
          {simpleProjects.map((project) => {
            return (
              <div key={project.id} className="">
                <div className="flex justify-between flex-col w-[200px]">
                  <Image
                    alt={project.id}
                    src={project.image}
                    width={300}
                    className="rounded-xl w-[200px]"
                  />
                  <div className={` bg-base-100 rounded-b-xl p-2`}>
                    <h1>{project.label}</h1>
                    <Link
                      href={project.link}
                      target="__blank"
                      className="underlined text-blue-400"
                    >
                      Visitar
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
