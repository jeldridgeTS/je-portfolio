import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/header";
import Footer from "@components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="p-24 contentBg min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
