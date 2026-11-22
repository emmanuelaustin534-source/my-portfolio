"use client";

import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ToastProvider } from "@/components/providers/ToastProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <ToastProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </ToastProvider>
    </ThemeProvider>
  );
}
