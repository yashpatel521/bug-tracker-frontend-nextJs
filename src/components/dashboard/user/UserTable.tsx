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
import { LoginUser } from "@/types";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SECURE_GET } from "@/lib/request";

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
  useEffect(() => {
    const getData = async () => {
      const paramUrl = `/users?currentPage=${currentPage}&query=${query}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
      const responseApi = await SECURE_GET(paramUrl);
      if (responseApi.success) {
        setResponse(responseApi);
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
  ]);

  return (
    <Table className="text-center border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User ID</TableHead>
          <TableHead className="text-center w-[400px]">Name</TableHead>
          <TableHead className="text-center">
            <SortButton title="Role" sortKey="subRole" />
          </TableHead>
          <TableHead className="text-center">
            <SortButton title="status" sortKey="status" />
          </TableHead>
          <TableHead className="text-center">Projects Assigned</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {response.data.users.map((item: LoginUser) => (
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
            <TableCell>{item.subRole.name}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{1}</TableCell>
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
