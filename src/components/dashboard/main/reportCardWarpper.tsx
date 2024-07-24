"use client";

import { SECURE_GET } from "@/lib/request";
import { customToast } from "@/lib/utils";
import { ContentProps } from "@/types";
import { useEffect, useState } from "react";
import ReportCard from "./reportCard";
import ReportCardSkeletonWarapper from "@/skeletons/ReportCardSkeleton";

const ReportCardWrapper = () => {
  const [reportData, setReportData] = useState<ContentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await SECURE_GET("/projects/getProjectReports");
        if (response.success) {
          const data = response.data;
          const reportCardDatas: ContentProps[] = [
            {
              title: "Completed Projects",
              value: data.complete,
              description: "Projects that have been completed",
              svg: "Checked",
            },
            {
              title: "In Progress Projects",
              value: data.inprogress,
              description: "Projects that are currently in progress",
              svg: "Clock",
            },
            {
              title: "On Hold Projects",
              value: data.onhold,
              description: "Projects that are currently on hold",
              svg: "Pause",
            },
            {
              title: "In Review Projects",
              value: data.inreview,
              description: "Projects that are currently in review",
              svg: "Eye",
            },
          ];
          setReportData(reportCardDatas);
        } else {
          setError("Failed to fetch project report data");
        }
      } catch (err) {
        setError("An error occurred while fetching project report data");
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  if (loading) {
    return <ReportCardSkeletonWarapper />;
  }

  if (error) {
    customToast(error, "error");
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ReportCard reportCardDatas={reportData} />
    </>
  );
};

export default ReportCardWrapper;
