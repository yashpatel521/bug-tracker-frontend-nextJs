import React from "react";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { projectCardData } from "@/data/projectCard.data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectTable } from "@/components/dashboard/table/projectTable";
import ProjectsCardList from "@/components/dashboard/Cards/projectsCard";

const breadcrumbItems = [{ title: "Projects", link: "/dashboard/user" }];

const Projects = () => {
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
        <TabsContent value="gridView">
          <ProjectsCardList projectData={projectCardData} />
        </TabsContent>
        <TabsContent value="listView">
          <ProjectTable data={projectCardData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
