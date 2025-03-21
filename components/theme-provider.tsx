"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return (
  mounted && <NextThemesProvider {...props}>{children}</NextThemesProvider>
  ); 
}