import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@components/header";
import Footer from "@components/footer/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "James Eldridge",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="darktheme">
      <body
        className={`${rubik.className} flex flex-col justify-center items-center`}
      >
        <div className="w-full">
          <Header />
          <div className="pt-16 pb-16 bg-base-300 min-h-screen w-full text-center">
            <div className="flex lg:max-w-6xl mx-auto">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
