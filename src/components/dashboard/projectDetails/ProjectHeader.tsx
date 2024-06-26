import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pinProjectCardType } from "@/types";
import { abbreviateNumber } from "@/utils/abbreviateNumber";
import { Icons } from "@/components/ui/icons";

const ProjectHeader = ({ appData }: { appData: pinProjectCardType }) => {
  // Destructure icons from Icons object
  const StarIcon = Icons["Star"];
  const PinIcon = Icons["Pin"];
  const PlayStoreIcon = Icons["PlayStore"];

  return (
    <div className="rounded-2xl shadow-lg">
      <div className="flex px-5 justify-between">
        <div className="flex items-center">
          <Image
            src={appData.icon}
            alt={appData.title}
            width={80}
            height={80}
            className="rounded-lg max-w-[80px] max-h-[80px] shadow-2xl dark:shadow-2xl dark:shadow-slate-600"
            unoptimized={true}
          />
          <div className="max-w-2xl mt-2 ml-5">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-bold mb-2">{appData.title}</h1>
              <PinIcon />
            </div>
            <p className="text-lg mb-4 text-gray-400 flex items-center gap-5">
              {appData.developer}
              <Link href={appData.url} className="mr-2" target="_blank">
                <PlayStoreIcon />
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-between items-center">
          <div className="flex flex-row gap-3 justify-between items-center">
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <p className="flex items-center gap-1">
                {appData.scoreText}
                <StarIcon />
              </p>
              <p className="text-gray-400">Overall Rating</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <p>{abbreviateNumber(+appData.reviews)}+</p>
              <p className="text-gray-400">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
