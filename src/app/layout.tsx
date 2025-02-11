// app/layout.tsx
import React from "react";
import { ThemeProvider } from "../context/theme-provider";

export const metadata = {
  title: "My Next.js v14 App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the entire app with the ThemeProvider */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
