import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikrant Verma | Portfolio",
  description:
    "Interactive portfolio website showcasing experience, projects, and technical skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
