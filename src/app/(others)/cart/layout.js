import Mainstatecart from "@/components/Mainstate(cart)/Mainstatecart";
import { Inter } from "next/font/google";
import "../../globals.css";
import Mainstatestore from "@/components/Mainstate(store)/Mainstatestore";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "PrintODS - Your Shopping Cart",
  description:
    "Review and manage the items in your shopping cart. Adjust quantities, remove items, and proceed to checkout seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mainstatestore>
          <Mainstatecart>{children}</Mainstatecart>
        </Mainstatestore>
      </body>
    </html>
  );
}
