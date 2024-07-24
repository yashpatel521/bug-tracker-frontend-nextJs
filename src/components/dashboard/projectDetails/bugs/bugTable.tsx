"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bug, Version } from "@/types";
import SortButton from "@/components/ui/sortButton";
import { BugSheet } from "./bugSheet";
import { FeatureBadge, PriorityBadge, StatusBadge } from "./tableProps";
import BugSkeletonTable from "@/skeletons/bugSkeleton";
import { truncateWords } from "@/lib/abbreviateNumber";
import BugTableHeader from "./bugTableHeader";
import { SECURE_GET } from "@/lib/request";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

export default function BugTable({
  query,
  currentPage,
  sortBy,
  sortOrder,
  versionList,
  versionId,
  projectId,
}: {
  query: string;
  currentPage: number;
  sortBy: string;
  sortOrder: string;
  versionList: Version[];
  versionId: string | number;
  projectId: number;
}) {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const fetchBugs = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await SECURE_GET(
        `/projects/${projectId}/bugs/${versionId}?sortBy=${sortBy}&sortOrder=${sortOrder}&query=${query}&currentPage=${currentPage}`
      );
      const params = new URLSearchParams(searchParams ?? "");
      params.set("versionId", versionList[0].id.toString());
      if (response.success) {
        setBugs(response.data.bugs);
        const totalPages = Math.ceil(response.data.total / 10);
        setTotalPages(totalPages);
        params.set("totalPage", totalPages.toString());
        replace(`${pathname}?${params.toString()}`);
      }
    } catch (error) {
      console.error("Failed to fetch bugs:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchBugs();
  }, [query, currentPage, sortBy, sortOrder, versionId]);

  return (
    <>
      <BugTableHeader versionList={versionList} />
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>
              <SortButton title="id" sortKey="id" />
            </TableHead>
            <TableHead className="text-left">Title</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">
              <SortButton title="Status" sortKey="status" />
            </TableHead>
            <TableHead className="text-center">
              <SortButton title="Priority" sortKey="priority" />
            </TableHead>
            <TableHead className="text-center">Created By</TableHead>
            <TableHead className="text-center">Assigned To</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <BugSkeletonTable />
          ) : (
            bugs.map((bug) => (
              <TableRow key={bug.id}>
                <TableCell>
                  <BugSheet bugId={bug.id} />
                </TableCell>

                <TableCell>
                  <div className="flex">
                    <span className="sm:max-w-[100px] md:max-w-96 font-medium break-words">
                      {truncateWords(bug.title)}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <FeatureBadge s={bug.type} />
                </TableCell>
                <TableCell>
                  <StatusBadge s={bug.status} />
                </TableCell>
                <TableCell>
                  <PriorityBadge s={bug.priority} />
                </TableCell>
                <TableCell className="font-medium flex items-center align-middle justify-center m-auto gap-2 capitalize">
                  <Avatar className="h-6 w-6 my-2 ">
                    <AvatarImage
                      src={bug.reportedBy.profile}
                      alt={`${bug.reportedBy.firstName} ${bug.reportedBy.lastName}`}
                    />
                    <AvatarFallback>
                      {getInitials(
                        `${bug.reportedBy.firstName} ${bug.reportedBy.lastName}`
                      )}
                    </AvatarFallback>
                  </Avatar>
                  {bug.reportedBy.firstName} {bug.reportedBy.lastName}
                </TableCell>
                <TableCell>
                  <div className="flex align-middle justify-center">
                    {bug.assignedTo.slice(0, 4).map((user, index) => (
                      <Avatar
                        key={index}
                        className={`relative ${
                          index !== 0 ? "-ml-4" : ""
                        } border border-white`}
                        style={{ zIndex: bug.assignedTo.length - index }}
                      >
                        {user.profile ? (
                          <AvatarImage src={user.profile} alt={user.profile} />
                        ) : (
                          <AvatarFallback>
                            {getInitials(`${user.firstName} ${user.lastName}`)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    ))}
                    {bug.assignedTo.length > 4 && (
                      <Avatar
                        className="relative -ml-3 border border-white bg-gray-200 text-gray-600"
                        style={{ zIndex: 0 }}
                      >
                        <AvatarFallback>
                          +{bug.assignedTo.length - 4}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableCaption>{`Page ${currentPage} of ${totalPages} `}</TableCaption>
      </Table>
    </>
  );
}
