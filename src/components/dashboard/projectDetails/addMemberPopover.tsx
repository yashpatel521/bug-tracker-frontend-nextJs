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

export function AddMemberPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="border-none bg-transparent hover:bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="25"
            viewBox="0 0 640 512"
          >
            <path
              fill="var(--themeColor)"
              d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
            />
          </svg>
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
