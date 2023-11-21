import React from "react";
import ContactForm from "../ContactForm/ContactForm";

import { Playfair_Display } from "next/font/google";
// import Image from "next/image";
// import AboutPhoto from "../../../public/about-photo.png";
// import Link from "next/link";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div
      className="w-full flex flex-col justify-start items-start mt-16"
      id="contact"
    >
      <h1 className={`text-3xl font-bold`}>Contacto</h1>
      <div className="w-full flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
