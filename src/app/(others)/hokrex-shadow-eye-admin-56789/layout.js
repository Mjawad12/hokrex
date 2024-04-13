import { Inter } from "next/font/google";
import "../../globals.css";
import Sidebar from "@/components/Admin/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hokrex - Admin panel",
  description: "An intractive admin panel to change manage e-commerce website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full ">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
