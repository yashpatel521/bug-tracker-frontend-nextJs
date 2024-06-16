import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { members } from "@/data/teamMembers";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/icons";

export function AddMemberPopover() {
  const UserPlusIcon = Icons["UserPlus"];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="border-none bg-transparent hover:bg-transparent">
          <UserPlusIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid">
          <h4 className="font-medium leading-none grid grid-flow-col grid-cols-3 gap-3 mb-1">
            <Input
              type="text"
              placeholder="Search member ..."
              className="col-span-2"
            />
            <Button variant="outline">Add</Button>
          </h4>
          <Separator />
          <div className="grid">
            <ScrollArea className="h-[250px] w-full m-0 p-0">
              <Table>
                <TableBody>
                  {members.map((member, index) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium flex items-center align-middle m-auto gap-2 capitalize">
                        <Avatar className="h-6 w-6 my-2 ">
                          <AvatarImage src={member.src} alt="Avatar" />
                          <AvatarFallback>ad</AvatarFallback>
                        </Avatar>
                        {member.name}
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox id="terms" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
