import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";

export const UserHeader = () => {
  const AddUser = Icons["UserPlus"];
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Users`} description="Manage users " />
        <Button className="text-xs md:text-sm  hover:bg-transparent bg-transparent">
          <AddUser height="40" width="40" />
        </Button>
      </div>
      <Separator />
    </>
  );
};
