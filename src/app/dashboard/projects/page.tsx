"use client";

import React, { useEffect, useState } from "react";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectTable } from "@/components/dashboard/project/projectTable";
import SearchInput from "@/components/dashboard/searchInput";
import ProjectsCardList from "@/components/dashboard/project/projectCardList";
import { usePathname, useRouter } from "next/navigation";
import { projectCardType, ResponseType } from "@/types";
import { SECURE_GET } from "@/lib/request";

const breadcrumbItems = [{ title: "Projects", link: "/dashboard/projects" }];

const Projects = ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    currentPage?: string;
  };
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const [projectData, setProjectData] = useState<projectCardType[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const params = new URLSearchParams(searchParams ?? "");
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.currentPage) || 1;
  const addProject = {
    icon: "FolderGit2",
    href: "/dashboard/projects/add",
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const response: ResponseType = await SECURE_GET(
          `/projects?query=${query}&currentPage=${currentPage}`
        );
        if (response.success) {
          const { data } = response;
          setProjectData(data.result);
          params.set("totalPage", data.totalPages.toString());
          replace(`${pathname}?${params.toString()}`);
        } else {
          console.error("Failed to fetch project data:", response);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [query, currentPage, pathname, replace]);

  if (!projectData) {
    return <div>No project data available</div>; // Handle the case where no data is available
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />

      <Tabs defaultValue="gridView" className="w-full">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-bold tracking-tight">All Projects</h2>
          <TabsList className="grid grid-cols-2 w-[200px]">
            <TabsTrigger value="gridView">Grid</TabsTrigger>
            <TabsTrigger value="listView">List</TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <SearchInput placeholder="Search by title..." addButton={addProject} />
        <TabsContent value="gridView">
          <ProjectsCardList projectData={projectData} />
        </TabsContent>
        <TabsContent value="listView">
          <ProjectTable projectData={projectData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
