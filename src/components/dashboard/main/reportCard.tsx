import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentProps } from "@/types";
import { Icons } from "@/components/ui/icons";

const ReportCard = ({
  content: { title, svg, value, description },
}: {
  content: ContentProps;
}) => {
  const Icon: any = Icons[svg];
  return (
    <Card className=" border rounded-xl shadow-2xl dark:shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div>
          <Icon />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ReportCardWrapper = ({
  reportCardDatas,
}: {
  reportCardDatas: ContentProps[];
}) => {
  return (
    <>
      {reportCardDatas.map((data, index) => (
        <ReportCard key={index} content={data} />
      ))}
    </>
  );
};
export default ReportCardWrapper;
