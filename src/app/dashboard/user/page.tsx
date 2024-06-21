import SearchIntput from "@/components/dashboard/searchIntput";
import { UserHeader } from "@/components/dashboard/user/UserHeader";
import UserTable from "@/components/dashboard/user/UserTable";
import BreadCrumb from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumbItems = [{ title: "Users", link: "/dashboard/users" }];

const page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    sortBy?: string;
    sortOrder?: string;
  };
}) => {
  // wait 3s

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const sortBy = searchParams?.sortBy || "";
  const sortOrder = searchParams?.sortOrder || "";
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <UserHeader />
      <SearchIntput placeholder="Search by Name/Role..." />
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
