"use client";

import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import SortButton from "@/components/ui/sortButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { userPaginate } from "@/data/user.data";
import { userPaginateType } from "@/types";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function UserTable({
  query,
  currentPage,
  sortBy,
  sortOrder,
}: {
  query: string;
  currentPage: number;
  sortBy: string;
  sortOrder: string;
}) {
  const users: userPaginateType = userPaginate(
    currentPage,
    query,
    sortBy,
    sortOrder
  );
  const EyeIcon = Icons["Eye"];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Use useEffect to handle side effects like navigation
  useEffect(() => {
    const params = new URLSearchParams(searchParams ?? "");
    params.set("totalPage", users.totalPages.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }, [users.totalPages, pathname, router, searchParams]);

  return (
    <Table className="text-center border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User ID</TableHead>
          <TableHead className="text-center w-[400px]">Name</TableHead>
          <TableHead className="text-center">
            <SortButton title="Role" />
          </TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Projects Assigned</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell className="flex items-center justify-center">
              <Avatar className="h-6 w-6 my-2">
                <AvatarImage src={item.src} alt={"avatar"} />
                <AvatarFallback>{item.name}</AvatarFallback>
              </Avatar>
              <div className="ml-2">{item.name}</div>
            </TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.projectAssigned?.length}</TableCell>
            <TableCell className="flex justify-center">
              <Link href={`./user/${item.id}`}>
                <EyeIcon />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
