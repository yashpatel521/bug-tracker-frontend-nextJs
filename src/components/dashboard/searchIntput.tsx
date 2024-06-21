"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";

const SearchIntput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // get total page from search params
    setTotalPages(parseInt(searchParams?.get("totalPage") || "1", 10));
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams ?? "");
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handlePrevious = () => {
    const params = new URLSearchParams(searchParams || "");
    const page = parseInt(params.get("page") || "1", 10);
    if (page > 1) {
      params.set("page", (page - 1).toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const handleNext = () => {
    const params = new URLSearchParams(searchParams || "");
    const page = parseInt(params.get("page") || "1", 10);
    if (page < totalPages) {
      params.set("page", (page + 1).toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const currentPage = parseInt(searchParams?.get("page") || "1", 10);

  return (
    <div className="flex items-center justify-between py-4">
      <Input
        placeholder="Filter title..."
        className="max-w-sm"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams?.get("query")?.toString()}
      />
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePrevious()}
          disabled={currentPage <= 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleNext()}
          disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SearchIntput;
