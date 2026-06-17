import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quetrex",
  description: "Experience the finest curated coffees and artisan brews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
