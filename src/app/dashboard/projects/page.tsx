import React from "react";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectTable } from "@/components/dashboard/project/projectTable";
import ProjectsCardList from "@/components/dashboard/project/projectsCard";
import SearchInput from "@/components/dashboard/searchInput";

const breadcrumbItems = [{ title: "Projects", link: "/dashboard/projects" }];

const Projects = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const addProject = {
    icon: "FolderGit2",
    href: "/dashboard/projects/add",
  };
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
          <ProjectsCardList query={query} currentPage={currentPage} />
        </TabsContent>
        <TabsContent value="listView">
          <ProjectTable query={query} currentPage={currentPage} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
