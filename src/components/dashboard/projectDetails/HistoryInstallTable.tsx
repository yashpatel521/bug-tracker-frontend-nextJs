import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const HistoryInstallTable = () => {
  return (
    <div className="m-1 col-span-2">
      <Card>
        <CardHeader className="m-0">
          <CardTitle>
            <div className="flex justify-between items-center h-10">
              Installs History
            </div>
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="">
          <ScrollArea className="h-96 w-full">
            <Table className="p-0 m-0">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Date</TableHead>
                  <TableHead className="text-center">Total Installs</TableHead>
                  <TableHead className="text-center">
                    Today&apos;s Install
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }, (_, index) => (
                  <TableRow key={index}>
                    <TableCell className=" text-center">
                      June 12, 2021
                    </TableCell>
                    <TableCell className="text-center ">446132568</TableCell>
                    <TableCell className="capitalize text-center">
                      123456
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryInstallTable;
