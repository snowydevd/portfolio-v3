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
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className={` ${Playfair.className} text-5xl`}>Contacto</h1>
      <ContactForm />
    </div>
  );
}
