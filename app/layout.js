import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar";
import NavLinks from "./_components/navbar/NavLinks";
import MobileNavLinks from "./_components/navbar/MobileNavLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer drawer-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            <div className="p-24 bg-cyan-700">{children}</div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-4">
              <MobileNavLinks />
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
