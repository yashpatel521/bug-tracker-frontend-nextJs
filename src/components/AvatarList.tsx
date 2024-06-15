import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { avatarListType } from "@/types";

const AvatarList = ({ avatarList }: { avatarList: avatarListType[] }) => {
  return (
    <div>
      <div className="flex">
        {[
          ...avatarList.slice(0, 3),
          ...(avatarList.length > 3
            ? [{ fallback: ` +${avatarList.length - 3}` }]
            : []),
        ].map((avatar, index) => (
          <Avatar
            key={index}
            className={`relative ${
              index !== 0 ? "-ml-4" : ""
            } border border-white`}
            style={{ zIndex: avatarList.length - index }}
          >
            {avatar.src && <AvatarImage src={avatar.src} alt={avatar.alt} />}
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default AvatarList;
