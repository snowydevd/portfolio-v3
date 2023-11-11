"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import AboutPhoto from "../../../public/about-photo.png";
import Link from "next/link";
import avatarPhoto from "../../../public/avatar-about.png";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center  h-[60vh]">
      <div className="w-full flex lg:justify-start lg:items-start items-center justify-center">
        <h2 className={`${Playfair.className} text-6xl`}>Sobre mi</h2>
      </div>
      <div
        className={` brown-bg w-full mt-8 rounded-2xl text-white p-3 flex justify-between`}
      >
        <div className="w-full lg:w-3/4">
          <Image
            alt="Lautaro Chini's photo"
            src={avatarPhoto}
            width={150}
            className="rounded-2xl mb-8 lg:hidden block"
          />
          <h5 className="text-3xl font-bold">Lautaro Chini</h5>
          <h6 className="text-2xl font-semibold">02/02/2006</h6>
          <h6 className="text-xl mb-12 font-medium">Uruguay</h6>
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
              className=" underline hover:text-yellow-500 duration-150"
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
            contacto conmigo via e-mail o por mis redes sociales.
          </p>
        </div>
        <Image
          alt="Lautaro Chini"
          src={AboutPhoto}
          width={250}
          className="rounded-lg lg:block hidden"
        />
      </div>
    </div>
  );
}
