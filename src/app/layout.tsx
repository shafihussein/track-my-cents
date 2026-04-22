import type { Metadata } from "next";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Track My Cents",
  description: "Logo explorations for the Track My Cents brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
