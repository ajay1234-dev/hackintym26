import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HACKINTYM 26 – 30 Hour Hackathon",
  description:
    "30 Hour National Level Hackathon for students to build solutions to real-world problems. Innovate. Build. Transform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased min-h-screen flex flex-col bg-hack-darkBg text-white">
        <Navbar />
        <main className="flex-grow pt-20 relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
