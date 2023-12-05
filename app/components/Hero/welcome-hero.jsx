"use client";

import React from "react";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
export default function WelcomeHero() {
  return (
    <div
      className="w-full flex-col lg:flex-row flex py-2 mt-2 lg:mt-6"
      id="home"
    >
      <div className="w-full flex gap-3 items-center">
        <Image
          alt="Lautaro Chini's photo"
          src={avatar}
          width={80}
          className="rounded-full"
        />
        <div className=" rounded-lg flex flex-col">
          <h1 className={`text-4xl font-bold`}>Lautaro Chini</h1>
          <h2 className={`text-2xl font-semibold`}>Web-Developer</h2>
        </div>
      </div>
    </div>
  );
}
