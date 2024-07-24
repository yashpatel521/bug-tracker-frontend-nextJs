"use client";

import AvatarList from "@/components/AvatarList";
import { Icons } from "@/components/ui/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProjectDetails } from "@/types";
import Image from "next/image";
import Link from "next/link";
export function ProjectTable({
  projectData,
}: {
  projectData: ProjectDetails[];
}) {
  if (!projectData.length) return <div>No project data available</div>;

  const EyeIcon = Icons["Eye"];

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>App ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Developers Account</TableHead>
          <TableHead>Team Members</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell className="font-medium">
              <div className="flex  items-center gap-2">
                <Image
                  src={item.appIcon}
                  width={40}
                  height={40}
                  alt="icon"
                  className="rounded-full w-10 h-10"
                  unoptimized={true}
                />
                <div className="capitalize">{item.title}</div>
              </div>
            </TableCell>
            <TableCell>{item.developer || "-"}</TableCell>
            <TableCell>
              <AvatarList avatarList={item.userProjects ?? []} />
            </TableCell>
            <TableCell>
              <Link href={`./projects/${item.id}`}>
                <EyeIcon />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
