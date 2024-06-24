import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Mainstatestore from "@/components/Mainstate(store)/Mainstatestore";
import Mainstatecart from "@/components/Mainstate(cart)/Mainstatecart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hokrex",
  description:
    "Discover the ultimate destination for trendy apparel at Hokrex! Explore our vast collection of shirts, caps, hoods, and t-shirts, curated to elevate your style game. Shop now for high-quality fashion essentials that speak volumes about your personality. With Hokrex, redefine your wardrobe and make a statement wherever you go. Elevate your fashion quotient today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Mainstatecart>
          <Mainstatestore>
            <Navbar />
            {children}
          </Mainstatestore>
        </Mainstatecart>
      </body>
    </html>
  );
}
