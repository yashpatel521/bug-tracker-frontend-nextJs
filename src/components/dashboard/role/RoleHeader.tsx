import { Button, LinkButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import React from "react";

const RoleHeader = () => {
  const AddUser = Icons["UserPlus"];

  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <Heading
          title="Roles & Sub Roles"
          description="Manage Roles and Sub Roles "
        />
        <LinkButton
          className="text-xs md:text-sm  hover:bg-transparent bg-transparent"
          href="./role/add"
        >
          <AddUser height="40" width="40" />
        </LinkButton>
      </div>
      <Separator />
    </div>
  );
};

export default RoleHeader;
