import SearchInput from "@/components/dashboard/searchInput";
import UserTable from "@/components/dashboard/user/UserTable";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";

const breadcrumbItems = [{ title: "Users", link: "/dashboard/users" }];

const page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    currentPage?: string;
    sortBy?: string;
    sortOrder?: string;
  };
}) => {
  // wait 3s

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.currentPage) || 1;
  const sortBy = searchParams?.sortBy || "";
  const sortOrder = searchParams?.sortOrder || "";
  const AddUser = {
    href: "/dashboard/users/add",
    icon: "UserPlus",
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator />
      <SearchInput placeholder="Search by Name/Role..." addButton={AddUser} />
      <UserTable
        query={query}
        currentPage={currentPage}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default page;
