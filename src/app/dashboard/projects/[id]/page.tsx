"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import ProjectHeader from "@/components/dashboard/projectDetails/ProjectHeader";
import AppDetails from "@/components/dashboard/projectDetails/AppDetails";
import TeamMember from "@/components/dashboard/projectDetails/TeamMember";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/dashboard/main/overview";
import BugTable from "@/components/dashboard/projectDetails/bugs/bugTable";
import HistoryInstallTable from "@/components/dashboard/projectDetails/HistoryInstallTable";
import VersionTable from "@/components/dashboard/projectDetails/VersionTable";
import { SECURE_GET } from "@/lib/request";
import { ProjectDetails, ResponseType } from "@/types";
import { customToast } from "@/lib/utils";
import ProjectDetailsSkeleton from "@/skeletons/projectDetailsSkeleton";

const Page = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    currentPage?: string;
    sortBy?: string;
    sortOrder?: string;
    versionId?: string;
  };
}) => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
    null
  );
  const params = useParams<{ id: string }>();

  const versionId = searchParams?.versionId || "";
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.currentPage) || 1;
  const sortBy = searchParams?.sortBy || "";
  const sortOrder = searchParams?.sortOrder || "";
  const breadcrumbItems = [
    { title: "Projects", link: `/dashboard/projects` },
    {
      title: projectDetails?.title || "Project Details",
      link: `/dashboard/projects/${params?.id}`,
    },
  ];

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response: ResponseType = await SECURE_GET(
          `/projects/projectDetails/${params?.id}`
        );
        if (response.success) {
          setProjectDetails(response.data);
        } else {
          customToast("Failed to fetch project details", "error");
        }
      } catch (error) {
        customToast("Failed to fetch project details", "error");
      }
    };

    if (params?.id) {
      fetchProjectDetails();
    }
  }, [params?.id]);

  if (!projectDetails) {
    return <ProjectDetailsSkeleton />;
  }

  return (
    <div className="flex-1 p-3 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator className="mb-1" />
      <Tabs defaultValue="info" className="w-full mt-2">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info">Details</TabsTrigger>
          <TabsTrigger value="bugs">Bugs</TabsTrigger>
          <TabsTrigger value="versions">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <div className="py-5">
            <ProjectHeader appData={projectDetails} />
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 py-4">
              <AppDetails appData={projectDetails} />
              <Overview stats={projectDetails.dailyStats ?? []} />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-4 py-4">
              <HistoryInstallTable history={projectDetails.dailyStats ?? []} />
              <TeamMember
                teamMember={projectDetails.userProjects ?? []}
                projectId={projectDetails.id}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="bugs">
          <BugTable
            query={query}
            currentPage={currentPage}
            sortBy={sortBy}
            sortOrder={sortOrder}
            versionList={projectDetails.versions ?? []}
            versionId={(versionId || projectDetails.versions?.[0]?.id) ?? ""}
            projectId={projectDetails.id}
          />
        </TabsContent>
        <TabsContent value="versions">
          <VersionTable
            versions={projectDetails.versions ?? []}
            projectId={projectDetails.id}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
