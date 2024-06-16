import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { pinProjectCardType } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

function getInitials(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}

const PinProjectCard = ({ data }: { data: pinProjectCardType }) => {
  const PlayStoreIcon = Icons["PlayStore"];
  const CrossCircleIcon = Icons["CrossCircle"];
  return (
    <div>
      <div className="flex items-center">
        <Link href={data.url} className="mr-2" target="_blank">
          <PlayStoreIcon />
        </Link>
        <Avatar className="h-9 w-9">
          <AvatarImage src={data.icon} alt="Avatar" />
          <AvatarFallback>{getInitials(data.title)}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            <Link href="">{data.title}</Link>
          </p>
          <p className="text-sm text-muted-foreground">{data.developer}</p>
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
