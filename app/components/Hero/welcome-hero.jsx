"use client";

import React from "react";

export default function WelcomeHero() {
  return (
    <div className="w-full flex-col lg:flex-row flex py-2 mt-2 lg:mt-6">
      <div className="w-full ">
        <div className=" rounded-lg flex flex-col j">
          <h1 className={`text-4xl font-bold`}>Lautaro Chini</h1>
          <h2 className={`text-2xl font-semibold`}>Web-Developer</h2>
        </div>
      </div>
      <div className="w-2/4 "></div>
    </div>
  );
}
