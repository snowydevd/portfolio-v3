"use client";
import React from "react";

import Image from "next/image";
import AboutPhoto from "../../../public/about-photo.png";
import Link from "next/link";
import avatarPhoto from "../../../public/avatar.png";

export default function About() {
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center lg:mt-3 mt-8">
      <div className={` w-full rounded-2xl flex justify-between`}>
        <div className="w-full">
          <div className="w-full flex justify-between items-center mb-16 font-light">
            <div>
              <h6 className="text-2xl font-semibold">02/02/2006</h6>
              <h6 className="text-xl font-medium">Canelones, Uruguay</h6>
            </div>
            <Image
              alt="Lautaro Chini's photo"
              src={avatarPhoto}
              width={100}
              className="rounded-full"
            />
          </div>

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
              className=" underline hover:text-blue-500 duration-150"
            >
              <strong>Simple Studios</strong>
            </Link>
            , especializada en el desarrollo y diseño de paginas web responsive
            para cualquier tipo de negocio que quiera crecer en el mundo
            digital.
          </p>
          <p className="">
            <strong>
              Estare encantado de transformar tu idea en una solucion digital
              bonita, funcional y accesible.
            </strong>
          </p>
          <p className="">
            Si quieres agendar una reunion conmigo no dudes en ponerte en
            contacto via{" "}
            <Link
              href="#contact"
              className="underline hover:text-blue-300 duration-150"
            >
              formulario
            </Link>{" "}
            o por mis redes sociales.
          </p>
        </div>
      </div>
    </div>
  );
}
