import BreadCrumbSkeleton from "@/skeletons/BreadcrumbSkeleton";
import SearchInputSkeleton from "@/skeletons/SearchInputSkeleton";
import { UserHeaderSkeleton } from "@/skeletons/UserHeaderSkeleton";
import UserTableSkeleton from "@/skeletons/UserTableSkeleton";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumbSkeleton />

      <UserHeaderSkeleton />
      <SearchInputSkeleton />
      <UserTableSkeleton />
    </div>
  );
};

export default page;
