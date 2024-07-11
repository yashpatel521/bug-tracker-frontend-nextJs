import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User, userProject } from "@/types";
import { getInitials } from "@/lib/utils";

const AvatarList = ({ avatarList }: { avatarList: userProject[] }) => {
  return (
    <div>
      <div className="flex">
        {avatarList.map((avatar, index) => (
          <Avatar
            key={index}
            className={`relative ${
              index !== 0 ? "-ml-4" : ""
            } border border-white`}
            style={{ zIndex: avatarList.length - index }}
          >
            {avatar.user.profile && (
              <AvatarImage
                src={avatar.user.profile}
                alt={avatar.user.profile}
              />
            )}
            <AvatarFallback>
              {getInitials(`${avatar.user.firstName} ${avatar.user.lastName}`)}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default AvatarList;
