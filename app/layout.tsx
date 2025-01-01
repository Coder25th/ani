import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const futura = localfont({
  src: [
    {
      path: "../public/fonts/Futura-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Aryan Turan",
  description: "just learning for animation....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${futura.variable} font-futura`}>{children}</body>
    </html>
  );
}
