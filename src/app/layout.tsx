import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.scss";
import Header from "./components/header/header";

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
