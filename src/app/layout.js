import { siteConfig } from "@/config/portfolio";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Kishore",
    "Portfolio",
    "Backend Developer",
    "Node.js",
    "Go",
    "AI Agents",
    "Distributed Systems",
    "Maharaja Agrasen Institute of Technology",
  ],
  authors: [{ name: siteConfig.name }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
