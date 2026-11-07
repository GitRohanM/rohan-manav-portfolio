import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Manav | Unity Game Developer",
  description:
    "Portfolio of Rohan Manav, a Unity game developer focused on responsive gameplay systems, tools, and performance-aware releases.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
