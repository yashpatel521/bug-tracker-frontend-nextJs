import { SECURE_GET } from "@/lib/request";
import React, { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchableDropdownProps {
  onSelect: (value: string) => void;
  placeholder: string;
  name: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  onSelect,
  placeholder,
  name,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchOptions = async (search: string) => {
    try {
      const response = await SECURE_GET(`/project/titles?term=${search}`);
      console.log(response);
      if (response.success) {
        setOptions(response.data);
      } else {
        console.error("Failed to fetch options:", response);
      }
    } catch (error) {
      console.error("Failed to fetch options:", error);
    }
  };

  const debouncedFetchOptions = useDebouncedCallback((search: string) => {
    if (search) {
      fetchOptions(search);
    } else {
      setOptions([]);
    }
  }, 300);

  useEffect(() => {
    debouncedFetchOptions(searchTerm);
  }, [searchTerm, debouncedFetchOptions]);

  const handleSelect = (option: string) => {
    setSearchTerm(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        name={name}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
      />
      {isOpen && options.length > 0 && (
        <div className="absolute z-10 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
