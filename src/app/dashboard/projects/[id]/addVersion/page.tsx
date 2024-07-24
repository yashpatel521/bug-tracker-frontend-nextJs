"use client";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SECURE_GET, SECURE_POST } from "@/lib/request";
import { customToast, newVersionNumber } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams<{ id: string }>();
  const breadcrumbItems = [
    { title: "Projects", link: `/dashboard/projects` },
    {
      title: "Project Details",
      link: `/dashboard/projects/${params?.id}`,
    },
    {
      title: "Add New Version",
      link: `/dashboard/projects/${params?.id}/addVersion`,
    },
  ];

  const { replace } = useRouter();
  const [versionNumber, setVersionNumber] = useState<string>("");
  const [apkFile, setApkFile] = useState<File | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!apkFile) {
      customToast("No file selected", "error");
      return;
    }

    const formData = new FormData();
    formData.append("versionNumber", versionNumber);
    formData.append("apkFile", apkFile);
    formData.append("projectId", params?.id || "");

    try {
      const responseApi = await SECURE_POST(
        "/projects/addVersionToProject",
        formData
      );

      if (responseApi.success) {
        customToast("Version added successfully", "success");
        replace(`/dashboard/projects/${params?.id}`);
      } else {
        customToast("Failed to add version", "error");
      }
    } catch (error) {
      customToast("Error adding version", "error");
    }
  };

  useEffect(() => {
    const getVesionName = async () => {
      const responseApi = await SECURE_GET(
        `/projects/getLastVersionNumber/${params?.id}`
      );
      if (responseApi.success) {
        setVersionNumber(newVersionNumber(responseApi.data.versionNumber));
      } else {
        console.error("Failed to fetch version name", responseApi);
      }
    };
    getVesionName();
  }, []);

  return (
    <div className="flex-1 p-3 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      <Separator className="mb-1" />
      <div className="flex justify-between mb-2 items-center">
        <h2 className="text-3xl font-bold tracking-tight">Add New Version</h2>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="mb-4">
              <label
                htmlFor="versionNumber"
                className="block font-medium text-md"
              >
                Version Name:
              </label>
              <Input
                type="text"
                id="versionNumber"
                name="versionNumber"
                className="mt-1 p-2 w-full border rounded-md shadow-sm h-8"
                placeholder="Enter version name"
                value={versionNumber}
                onChange={(e) => setVersionNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apkFile" className="block font-medium text-md">
                Upload APK:
              </label>
              <Input
                type="file"
                id="apkFile"
                name="apkFile"
                className="w-full border rounded-md shadow-sm"
                onChange={(e) =>
                  setApkFile(e.target.files ? e.target.files[0] : null)
                }
                required
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
