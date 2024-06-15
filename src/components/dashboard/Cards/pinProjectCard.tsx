import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { pinProjectCardType } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function getInitials(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}

const PinProjectCard = ({ data }: { data: pinProjectCardType }) => {
  return (
    <div>
      <div className="flex items-center">
        <Link href={data.url} className="mr-2" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 512 512"
          >
            <path
              fill="#FFD43B"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 512 512"
          >
            <path
              fill="var(--themeColor)"
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default PinProjectCard;
