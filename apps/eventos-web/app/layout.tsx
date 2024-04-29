import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { LayoutProvider } from "@repo/ui/organisms";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventos",
  description: "App to manage events.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
          <LayoutProvider>
            {children}
          </LayoutProvider>
      </body>
    </html>
  );
}
export default RootLayout;