import "@/styles/globals.css";
import { Sora as FontSans } from "next/font/google";

import { ClientProvider } from "@/contex/clientContext";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientProvider> {children}</ClientProvider>
      </body>
    </html>
  );
}
