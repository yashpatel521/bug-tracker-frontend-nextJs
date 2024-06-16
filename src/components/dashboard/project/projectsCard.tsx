"use client";

import AvatarList from "@/components/AvatarList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { projectCardType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectsCard = ({ appData }: { appData: projectCardType }) => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="22.5"
              viewBox="0 0 576 512"
            >
              <path
                fill="var(--themeColor)"
                d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
              />
            </svg>
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
