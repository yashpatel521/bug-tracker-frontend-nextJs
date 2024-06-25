import React from "react";
import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import SearchInputSkeleton from "@/skeletons/SearchInputSkeleton";
import ProjectsCardListSkeleton from "@/skeletons/ProjectsCardSkeleton";
import BreadCrumbSkeleton from "@/skeletons/BreadcrumbSkeleton";

const Projects = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumbSkeleton />

      <Tabs defaultValue="gridView" className="w-full">
        <div className="flex justify-between mb-2 animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-2 w-[200px] gap-4">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Separator />
        <SearchInputSkeleton />
        <TabsContent value="gridView">
          <ProjectsCardListSkeleton />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
