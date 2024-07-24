"use client";

import React, { useState } from "react";
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
import { Icons } from "@/components/ui/icons";
import { UserProject } from "@/types";
import { checkRoleAccess, customToast, getInitials } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { SECURE_POST } from "@/lib/request";
import useUserData from "@/components/hooks/useUserData";
import Link from "next/link";

const TeamMember = ({
  teamMember,
  projectId,
}: {
  teamMember: UserProject[];
  projectId: number;
}) => {
  const user = useUserData();

  const UserPlusIcon = Icons["UserPlus"];
  const CrossCircleIcon = Icons["CrossCircle"];
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [currentTeamMembers, setCurrentTeamMembers] =
    useState<UserProject[]>(teamMember);

  const handleCheckboxChange = (userId: number) => {
    setSelectedMembers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter((id) => id !== userId);
      } else {
        return [...prevSelected, userId];
      }
    });
  };

  const handleRemoveMembers = async (userIds: number[]) => {
    const responseApi = await SECURE_POST(`/projects/deleteUserToProject`, {
      projectId: projectId,
      userIds: userIds,
    });

    if (responseApi.success) {
      customToast("Members Removed Successfully", "success");
      // Update current team members
      setCurrentTeamMembers((prevTeamMembers) =>
        prevTeamMembers.filter((member) => !userIds.includes(member.user.id))
      );
    } else {
      customToast("Failed to Remove members", "error");
    }
  };

  const handleRemoveMember = async (userId: number) => {
    await handleRemoveMembers([userId]);
  };

  return (
    <div className="m-1 col-span-2">
      <Card>
        <CardHeader className="m-0">
          <CardTitle>
            <div className="flex justify-between items-center min-h-10">
              Team Members
              {checkRoleAccess(["admin", "manager"]) && (
                <Link href={`./${projectId}/addMember`}>
                  <UserPlusIcon />
                </Link>
              )}
              {checkRoleAccess(["admin", "manager"]) && (
                <Button
                  variant="outline"
                  onClick={() => handleRemoveMembers(selectedMembers)}
                >
                  Remove Selected
                </Button>
              )}
            </div>
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="">
          <ScrollArea className="h-96 w-full">
            <Table className="p-0 m-0">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Select</TableHead>
                  <TableHead className="text-center">Index</TableHead>
                  <TableHead className="">Name</TableHead>
                  <TableHead className="text-center">Role</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentTeamMembers.map((member, index) => (
                  <TableRow key={member.id}>
                    <TableCell className="text-center">
                      <Checkbox
                        id={`member-${member.user.id}`}
                        checked={selectedMembers.includes(member.user.id)}
                        onCheckedChange={() =>
                          handleCheckboxChange(member.user.id)
                        }
                        disabled={member.user.id === user?.id}
                      />
                    </TableCell>
                    <TableCell className="capitalize text-center">
                      {++index}
                    </TableCell>
                    <TableCell className="text-center font-medium flex items-center align-middle gap-2 capitalize">
                      <Avatar className="h-6 w-6 my-2 ">
                        <AvatarImage src={member.user.profile} alt="Avatar" />
                        <AvatarFallback>
                          {getInitials(
                            `${member.user.firstName} ${member.user.lastName}`
                          )}
                        </AvatarFallback>
                      </Avatar>
                      {member.user.firstName} {member.user.lastName}
                    </TableCell>
                    <TableCell className="capitalize text-center">
                      {member.user.subRole?.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        className="bg-transparent hover:bg-transparent ml-5 text-center"
                        title="Delete User"
                        onClick={() => handleRemoveMember(member.user.id)}
                        disabled={member.user.id === user?.id}
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
