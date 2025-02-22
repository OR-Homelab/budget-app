import "./globals.css";

import { auth } from "@/auth";

import Navbar from "@/components/navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        {Navbar(session)}
        {children}
      </body>
    </html>
  );
}
