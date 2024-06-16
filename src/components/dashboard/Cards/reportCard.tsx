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
    <div className="shadow-2xl dark:shadow-none">
      <Card>
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
    </div>
  );
};

export default ReportCard;
