import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetails } from "@/types";
import { Icons } from "@/components/ui/icons";
import { abbreviateNumber } from "@/lib/abbreviateNumber";
import { SECURE_POST } from "@/lib/request";
import { customToast } from "@/lib/utils";
import ProjectBadge from "../projectBadge";

const ProjectHeader = ({ appData }: { appData: ProjectDetails }) => {
  const [isPinned, setIsPinned] = useState(appData.isPinned);

  const StarIcon = Icons["Star"];
  const PinIcon = Icons["Pin"];
  const UnPinIcon = Icons["UnPin"];
  const PlayStoreIcon = Icons["PlayStore"];

  const handlePinToggle = async () => {
    try {
      const response = await SECURE_POST(`/projects/togglePin/${appData.id}`, {
        isPinned: !isPinned,
      });

      if (response.success) {
        setIsPinned(!isPinned);
        customToast(
          `Project ${!isPinned ? "pinned" : "unpinned"} successfully`,
          "success"
        );
      } else {
        customToast("Failed to update pin status", "error");
      }
    } catch (error) {
      customToast("An error occurred while updating pin status", "error");
    }
  };

  return (
    <div className="rounded-2xl shadow-lg">
      <div className="flex px-5 justify-between">
        <div className="flex items-center">
          <Image
            src={appData.appIcon}
            alt={appData.title}
            width={80}
            height={80}
            className="rounded-lg max-w-[80px] max-h-[80px] shadow-2xl dark:shadow-2xl dark:shadow-slate-600"
            unoptimized={true}
          />
          <div className="max-w-2xl mt-2 ml-5">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-bold mb-2">{appData.title}</h1>
              {isPinned ? (
                <UnPinIcon
                  onClick={handlePinToggle}
                  className="cursor-pointer"
                />
              ) : (
                <PinIcon onClick={handlePinToggle} className="cursor-pointer" />
              )}
            </div>
            <p className="text-lg mb-4 text-gray-400 flex items-center gap-5">
              {appData.developer}
              <Link href={appData.appUrl} className="mr-2" target="_blank">
                <PlayStoreIcon />
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-between items-center">
          <div className="flex flex-row gap-3 justify-between items-center">
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <ProjectBadge status={appData.status} bordered={false} />
              <p className="text-gray-400">Status</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <p className="flex items-center gap-1">
                {appData.scoreText}
                <StarIcon />
              </p>
              <p className="text-gray-400">Overall Rating</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <p>{abbreviateNumber(+appData.reviews)}</p>
              <p className="text-gray-400">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
