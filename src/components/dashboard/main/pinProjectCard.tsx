import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { pinProjectCardType } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { getInitials } from "@/lib/utils";

const PinProjectCard = ({ data }: { data: pinProjectCardType }) => {
  const PlayStoreIcon = Icons["PlayStore"];
  const CrossCircleIcon = Icons["CrossCircle"];
  return (
    <div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={data.icon} alt="Avatar" />
          <AvatarFallback>{getInitials(data.title)}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            <Link href="">{data.title}</Link>
          </p>
          <p className="text-sm text-muted-foreground flex gap-2 items-center">
            {data.developer}
            <Link href={data.url} className="mr-2" target="_blank">
              <PlayStoreIcon className="w-3 h-3" />
            </Link>
          </p>
        </div>

        <div className="ml-auto font-medium">{data.installs}</div>
        <Button
          className="bg-transparent hover:bg-transparent ml-5"
          title="Unpin project"
        >
          <CrossCircleIcon />
        </Button>
      </div>
    </div>
  );
};

export default PinProjectCard;
