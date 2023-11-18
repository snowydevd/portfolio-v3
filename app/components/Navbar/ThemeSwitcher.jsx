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
      {theme === "black" ? (
        <button
          value={theme}
          onClick={(e) => setTheme("lofi")}
          className="duration-100 hover:text-gray-400 rounded-lg p-3 text-2xl w-fit"
        >
          <BiSolidSun />
        </button>
      ) : (
        <button
          value={theme}
          onClick={(e) => setTheme("black")}
          className="duration-100  hover:text-gray-400 rounded-lg p-3 text-2xl w-fit"
        >
          <BiSolidMoon />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
