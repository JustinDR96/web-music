import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Groove",
  description: "A website about Cyberpunk and the Cybernetic Revolution.",
  keywords: ["cyber", "groove", "cyberpunk", "cybernetic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/head/CB.ico" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
