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
      id: "thechange",
      label: "TheChange",
      description: "Simple landing design made",
      date: "Octubre 2023",
      image: Asl,
      link: "https://the-change.vercel.app",
    },

    {
      id: "asl",
      label: "ASL Brightly",
      description:
        "ASL Brightly se encarga de crear y optimizar embudos de venta además de prospección en frío y adquisición de clientes por medio de publicidad paga, para ayudar a negocios a escalar su facturación en menos de 90 días.",
      date: "Septiembre 2023",
      image: Asl,
      link: "https://asl-marketing.vercel.app",
    },
    {
      id: "simplestudios",
      label: "Simple Studios",
      description: "Expande tu negocio en el mundo digital con Simple Studios.",
      image: SimpleStudios,
      date: "Julio 2023",
      link: "https://www.simple-studios-uy.com",
    },
    {
      id: "oxilife",
      label: "Oxilife",
      description:
        "Limpia cualquier cuerpo de agua contaminado con esta calculadora sofisticada.",
      date: "Diciembre 2022",
      image: Oxilife,
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
      link: "https://calculadora-imc-chini.vercel.app",
    },
  ];
  return (
    <section className="w-full flex-col flex lg:items-center items-center justify-center mt-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-9">
        <div className="w-full lg:w-2/4 flex flex-col items-start justify-start mt-24">
          <h2 className={`text-3xl lg:text-5xl font-bold`}>
            Proyectos destacados
          </h2>
          <p>Proyectos que he realizado a lo largo de mi trayectoria.</p>
        </div>
        <div className={` w-3/4 mt-8 rounded-2xl  flex justify-between`}>
          <div className="w-full flex flex-col justify-start items-start gap-9">
            <ol className="relative border-s ">
              {projects.map((project) => {
                return (
                  <li className="mb-10 ms-4 " key={project.id}>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
                    <time className="mb-1 text-sm font-normal leading-none ">
                      {project.date}
                    </time>
                    <h3 className="text-lg font-semibold ">{project.label}</h3>
                    <p className="mb-4 text-base font-normal  ">
                      {project.description}
                    </p>
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="__blank"
                        className="inline-flex items-center px-4 py-2 text-sm duration-200 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        Visitar{" "}
                        <svg
                          className="w-3 h-3 ms-2 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="px-4 py-2 bg-gray-200 text-sm text-black rounded-lg hover:bg-gray-300 duration-300"
                      >
                        En proceso
                      </button>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex items-start justify-start mt-32">
          <h2 className={` text-3xl font-bold`}>Otros proyectos</h2>
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
    </section>
  );
}
