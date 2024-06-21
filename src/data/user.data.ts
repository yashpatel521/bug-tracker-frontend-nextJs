import { User, userPaginateType } from "@/types";

export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    src: "https://github.com/shadcn.png",
    role: "Frontend Developer",
    status: "Active",
    projectAssigned: [1, 22],
  },
  {
    id: 2,
    name: "Yash Patel",
    src: "https://github.com/shadcn.png",
    role: "Web Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 3,
    name: "John Doe",
    src: "https://github.com/shadcn.png",
    role: "Backend Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 4,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 5,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 6,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 7,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 8,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 9,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 10,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 11,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 12,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 13,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 14,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 15,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 16,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 17,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 18,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 19,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 20,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 21,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 22,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Active",
    projectAssigned: [1, 2, 3],
  },
  {
    id: 23,
    name: "Jane Doe",
    src: "https://github.com/shadcn.png",
    role: "Full Stack Developer",
    status: "Inactive",
    projectAssigned: [1, 2, 3],
  },
];

export function userPaginate(
  pageNo: number,
  searchQuery?: string,
  sortBy?: string,
  sortOrder?: string
): userPaginateType {
  const itemsPerPage = 5;
  let filteredData: User[] = users;

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredData = users.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  }

  if (sortBy && sortOrder) {
    filteredData = filteredData.sort((a, b) => {
      if (sortOrder === "asc") {
        return (a as any)[sortBy] > (b as any)[sortBy] ? 1 : -1;
      } else {
        return (a as any)[sortBy] < (b as any)[sortBy] ? 1 : -1;
      }
    });
  }

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.min(Math.max(pageNo, 1), totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredData.slice(startIndex, endIndex);
  return {
    totalItems,
    totalPages,
    currentPage,
    items: paginatedItems,
  };
}
