import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatixoTech | School and Business Websites",
  description: "Aryan Mathur builds clear websites and practical web tools for schools and businesses.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
