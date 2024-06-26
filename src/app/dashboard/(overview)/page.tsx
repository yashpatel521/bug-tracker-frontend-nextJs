import { PinProjects } from "@/components/dashboard/main/pinProject";
import ReportCardWrapper from "@/components/dashboard/main/reportCard";
import TimeBasedGreeting from "@/components/TimeBaseGreeter";
import { reportCardData } from "@/data/reportCard.data";

export default async function page() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hi, <TimeBasedGreeting /> 👋
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <ReportCardWrapper reportCardDatas={reportCardData} />
      </div>
      <div className="grid grid-cols-2 ">
        <PinProjects />
        <PinProjects />
      </div>
    </div>
  );
}
