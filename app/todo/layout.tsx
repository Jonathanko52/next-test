import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header></Header>
      <RightSidebar></RightSidebar>
      <Sidebar></Sidebar>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
