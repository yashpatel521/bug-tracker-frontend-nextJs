import React from "react";
import { MainNav } from "./dashboard/main-nav";
import { UserNav } from "./dashboard/user-nav";
import ThemeToggle from "./ui/Theme/theme-toggle";

const Header = () => {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;