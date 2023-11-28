import "./globals.css";
import type { Metadata } from "next";
import SideNavbar from "@/components/nav/SideNavbar";
import TopNavBar from "@/components/nav/TopNavbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Skill-Up",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <div>
          <SideNavbar className="md:min-h-screen md:flex md:flex-col  hidden" />
        </div>
        <div className="md:hidden absolute w-full ">
          <TopNavBar />
        </div>

        <main className="flex my-2 md:my-0 w-full bg-gray-50">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
