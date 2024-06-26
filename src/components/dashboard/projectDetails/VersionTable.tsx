import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { members } from "@/data/teamMembers";
import { Icons } from "@/components/ui/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function NewVersionDialog() {
  const VersionIcon = Icons["FilePlus"];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <VersionIcon className="w-10 h-10" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const VersionTable = () => {
  const DownloadIcon = Icons["download"];
  return (
    <div className="m-1 col-span-2">
      <Card>
        <CardHeader className="mb-0">
          <CardTitle>
            <div className="flex justify-between items-center mb-2">
              Versions History
              <NewVersionDialog />
            </div>
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="">
          <ScrollArea className="h-96 w-full">
            <Table className="p-0 m-0">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Index</TableHead>
                  <TableHead>Uploaded By</TableHead>
                  <TableHead className="text-center">Version Name</TableHead>
                  <TableHead className="text-center">Release Date</TableHead>
                  <TableHead className="text-center">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }, (_, index) => (
                  <TableRow key={index}>
                    <TableCell className="capitalize text-center">
                      {++index}
                    </TableCell>
                    <TableCell className="text-center font-medium flex items-center align-middle gap-2 capitalize">
                      <Avatar className="h-6 w-6 my-2 ">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="Avatar"
                        />
                        <AvatarFallback>ad</AvatarFallback>
                      </Avatar>
                      John Doe
                    </TableCell>
                    <TableCell className="text-center capitalize">
                      v {index}
                    </TableCell>
                    <TableCell className="capitalize text-center">
                      June {index}, 2021
                    </TableCell>
                    <TableCell className="text-center flex justify-center">
                      <DownloadIcon />
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

export default VersionTable;
