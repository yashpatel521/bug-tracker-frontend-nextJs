"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SECURE_POST } from "@/lib/request";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "../ImageUpload";
import { useImageUpload } from "@/components/hooks/useImageUpload";
import { customToast } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResponseType } from "@/types";
import { useRouter } from "next/navigation";

const AddProjectForm = () => {
  const {
    imagePreview,
    dragging,
    fileInputRef,
    handleImageChange,
    handleFileInputClick,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useImageUpload();

  const { replace } = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataObject = new FormData(event.currentTarget);

    const response: ResponseType = await SECURE_POST(
      "/projects",
      formDataObject
    );
    console.log(response);
    if (response.success) {
      customToast("Project added successfully.", "success");
      replace(`/dashboard/projects/${response.data.id}`);
    } else {
      customToast(response.message || "Failed to create Project", "error");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-left border-b-2 pb-2">
          Add New Project
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium text-md">
                Title:
              </label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="appId" className="block font-medium text-md">
                App ID:
              </label>
              <Input
                type="text"
                id="appId"
                name="appId"
                placeholder="Enter app ID"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="developerId"
                className="block font-medium text-md"
              >
                Developer ID:
              </label>
              <Input
                type="text"
                id="developerId"
                name="developerId"
                placeholder="Enter developer ID"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="version" className="block font-medium text-md">
                Version:
              </label>
              <Input
                type="text"
                id="version"
                name="version"
                defaultValue="1.0.0"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="repositoryUrl"
                className="block font-medium text-md"
              >
                Repository URL:
              </label>
              <Input
                type="text"
                id="repositoryUrl"
                name="repositoryUrl"
                placeholder="Enter repository URL"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="liveUrl" className="block font-medium text-md">
                Live URL:
              </label>
              <Input
                type="text"
                id="liveUrl"
                name="liveUrl"
                placeholder="Enter live URL"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firebaseAccount"
                className="block font-medium text-md"
              >
                Firebase Account:
              </label>
              <Input
                type="text"
                id="firebaseAccount"
                name="firebaseAccount"
                placeholder="Enter firebase account"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block font-medium text-md">
                Status:
              </label>
              <Select name="status" defaultValue="inprogress">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="complete" className="capitalize">
                      Complete
                    </SelectItem>
                    <SelectItem value="inprogress" className="capitalize">
                      In Progress
                    </SelectItem>
                    <SelectItem value="onhold" className="capitalize">
                      On Hold
                    </SelectItem>
                    <SelectItem value="inreview" className="capitalize">
                      In Review
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block font-medium text-md">
                Type:
              </label>
              <Select name="type" defaultValue="google">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="google" className="capitalize">
                      Google
                    </SelectItem>
                    <SelectItem value="apple" className="capitalize">
                      Apple
                    </SelectItem>
                    <SelectItem value="web" className="capitalize">
                      Web
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label htmlFor="appIcon" className="block font-medium text-md">
                App Icon:
              </label>
              <ImageUpload
                imagePreview={imagePreview}
                dragging={dragging}
                fileInputRef={fileInputRef}
                handleImageChange={handleImageChange}
                handleFileInputClick={handleFileInputClick}
                handleDragOver={handleDragOver}
                handleDragLeave={handleDragLeave}
                handleDrop={handleDrop}
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                htmlFor="description"
                className="block font-medium text-md"
              >
                Description:
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter project description"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Add Project
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectForm;
