import { Inter } from "next/font/google";
import "../../../globals.css";
import Nav from "@/components/Tool/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hokrex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-hidden"}>
        <Nav name={"Test Sports 1.0"} type={"Sports"} />
        {children}
      </body>
    </html>
  );
}