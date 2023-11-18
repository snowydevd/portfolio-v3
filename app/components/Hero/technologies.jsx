"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SimpleStudios from "../../../public/projects/simple-studios.png";
import Asl from "../../../public/projects/ASL.png";
import Oxilife from "../../../public/OXILIFE.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaPython, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiCanva,
  SiFigma,
} from "react-icons/si";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Technologies() {
  const techs_front = [
    {
      id: "html",
      label: "HTML",
      icon: <AiFillHtml5 />,
    },
    {
      id: "css",
      label: "CSS",
      icon: <FaCss3 />,
    },
    {
      id: "javascript",
      label: "JavaScript",
      icon: <IoLogoJavascript />,
    },
  ];
  const frameworks = [
    {
      id: "react",
      label: "React",
      icon: <FaReact />,
    },
    {
      id: "next",
      label: "Next.js",
      icon: <FaReact />,
    },
    {
      id: "django",
      label: "Django",
      icon: <SiDjango />,
    },
    {
      id: "canva",
      label: "Canva",
      icon: <SiCanva />,
    },
    {
      id: "figmas",
      label: "Figma",
      icon: <SiFigma />,
    },
  ];
  const techs_back = [
    {
      id: "python",
      label: "Python",
      icon: <FaPython />,
    },
    {
      id: "java",
      label: "Java",
      icon: <FaJava />,
    },
    {
      id: "c#",
      label: "C#",
      icon: <TbBrandCSharp />,
    },
    {
      id: "c++",
      label: "C++",
      icon: <SiCplusplus />,
    },
    {
      id: "mysql",
      label: "MySQL",
      icon: <SiMysql />,
    },
    {
      id: "postgresql",
      label: "PostgreSQL",
      icon: <SiPostgresql />,
    },
  ];
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center mt-16">
      <div className="w-full flex items-start justify-start">
        <h2 className={` text-2xl font-bold`}>Tecnologias</h2>
      </div>
      {/* FRONT */}
      <div className={`w-full mt-8 rounded-2xl p-3 flex justify-between`}>
        <div className="w-full flex flex-col justify-start items-start  ">
          <h3 className="text-xl font-bold">Front-end</h3>
          <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
            {techs_front.map((tech) => {
              return (
                <div
                  key={tech.id}
                  className="flex flex-col justify-center items-center p-5"
                >
                  <h2 className="text-2xl">{tech.icon}</h2>
                  <h1 className={`text-l font-bold`}>{tech.label}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* BACK */}
      <div className={`w-full mt-8 rounded-2xl p-3 flex justify-between`}>
        <div className="w-full flex flex-col justify-start items-start  ">
          <h3 className="text-xl font-bold">Back-end</h3>
          <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
            {techs_back.map((tech) => {
              return (
                <div
                  key={tech.id}
                  className="flex flex-col justify-center items-center p-5"
                >
                  <h2 className="text-2xl">{tech.icon}</h2>
                  <h1 className={`text-l font-bold`}>{tech.label}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* FRAMEWORKS */}
      <div className={`w-full mt-8 rounded-2xl p-3 flex justify-between`}>
        <div className="w-full flex flex-col justify-start items-start  ">
          <h3 className="text-xl font-bold">Frameworks and tools</h3>
          <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
            {frameworks.map((tech) => {
              return (
                <div
                  key={tech.id}
                  className="flex flex-col justify-center items-center p-5"
                >
                  <h2 className="text-2xl">{tech.icon}</h2>
                  <h1 className={`text-l font-bold`}>{tech.label}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
