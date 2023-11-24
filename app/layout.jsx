import "./globals.css";
import Providers from "./Providers";
import Navbar from "./components/Navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font";

export const metadata = {
  title: "Lautaro Chini",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased w-full flex flex-col justify-center items-center`}
      >
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
