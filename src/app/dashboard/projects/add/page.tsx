import React from "react";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import AddProjectForm from "@/components/dashboard/project/addProject";

const breadcrumbItems = [
  { title: "Projects", link: "/dashboard/projects" },
  { title: "Add Project", link: "/dashboard/projects/add" },
];

const Projects = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator />
      <AddProjectForm />
    </div>
  );
};

export default Projects;
