"use client";
import React, { useEffect, useState } from "react";
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
import useUserData from "@/components/hooks/useUserData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import SearchableDropdown from "@/components/ui/searchableDropdown";

const AddProjectForm = () => {
  const user = useUserData();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [titleOptions, setTitleOptions] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    setSuccessMessage("");
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await SECURE_POST("/projects", formData);
    if (response.success) {
      setSuccessMessage("Project added successfully!");
    } else {
      console.error("Failed to add project:", response.message);
      setErrorMessage(
        response.message || "An error occurred while adding the project."
      );
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
              <SearchableDropdown
                onSelect={setSelectedTitle}
                placeholder="Select or enter project title"
                name="title"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="appId" className="block font-medium text-md">
                App ID:
              </label>
              <input
                type="text"
                id="appId"
                name="appId"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter app ID"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="developerId"
                className="block font-medium text-md"
              >
                Developer ID:
              </label>
              <input
                type="text"
                id="developerId"
                name="developerId"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter developer ID"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="version" className="block font-medium text-md">
                Version:
              </label>
              <input
                type="text"
                id="version"
                name="version"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter version"
                defaultValue="1.0.0"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="repositoryUrl"
                className="block font-medium text-md"
              >
                Repository URL:
              </label>
              <input
                type="text"
                id="repositoryUrl"
                name="repositoryUrl"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter repository URL"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="liveUrl" className="block font-medium text-md">
                Live URL:
              </label>
              <input
                type="text"
                id="liveUrl"
                name="liveUrl"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter repository URL"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firebaseAccount"
                className="block font-medium text-md"
              >
                Firebase Account:
              </label>
              <input
                type="text"
                id="firebaseAccount"
                name="firebaseAccount"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter firebase account"
                required
              />
            </div>
            <div className=" flex items-center mt-1 gap-2">
              <label htmlFor="createBy" className="block font-medium text-md">
                Created By:
              </label>
              <Avatar className="h-6 w-6">
                <AvatarImage src={user?.profile} alt="Avatar" />
                <AvatarFallback>
                  {getInitials(user?.firstName + " " + user?.lastName)}
                </AvatarFallback>
              </Avatar>
              {user?.firstName + " " + user?.lastName}
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block font-medium text-md">
                Status:
              </label>
              <Select name="status" defaultValue="inactive">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="active" className="capitalize">
                      Active
                    </SelectItem>
                    <SelectItem value="inactive" className="capitalize">
                      Inactive
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
              <textarea
                id="description"
                name="description"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-32"
                placeholder="Enter project description"
                required
              />
            </div>
          </div>
          {errorMessage && (
            <div className="mb-2 p-2 text-sm text-red-700" role="alert">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mb-2 p-2 text-sm text-green-700" role="alert">
              {successMessage}
            </div>
          )}
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
