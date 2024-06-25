import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

// SkeletonCell component for displaying a loading state in a table cell
const SkeletonCell = () => (
  <TableCell>
    <div className="h-4 bg-gray-400 rounded animate-pulse"></div>
  </TableCell>
);

// SkeletonRow component for displaying a row of skeleton cells
const SkeletonRow = () => (
  <TableRow>
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
    <SkeletonCell />
  </TableRow>
);

// Static table with skeleton loaders
export default function BugSkeletonTable() {
  return (
    <Table className="border border-gray-400">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Repeat SkeletonRow for the number of rows you want to display as loading */}
        {Array.from({ length: 10 }, (_, index) => (
          <SkeletonRow key={index} />
        ))}
      </TableBody>
      <TableCaption>Loading data...</TableCaption>
    </Table>
  );
}
