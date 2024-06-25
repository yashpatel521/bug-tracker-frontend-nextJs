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
import SearchInput from "../../searchInput";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bug } from "@/types";
import SortButton from "@/components/ui/sortButton";
import axios from "axios";
import { BugSheet } from "./bugSheet";
import { FeatureBadge, PriorityBadge, StatusBadge } from "./tableProps";
import { truncateWords } from "@/utils/abbreviateNumber";
import BugSkeletonTable from "@/skeletons/bugSkeleton";
import SearchInputSkeleton from "@/skeletons/SearchInputSkeleton";

export default function BugTable({
  query,
  currentPage,
  sortBy,
  sortOrder,
}: {
  query: string;
  currentPage: number;
  sortBy: string;
  sortOrder: string;
}) {
  const addBug = {
    href: "/",
    icon: "Eye",
  };
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const fetchBugs = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await axios.get("/api/bugs", {
        params: { query, currentPage, sortBy, sortOrder },
      });
      setBugs(response.data.bugs);
      const totalPages = Math.ceil(response.data.total / 10);
      setTotalPages(totalPages);
      const params = new URLSearchParams(searchParams ?? "");
      params.set("totalPage", totalPages.toString());
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      console.error("Failed to fetch bugs:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchBugs();
  }, [query, currentPage, sortBy, sortOrder]);

  if (isLoading) {
    return (
      <>
        <SearchInputSkeleton />
        <BugSkeletonTable />
      </>
    );
  }
  return (
    <>
      <SearchInput placeholder="Search by task..." addButton={addBug} />
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>
              <SortButton title="id" />
            </TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>
              <SortButton title="Status" />
            </TableHead>
            <TableHead>
              <SortButton title="Priority" />
            </TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bugs.map((bug) => (
            <TableRow key={bug.id}>
              <TableCell>
                <BugSheet title={bug.id} />
              </TableCell>

              <TableCell>
                <div className="flex">
                  <span className="sm:max-w-[100px] md:max-w-96 font-medium break-words">
                    {truncateWords(bug.title)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <FeatureBadge s={bug.label} />
              </TableCell>
              <TableCell>
                <div className="flex  items-center">
                  <StatusBadge s={bug.status} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <PriorityBadge s={bug.priority} />
                </div>
              </TableCell>
              <TableCell className="text-right">...</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>{`Page ${currentPage} of ${totalPages} `}</TableCaption>
      </Table>
    </>
  );
}
