import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js with Zoostand integration",
  description: "Next.js 15 (RC) is used.",
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
