import "./globals.css";
import Providers from "./Providers";
import Navbar from "./components/Navbar/navbar";

export const metadata = {
  title: "Lautaro Chini",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`white-bg`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
