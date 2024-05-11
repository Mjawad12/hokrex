import { Inter } from "next/font/google";
import "../../../globals.css";
import Nav from "@/components/Tool/Nav";
import Mainstatetool from "@/components/Mainstate(tool)/Mainstatetool";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hokrex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "overflow-hidden"}>
        <Mainstatetool>
          <Nav name={"Test Sports 1.0"} type={"Sports"} />
          {children}
        </Mainstatetool>
      </body>
    </html>
  );
}
