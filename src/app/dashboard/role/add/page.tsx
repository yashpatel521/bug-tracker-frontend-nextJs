import AddRoleForm from "@/components/dashboard/role/AddRoleForm";
import AddSubRoleForm from "@/components/dashboard/role/AddSubRole";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";

const breadcrumbItems = [
  { title: "Roles & SubRole", link: "/dashboard/role" },
  { title: "Create Role or Sub Role", link: "/dashboard/role/add" },
];

const page = () => {
  return (
    <div className="min-h-screen ">
      <div className="space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <Separator />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <AddRoleForm />
          <AddSubRoleForm />
        </div>
      </div>
    </div>
  );
};

export default page;
