"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SECURE_GET } from "@/lib/request";
import { customToast } from "@/lib/utils";
import { Role } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RoleTable = () => {
  const { replace } = useRouter();
  const [response, setResponse] = useState({
    success: false,
    data: [],
  });

  // Fetch data from API or local state here
  useEffect(() => {
    const getData = async () => {
      const responseApi = await SECURE_GET("/roles");
      if (responseApi.success) {
        setResponse(responseApi);
      } else {
        customToast(responseApi.message, "error");
        replace("/dashboard");
      }
    };
    getData();
  }, [replace]);
  return (
    <div>
      <ScrollArea className="h-full max-h-96 w-full">
        <Table className="p-0 m-0 border">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Index</TableHead>
              <TableHead>Roles</TableHead>
              <TableHead className="text-center">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response.data.map((item: Role, index) => (
              <TableRow key={item.id}>
                <TableCell className="capitalize text-center">
                  {++index}
                </TableCell>
                <TableCell className="text-center font-medium flex items-center align-middle gap-2 capitalize">
                  {item.name}
                </TableCell>
                <TableCell className="capitalize text-center">
                  {new Date(item.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default RoleTable;
