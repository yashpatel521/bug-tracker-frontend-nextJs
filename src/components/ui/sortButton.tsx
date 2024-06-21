import React from "react";
import { Button } from "./button";
import { ArrowUpDown } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SortButton = ({ title }: { title: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleSort = (title: string) => {
    const params = new URLSearchParams(searchParams ?? "");
    params.set("sortBy", title.toLocaleLowerCase());
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    params.set("sortOrder", sortOrder);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Button
      variant="ghost"
      className="bg-transparent hover:bg-transparent"
      onClick={(e) => {
        e.preventDefault();
        handleSort(title);
      }}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default SortButton;
