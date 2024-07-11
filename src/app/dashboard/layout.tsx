import { Metadata } from "next";

import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/hooks/useSidebar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pb-14">
          <ScrollArea className="h-full">{children}</ScrollArea>
        </main>
      </div>
    </SidebarProvider>
  );
}
