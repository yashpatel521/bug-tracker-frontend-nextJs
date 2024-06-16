"use client";

import React from "react";
import { useParams } from "next/navigation";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import ProjectHeader from "@/components/dashboard/projectDetails/ProjectHeader";
import { pinProjectCardData } from "@/data/pinProjectCard.data";
import AppDetails from "@/components/dashboard/projectDetails/AppDetails";
import TeamMember from "@/components/dashboard/projectDetails/TeamMember";

const ProjectDetails = () => {
  const params = useParams<{ id: string }>();
  const breadcrumbItems = [
    { title: "Projects", link: `/dashboard/projects` },
    { title: "WhatsApp", link: `/dashboard/projects/${params.id}` },
  ];
  return (
    <div className="flex-1 p-3 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator className="mb-1" />
      <ProjectHeader appData={pinProjectCardData[1]} />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
        <TeamMember />
        <AppDetails />
      </div>
    </div>
  );
};

export default ProjectDetails;
