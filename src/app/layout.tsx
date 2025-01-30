import type { Metadata } from "next";
import "sanitize.css/sanitize.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shingo Sato @sugarshin | sugarshin.net",
  description: "Shingo Sato @sugarshin | Software Developer based in Tokyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
