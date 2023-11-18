"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attributte="class">{children}</ThemeProvider>;
}
