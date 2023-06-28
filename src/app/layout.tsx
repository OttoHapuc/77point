import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "77 Pub",
  description: "Bar, pub e eventos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`pt-16 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
