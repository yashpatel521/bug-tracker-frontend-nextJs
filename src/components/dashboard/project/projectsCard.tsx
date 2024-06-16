"use client";

import AvatarList from "@/components/AvatarList";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { projectCardType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectsCard = ({ appData }: { appData: projectCardType }) => {
  const EyeIcon = Icons["Eye"];
  return (
    <div className="m-1">
      <div className="min-h-42 min-w-64 rounded-3xl border p-4 flex flex-col items-start justify-center gap-3 ">
        <div className="flex">
          <Image
            src={appData.src}
            alt={appData.title}
            width={50}
            height={60}
            className=" rounded-2xl mr-2"
          />
          <div className="text-center w-full mt-1">
            <p className="text-[14px]">{appData.title}</p>
            <p className="font-thin text-[12px]">{appData.developer}</p>
          </div>
        </div>
        <Separator />
        <div className="w-full flex items-center justify-between">
          <AvatarList avatarList={appData.teamMembers} />
          <Link href={`./projects/${appData.appId}`}>
            <EyeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectsCardList = ({
  projectData,
}: {
  projectData: projectCardType[];
}) => {
  const [data, setData] = useState(projectData);

  const filterChange = (e: string) => {
    const filteredData = projectData.filter((data) =>
      data.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter title..."
          className="max-w-sm"
          onChange={(e) => filterChange(e.target.value)}
        />
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((data, index) => (
          <ProjectsCard key={index} appData={data} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCardList;
