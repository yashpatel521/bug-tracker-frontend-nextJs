"use client";
import { UserProject, User } from "@/types";
import React, { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useParams, useRouter } from "next/navigation";
import { SECURE_GET, SECURE_POST } from "@/lib/request";
import { customToast } from "@/lib/utils";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDebouncedCallback } from "use-debounce";

const AddTeamMembers = () => {
  const params = useParams<{ id: string }>();
  const { replace } = useRouter();

  const breadcrumbItems = [
    { title: "Projects", link: `/dashboard/projects` },
    {
      title: "Project Details",
      link: `/dashboard/projects/${params?.id}`,
    },
    {
      title: "Add Project Members",
      link: `/dashboard/projects/${params?.id}/addMember`,
    },
  ];

  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  // Fetch project members on mount
  useEffect(() => {
    const fetchProjectMembers = async () => {
      const response = await SECURE_GET(
        `/projects/projectDetails/${params?.id}/memberInProject`
      );
      if (response.success) {
        const memberIds = response.data.map(
          (item: UserProject) => item.user.id
        );
        setSelectedUsers(memberIds);
      } else {
        customToast("Failed to fetch project members", "error");
      }
    };

    fetchProjectMembers();
  }, [params?.id]);

  // Debounced fetch users function
  const debouncedFetchUsers = useDebouncedCallback(async (query: string) => {
    let paramUrl = `/users?currentPage=1`;
    if (query.trim()) {
      paramUrl += `&query=${query}`;
    }
    const response = await SECURE_GET(paramUrl);
    if (response.success) {
      setAllUsers(response.data.users);
    } else {
      customToast("Failed to fetch users", "error");
    }
  }, 500);

  useEffect(() => {
    debouncedFetchUsers(searchInput);
  }, [searchInput, debouncedFetchUsers]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleCheckboxChange = (userId: number) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleAddMembers = async (userIds: number[]) => {
    const response = await SECURE_POST(`/projects/addUserToProject`, {
      projectId: params?.id,
      userIds,
    });
    if (response.success) {
      customToast("Members added successfully", "success");
      replace(`/dashboard/projects/${params?.id}`);
    } else {
      customToast("Failed to add members", "error");
    }
  };

  const handleAddSingleMember = (userId: number) => {
    handleAddMembers([userId]);
  };

  const handleAddSelectedMembers = () => {
    handleAddMembers(selectedUsers);
  };

  return (
    <div className="flex-1 p-3 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator className="mb-1" />
      <div className="flex justify-between mb-2 items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Add Project Members
        </h2>
        <div className="flex items-center justify-between gap-2">
          <Input
            placeholder="Search members..."
            className="max-w-sm"
            onChange={handleSearchChange}
            value={searchInput}
          />
          <Button
            variant="outline"
            onClick={handleAddSelectedMembers}
            className="my-2"
          >
            Add Selected Members
          </Button>
        </div>
      </div>
      <ScrollArea className="h-full w-full ">
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Select</TableHead>
              <TableHead className="text-center">Index</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subrole</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsers.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell className="text-center">
                  <Checkbox
                    id={`user-${user.id}`}
                    checked={selectedUsers.includes(user.id)}
                    onCheckedChange={() => handleCheckboxChange(user.id)}
                  />
                </TableCell>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="font-medium flex items-center align-middle m-auto gap-2 capitalize">
                  <Avatar className="h-6 w-6 my-2 ">
                    <AvatarImage
                      src={user.profile}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <AvatarFallback>
                      {user.firstName.charAt(0)}
                      {user.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.subRole?.name}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => handleAddSingleMember(user.id)}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default AddTeamMembers;
