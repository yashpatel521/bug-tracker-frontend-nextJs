import AvatarList from "@/components/AvatarList";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { projectCardType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ appData }: { appData: projectCardType }) => {
  const EyeIcon = Icons["Eye"];
  return (
    <div className="m-1 shadow-lg border rounded-3xl dark:shadow-none ">
      <div className="min-h-42 min-w-64  p-4 flex flex-col items-start justify-center gap-3 ">
        <div className="flex">
          <Image
            src={appData.appIcon}
            alt={appData.title}
            width={50}
            height={60}
            className=" rounded-2xl mr-2 w-auto h-auto"
          />
          <div className="text-center w-full mt-1">
            <p className="text-[14px]">{appData.title}</p>
            <p className="font-thin text-[12px]">{appData.developer}</p>
          </div>
        </div>
        <Separator />
        <div className="w-full flex items-center justify-between">
          <AvatarList avatarList={appData.userProjects} />
          <Link href={`./projects/${appData.id}`}>
            <EyeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
