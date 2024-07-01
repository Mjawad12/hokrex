import { Inter } from "next/font/google";
import "../../globals.css";
import Mainstatecart from "@/components/Mainstate(cart)/Mainstatecart";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrintODS - Checkout",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
          <Mainstatecart>{children}</Mainstatecart>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
