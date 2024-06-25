"use client";

import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import ProjectHeader from "@/components/dashboard/projectDetails/ProjectHeader";
import { pinProjectCardData } from "@/data/pinProjectCard.data";
import AppDetails from "@/components/dashboard/projectDetails/AppDetails";
import TeamMember from "@/components/dashboard/projectDetails/TeamMember";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/dashboard/main/overview";
import BugTable from "@/components/dashboard/projectDetails/bugs/bugTable";
import BugSkeletonTable from "@/skeletons/bugSkeleton";

const ProjectDetails = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    currentPage?: string;
    sortBy?: string;
    sortOrder?: string;
  };
}) => {
  const params = useParams<{ id: string }>();
  const breadcrumbItems = [
    { title: "Projects", link: `/dashboard/projects` },
    { title: "WhatsApp", link: `/dashboard/projects/${params?.id}` },
  ];

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.currentPage) || 1;
  const sortBy = searchParams?.sortBy || "";
  const sortOrder = searchParams?.sortOrder || "";

  return (
    <div className="flex-1 p-3 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator className="mb-1" />
      <Tabs defaultValue="bugs" className="w-full mt-2">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info">Details</TabsTrigger>
          <TabsTrigger value="bugs">Bugs</TabsTrigger>
          <TabsTrigger value="versions">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <div className="py-5">
            <ProjectHeader appData={pinProjectCardData[1]} />
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 py-4">
              <AppDetails />
              <Overview />
            </div>
            <TeamMember />
          </div>
        </TabsContent>
        <TabsContent value="bugs">
          <BugTable
            query={query}
            currentPage={currentPage}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
        </TabsContent>
        <TabsContent value="versions">
          <TeamMember />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectDetails;
