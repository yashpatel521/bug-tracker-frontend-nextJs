import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PinProjectCard from "@/components/dashboard/main/pinProjectCard";
import { pinProjectCardData } from "@/data/pinProjectCard.data";
import { pinProjectCardType } from "@/types";
import { Separator } from "@/components/ui/separator";

export async function PinProjects() {
  return (
    <div className="m-1">
      <Card className="col-span-6 md:col-span-5 shadow-2xl dark:shadow-none">
        <CardHeader>
          <CardTitle>Pin Projects</CardTitle>
          <CardDescription>
            You have {pinProjectCardData.length} pin projects
          </CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {pinProjectCardData.map(
              (data: pinProjectCardType | any, index: number) => (
                <PinProjectCard data={data} key={index} />
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
