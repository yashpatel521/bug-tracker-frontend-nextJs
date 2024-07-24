"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PinProjectCard from "@/components/dashboard/main/pinProjectCard";
import { Separator } from "@/components/ui/separator";
import { PinProject, ProjectDetails } from "@/types";
import { SECURE_GET } from "@/lib/request";
import { customToast } from "@/lib/utils";
import PinProjectsSkeleton from "@/skeletons/PinProjectsSkeleton";

export function PinProjects() {
  const [pinProjects, setPinProjects] = useState<PinProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPinProjects = async () => {
      try {
        const response = await SECURE_GET("/projects/getPinProjects");
        if (response.success) {
          setPinProjects(response.data);
        } else {
          setError("Failed to fetch pinned projects");
        }
      } catch (err) {
        setError("An error occurred while fetching pinned projects");
      } finally {
        setLoading(false);
      }
    };

    fetchPinProjects();
  }, []);

  const handleUnpin = (projectId: number) => {
    setPinProjects((prevProjects) =>
      prevProjects.filter((project) => project.project.id !== projectId)
    );
  };

  if (loading) {
    return <PinProjectsSkeleton />;
  }

  if (error) {
    customToast(error, "error");
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-1">
      <Card className="col-span-6 md:col-span-5 shadow-2xl dark:shadow-none">
        <CardHeader>
          <CardTitle>Pin Projects</CardTitle>
          <CardDescription>
            You have {pinProjects.length} pin projects
          </CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {pinProjects.map((item: PinProject, index: number) => {
              const data = item.project;
              return (
                <PinProjectCard data={data} key={index} onUnpin={handleUnpin} />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
