import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hermex | Locadora de veículos",
  description: "O carro ideal para sua ocasião.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${exo2.variable} h-full antialiased`}
    >
      <head>
        {/* Icon font for components/atoms/Icon. Loaded in the root layout, so it
            applies to every route — no-page-custom-font targets the Pages Router.
            display=block is what Material Symbols recommends: with swap/optional
            the raw ligature names ("search") flash before the font arrives. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
