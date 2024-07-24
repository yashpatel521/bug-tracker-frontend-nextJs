import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { ContentProps } from "@/types";

const ReportCard = ({
  reportCardDatas,
}: {
  reportCardDatas: ContentProps[];
}) => {
  return (
    <>
      {reportCardDatas.map((data, index) => {
        const Icon: any = Icons[data.svg];
        return (
          <Card
            className="border rounded-xl shadow-2xl dark:shadow-none"
            key={index}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium">
                <span>{data.title}</span>
              </CardTitle>
              <div>
                <Icon />
              </div>
            </CardHeader>
            <CardContent className="pl-3">
              <span className="text-sm mr-2">{data.value}</span>
              <span className="text-xs text-muted-foreground">
                {data.description}
              </span>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default ReportCard;
