import React from "react";
import { MainNav } from "./dashboard/main/main-nav";
import { UserNav } from "./dashboard/main/user-nav";
import ThemeToggle from "./ui/Theme/theme-toggle";
import { MobileSidebar } from "./dashboard/main/mobile-sidebar";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
            <ThemeToggle />
            <div className={cn("block md:!hidden lg:!hidden")}>
              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
