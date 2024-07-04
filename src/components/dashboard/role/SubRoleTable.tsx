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
import { SubRole } from "@/types";
import React, { useEffect, useState } from "react";
const SubRoleTable = () => {
  const [response, setResponse] = useState({
    success: false,
    data: [],
  });

  // Fetch data from API or local state here
  useEffect(() => {
    const getData = async () => {
      const responseApi = await SECURE_GET("/subRoles");
      if (responseApi.success) {
        setResponse(responseApi);
      } else {
        console.error("Failed to fetch roles", responseApi);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div>
        <ScrollArea className="h-96 w-full">
          <Table className="p-0 m-0 border">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Index</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead className="text-center">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {response.data.map((item: SubRole, index) => (
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
    </div>
  );
};

export default SubRoleTable;
