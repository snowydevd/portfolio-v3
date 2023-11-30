"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutPhoto from "../../../public/about.jpg";
import Avatar from "../../../public/avatar.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center lg:mt-5 mt-8">
      <div
        className={` w-full rounded-2xl flex lg:flex-row flex-col justify-start items-start lg:justify-between  lg:items-center gap-3`}
      >
        <div>
          <Image
            alt="Foto de mi"
            src={Avatar}
            width={80}
            className=" lg:hidden block rounded-full"
          />
        </div>

        <div className="w-full">
          <p className="mb-6">
            Soy Lautaro Chini, un apasionado desarrollador web de Uruguay. Mi
            fascinación por la creación digital me lleva a explorar el mundo del
            diseño y la programación. Apasionado por el desarrollo front-end y
            back-end, he trabajado en proyectos desafiantes que mezclan
            creatividad y funcionalidad. Mi objetivo es seguir aprendiendo y
            creciendo en este emocionante mundo tecnológico.
          </p>
          <p className="mb-6">
            Actualmente soy el co-fundador de la empresa{" "}
            <Link
              href="https://www.simple-studios-uy.com"
              target="__blank"
              className=" underline hover:text-blue-400 text-blue-500 duration-150"
            >
              <strong>Simple Studios</strong>
            </Link>
            , especializada en el desarrollo y diseño de paginas web responsive
            para cualquier tipo de negocio que quiera crecer en el mundo
            digital.
          </p>
          <p className="">
            <strong>
              Estaré encantado de transformar tu idea en una solución digital
              bonita, funcional y accesible.
            </strong>
          </p>
          <p className="">
            Si quieres agendar una reunión conmigo no dudes en ponerte en
            contacto vía{" "}
            <Link
              href="#contact"
              className="underline hover:text-blue-400 text-blue-500 duration-150"
            >
              formulario
            </Link>{" "}
            o por mis redes sociales.
          </p>
        </div>
        <div>
          <Image
            alt="Foto de mi"
            src={AboutPhoto}
            width={190}
            className=" rounded-lg lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
}
