"use client";
import React, { useState } from "react";
import AvatarList from "@/components/AvatarList";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { ProjectDetails } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { SECURE_POST } from "@/lib/request";
import { customToast } from "@/lib/utils";

const ProjectsCard = ({ appData }: { appData: ProjectDetails }) => {
  const PinIcon = Icons["Pin"];
  const UnPinIcon = Icons["UnPin"];
  const EyeIcon = Icons["Eye"];

  const [isPinned, setIsPinned] = useState(appData.isPinned);

  const handlePinToggle = async () => {
    try {
      const response = await SECURE_POST(`/projects/togglePin/${appData.id}`, {
        isPinned: !isPinned,
      });

      if (response.success) {
        setIsPinned(!isPinned);
        customToast(
          `Project ${isPinned ? "unpinned" : "pinned"} successfully!`,
          "success"
        );
      } else {
        customToast(
          `Failed to ${isPinned ? "unpin" : "pin"} project.`,
          "error"
        );
      }
    } catch (error) {
      customToast(`Failed to ${isPinned ? "unpin" : "pin"} project.`, "error");
    }
  };

  return (
    <div className="m-1 shadow-lg border rounded-3xl dark:shadow-none">
      <div className="min-h-42 min-w-64 p-4 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Image
              src={appData.appIcon}
              alt={appData.title}
              width={50}
              height={60}
              className="rounded-2xl h-[58px] w-[58px]"
            />
            <div className="text-left mt-1 w-full">
              <p className="text-[14px]">{appData.title}</p>
              <p className="font-thin text-[12px]">{appData.developer}</p>
            </div>
          </div>
          <button
            onClick={handlePinToggle}
            className="h-8 w-8 flex items-center justify-center"
            style={{ cursor: "pointer" }}
          >
            {isPinned ? <UnPinIcon /> : <PinIcon />}
          </button>
        </div>
        <Separator />
        <div className="w-full flex items-center justify-between">
          <AvatarList avatarList={appData.userProjects ?? []} />
          <Link href={`./projects/${appData.id}`}>
            <EyeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
