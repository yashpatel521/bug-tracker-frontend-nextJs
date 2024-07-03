import RoleHeader from "@/components/dashboard/role/RoleHeader";
import RoleTable from "@/components/dashboard/role/RoleTable";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";

const breadcrumbItems = [{ title: "Roles & SubRole", link: "/dashboard/role" }];

const page = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <RoleHeader />
      <RoleTable />
    </div>
  );
};

export default page;
