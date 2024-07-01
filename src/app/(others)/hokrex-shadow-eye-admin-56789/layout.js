import { Inter } from "next/font/google";
import "../../globals.css";
import MainstateAdmin from "@/components/Mainstate(Admin)/MainstateAdmin";
import MainAdmin from "@/components/Admin/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrintODS - Admin panel",
  description: "An intractive admin panel to change manage e-commerce website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full ">
          <MainstateAdmin>
            <MainAdmin children={children} />
          </MainstateAdmin>
        </div>
      </body>
    </html>
  );
}
