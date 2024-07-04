import RoleHeader from "@/components/dashboard/role/RoleHeader";
import RoleTable from "@/components/dashboard/role/RoleTable";
import SubRoleTable from "@/components/dashboard/role/SubRoleTable";
import BreadCrumb from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumbItems = [{ title: "Roles & SubRole", link: "/dashboard/role" }];

const page = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <RoleHeader />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <RoleTable />
        <SubRoleTable />
      </div>
    </div>
  );
};

export default page;
