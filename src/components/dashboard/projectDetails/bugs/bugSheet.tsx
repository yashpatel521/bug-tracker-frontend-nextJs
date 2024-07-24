"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import AvatarMultiSelect from "./avatarMultiSelect";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import ImageViewer from "@/components/ui/imageViewer";
import { useEffect, useState } from "react";
import { SECURE_GET } from "@/lib/request";
import { customToast } from "@/lib/utils";
import { Bug, User } from "@/types";

const images = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

export function BugSheet({ bugId }: { bugId: number }) {
  const CalendarDaysIcon = Icons["CalendarDaysIcon"];

  const [bugDetails, setBugDetails] = useState<Bug | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const fetchBugDetails = async () => {
    try {
      const response = await SECURE_GET(`/projects/bugs/${bugId}`);
      if (response.success) {
        setBugDetails(response.data);
      } else {
        customToast(response.message || "Failed to fetch bug details", "error");
      }
    } catch (error) {
      console.log(error);
      customToast("Failed to fetch bug details", "error");
    }
  };

  useEffect(() => {
    if (isSheetOpen) {
      fetchBugDetails();
    }
  }, [isSheetOpen, bugId]);

  return (
    <Sheet onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {bugId}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="md:rounded-lg md:shadow-lg md:w-2/3 sm:w-full"
      >
        <ScrollArea className="h-full w-full p-2">
          {bugDetails ? (
            <>
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="flex flex-col items-baseline md:flex-row justify-between">
                  <div>
                    <div className="flex items-center justify-between md:justify-start">
                      <span className="font-semibold text-2xl md:text-4xl text-slate-500">
                        {bugDetails.title}
                      </span>
                      <span className="mx-5 inline-flex items-center rounded-md bg-transparent px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                        {bugDetails.priority}
                      </span>
                    </div>
                    <div className="flex flex-row items-baseline gap-1 mt-2 md:mt-0">
                      <span className="text-xs text-slate-600">Created By</span>
                      <span className="capitalize text-sm text-slate-400">
                        {bugDetails.reportedBy.firstName}{" "}
                        {bugDetails.reportedBy.lastName}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {new Date(bugDetails.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-3 mb-4">
                Title
                <div className="flex items-center mt-1 mb-2 ml-2">
                  <Input
                    type="text"
                    className="flex-grow"
                    defaultValue={bugDetails.title}
                  />
                </div>
                <div className="mt-3">
                  Description
                  <div className="flex items-center mt-1 ml-2">
                    <Textarea defaultValue={bugDetails.description} />
                  </div>
                </div>
                <div className="mt-3">
                  Assign To
                  <div className="mt-1 ml-2">
                    {/* <AvatarMultiSelect selectedUsers={bugDetails.assignedTo} /> */}
                  </div>
                </div>
                <div className="mt-3 flex flex-col sm:flex-row gap-4 sm:gap-x-8 lg:gap-x-16 xl:gap-x-64">
                  <div>
                    Priority
                    <div className="mt-1 ml-2">
                      <RadioGroup
                        defaultValue={bugDetails.priority}
                        className="flex gap-5"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high">High</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low">Low</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    Feature
                    <div className="mt-1 ml-2">
                      <RadioGroup
                        defaultValue={bugDetails.type}
                        className="flex gap-5"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Bug" id="Bug" />
                          <Label htmlFor="Bug">Bug</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Task" id="Task" />
                          <Label htmlFor="Task">Task</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Feature" id="Feature" />
                          <Label htmlFor="Feature">Feature</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  Attachments
                  <div className="mt-1 ml-2">
                    <Input type="file" placeholder="Attachments" />
                  </div>
                  <div className="mt-1 ml-2 flex ">
                    <ImageViewer images={images} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              Loading...
            </div>
          )}
          <SheetFooter className="flex justify-end border-t pt-4">
            <SheetClose asChild>
              <Button type="submit" variant="ghost" className="border">
                Update Bug
              </Button>
            </SheetClose>
          </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
