import Mainstatecart from "@/components/Mainstate(cart)/Mainstatecart";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Hokrex - Your Shopping Cart",
  description:
    "Review and manage the items in your shopping cart. Adjust quantities, remove items, and proceed to checkout seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mainstatecart>{children}</Mainstatecart>
      </body>
    </html>
  );
}
