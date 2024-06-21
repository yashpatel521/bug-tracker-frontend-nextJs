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
import { AddMemberPopover } from "./addMemberPopover";
import { Icons } from "@/components/ui/icons";

const TeamMember = () => {
  const CrossCircleIcon = Icons["CrossCircle"];
  return (
    <div className="m-1 col-span-2">
      <Card>
        <CardHeader className="m-0">
          <CardTitle>
            <div className="flex justify-between items-center ">
              Team Members
              <AddMemberPopover />
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
                  <TableHead className="">Name</TableHead>
                  <TableHead className="text-center">Role</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member, index) => (
                  <TableRow key={member.id}>
                    <TableCell className="capitalize text-center">
                      {++index}
                    </TableCell>
                    <TableCell className="text-center font-medium flex items-center align-middle gap-2 capitalize">
                      <Avatar className="h-6 w-6 my-2 ">
                        <AvatarImage src={member.src} alt="Avatar" />
                        <AvatarFallback>ad</AvatarFallback>
                      </Avatar>
                      {member.name}
                    </TableCell>
                    <TableCell className="capitalize text-center">
                      {member.role}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        className="bg-transparent hover:bg-transparent ml-5 text-center"
                        title="Unpin project"
                      >
                        <CrossCircleIcon />
                      </Button>
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

export default TeamMember;
