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
import { projectCardPanigate } from "@/data/projectCard.data";
import { projectCardPanigateType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
export function ProjectTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const EyeIcon = Icons["Eye"];
  const projectData: projectCardPanigateType = projectCardPanigate(
    currentPage,
    query
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // set total pages in url params
  const params = new URLSearchParams(searchParams ?? "");
  params.set("totalPage", projectData.totalPages.toString());
  replace(`${pathname}?${params.toString()}`);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">App ID</TableHead>
          <TableHead className="min-w-[400px]">Title</TableHead>
          <TableHead>Developers Account</TableHead>
          <TableHead className="min-w-[250px]">Team Members</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectData.items.map((item) => (
          <TableRow key={item.appId}>
            <TableCell>{item.appId}</TableCell>
            <TableCell className="font-medium">
              <div className="flex  items-center gap-2">
                <Image
                  src={item.src}
                  width={40}
                  height={40}
                  alt="icon"
                  className="rounded-full"
                  unoptimized={true}
                />
                <div className="capitalize">{item.title}</div>
              </div>
            </TableCell>
            <TableCell>{item.developer}</TableCell>
            <TableCell>
              <AvatarList avatarList={item.teamMembers} />
            </TableCell>
            <TableCell>
              <Link href={`./projects/${item.appId}`}>
                <EyeIcon />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
