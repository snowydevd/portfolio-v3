import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
// import Image from "next/image";
// import AboutPhoto from "../../../public/about-photo.png";
// import Link from "next/link";

export default function Contact() {
  const socials = [
    {
      id: "ig",
      icon: <AiOutlineInstagram />,
      link: "https://www.instagram.com/lautarochini",
    },

    {
      id: "github",
      icon: <AiOutlineGithub />,
      link: "https://github.com/snowydevd",
    },
    {
      id: "linkedin",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/lautaro-chini-peyran-a88a50173/",
    },
  ];
  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-center lg:justify-between lg:items-start mt-16"
      id="contact"
    >
      <div className="mt-24 text-left">
        <h1 className={`text-3xl lg:text-5xl font-bold`}>Contacto</h1>

        <p className="text-sm">
          Contactame en el caso de que quieras colaborar conmigo
        </p>

        <div className="w-full flex gap-2 text-2xl items-center lg:justify-start mt-3">
          {socials.map((social) => {
            return (
              <Link
                key={social.id}
                href={social.link}
                target="__blank"
                className="hover:text-gray-400 duration-200"
              >
                {social.icon}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full lg:w-11/12 flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
