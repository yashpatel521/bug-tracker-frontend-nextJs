"use client";
import { Button, LinkButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";
import { Icons } from "../ui/icons";

const SearchInput = ({
  placeholder,
  addButton,
}: {
  placeholder: string;
  addButton: {
    href: string;
    icon: string;
  };
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // get total page from search params
    setTotalPages(parseInt(searchParams?.get("totalPage") || "1", 10));
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams ?? "");
    params.set("currentPage", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handlePrevious = () => {
    const params = new URLSearchParams(searchParams || "");
    const page = parseInt(params.get("currentPage") || "1", 10);
    if (page > 1) {
      params.set("currentPage", (page - 1).toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const handleNext = () => {
    const params = new URLSearchParams(searchParams || "");
    const page = parseInt(params.get("currentPage") || "1", 10);
    if (page < totalPages) {
      params.set("currentPage", (page + 1).toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const currentPage = parseInt(searchParams?.get("currentPage") || "1", 10);
  const AddIcon = Icons[addButton?.icon];

  return (
    <div className="flex items-center justify-between">
      <Input
        placeholder={placeholder}
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
        <LinkButton
          href={addButton.href}
          className="text-xs md:text-sm  hover:bg-transparent bg-transparent"
        >
          <AddIcon
            height="30"
            width="30"
            className="text-[var(--themeColor)]"
          />
        </LinkButton>
      </div>
    </div>
  );
};

export default SearchInput;
