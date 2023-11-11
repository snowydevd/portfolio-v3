"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { Select, SelectSection, SelectItem } from "@nextui-org/react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dracula" ? (
        <button
          value={theme}
          onClick={(e) => setTheme("emerald")}
          className="hover:text-white duration-100 rounded-lg p-3 text-2xl"
        >
          <BiSolidSun />
        </button>
      ) : (
        <button
          value={theme}
          onClick={(e) => setTheme("dracula")}
          className="hover:text-zinc-600 duration-100 rounded-lg p-3 text-2xl"
        >
          <BiSolidMoon />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
