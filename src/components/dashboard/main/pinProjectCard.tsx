import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectDetails } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { SECURE_POST } from "@/lib/request";
import { customToast } from "@/lib/utils";
import { abbreviateNumber } from "@/lib/abbreviateNumber";
import ProjectBadge from "../projectBadge";

const PinProjectCard = ({
  data,
  onUnpin,
}: {
  data: ProjectDetails;
  onUnpin: (id: number) => void;
}) => {
  const PlayStoreIcon = Icons["PlayStore"];
  const UnPin = Icons["UnPin"];

  const handleUnpinClick = async () => {
    try {
      const response = await SECURE_POST(`/projects/togglePin/${data.id}`, {
        isPinned: false,
      });
      if (response.success) {
        customToast("Project unpinned successfully", "success");
        onUnpin(data.id);
      } else {
        customToast("Failed to unpin project", "error");
      }
    } catch (error) {
      customToast("An error occurred while unpinning the project", "error");
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <Link href={`./dashboard/projects/${data.id}`}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={data.appIcon} alt={data.appIcon} />
            <AvatarFallback>{data.title}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            <Link href={`./dashboard/projects/${data.id}`}>{data.title}</Link>
          </p>
          <p className="text-sm text-muted-foreground flex gap-2 items-center">
            {data.developer}
            <Link href={data.appUrl} className="mr-2" target="_blank">
              <PlayStoreIcon className="w-4 h-4" />
            </Link>
          </p>
        </div>

        <ProjectBadge status={data.status} />
        <div className="ml-auto font-medium mr-6 text-muted-foreground ">
          {abbreviateNumber(data.maxInstalls)} installs
        </div>
        <button onClick={handleUnpinClick}>
          <UnPin />
        </button>
      </div>
    </div>
  );
};

export default PinProjectCard;
