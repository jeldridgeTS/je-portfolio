import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@components/header";
import Footer from "@components/footer/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lighttheme">
      <body className={rubik.className}>
        <Header />
        <div className="px-20 pb-20 pt-20 contentBg min-h-screen w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
