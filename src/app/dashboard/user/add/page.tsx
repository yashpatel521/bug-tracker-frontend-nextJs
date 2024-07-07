import AddUserForm from "@/components/dashboard/user/AddUserForm";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";

const breadcrumbItems = [
  { title: "Users", link: "/dashboard/user" },
  { title: "Create User", link: "/dashboard/user/add" },
];

const page = () => {
  return (
    <div className="min-h-screen ">
      <div className="space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <Separator />
        <AddUserForm />
      </div>
    </div>
  );
};

export default page;
