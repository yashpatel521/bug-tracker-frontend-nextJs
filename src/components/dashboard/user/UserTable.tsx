"use client";

import React, { useEffect, useState } from "react";
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
import { User } from "@/types";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SECURE_GET } from "@/lib/request";
import { customToast } from "@/lib/utils";

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
  const EyeIcon = Icons["Eye"];
  const [response, setResponse] = useState({
    success: false,
    data: {
      users: [],
      totalPages: 0,
      currentPage,
      total: 0,
    },
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { replace } = useRouter();
  useEffect(() => {
    const getData = async () => {
      const paramUrl = `/users?currentPage=${currentPage}&query=${query}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
      const responseApi = await SECURE_GET(paramUrl);
      if (responseApi.success) {
        setResponse(responseApi);
      } else {
        customToast(responseApi.message, "error");
        replace("/dashboard");
      }
    };
    getData();
    const params = new URLSearchParams(searchParams ?? "");
    params.set("totalPage", response.data.totalPages.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }, [
    query,
    currentPage,
    sortBy,
    sortOrder,
    pathname,
    router,
    searchParams,
    response.data.totalPages,
    replace, // Include the missing dependency 'replace'
  ]);

  return (
    <Table className="text-center border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User ID</TableHead>
          <TableHead className="text-center w-[400px]">Name</TableHead>
          <TableHead className="text-center w-[400px]">Email</TableHead>
          <TableHead className="text-center">
            <SortButton title="Role" sortKey="role" />
          </TableHead>
          <TableHead className="text-center">
            <SortButton title="SubRole" sortKey="subRole" />
          </TableHead>
          <TableHead className="text-center">
            <SortButton title="status" sortKey="status" />
          </TableHead>
          <TableHead className="text-center">Projects Assigned</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {response.data.users.map((item: User) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell className="flex items-center justify-center">
              <Avatar className="h-6 w-6 my-2">
                <AvatarImage src={item.profile} alt={"avatar"} />
                <AvatarFallback>
                  {item.firstName} {item.lastName}
                </AvatarFallback>
              </Avatar>
              <div className="ml-2">
                {item.firstName} {item.lastName}
              </div>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role?.name}</TableCell>
            <TableCell>{item.subRole?.name}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.projectAssigned}</TableCell>
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
