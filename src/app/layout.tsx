import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Header from "./components/Header/Header";
import ArticlesList from "./components/ArcticlesList/ArticlesList";
import Menu from "./components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global News",
  description: "News in world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          <Menu />
          <ArticlesList />
          {children}
        </div>
      </body>
    </html>
  );
}
