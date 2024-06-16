import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import React from "react";

const AppDetails = () => {
  const DownloadIcon = Icons["Download"];
  return (
    <div className="m-1 col-span-1 ">
      <Card>
        <CardHeader>
          <CardTitle className="mb-1 flex justify-between">
            App Details
            <div title="App Download">
              <DownloadIcon />
            </div>
          </CardTitle>

          <Separator />
        </CardHeader>
        <CardContent className="">
          <div className="flex items-center my-1">
            <p className="text-sm font-medium leading-none capitalize">
              Console Account
            </p>
            <div className="ml-auto font-medium">Whatsapp.com</div>
          </div>
          <div className="flex items-center my-1 ">
            <p className="text-sm font-medium leading-none capitalize">
              live version name
            </p>
            <div className="ml-auto font-medium text-center">-</div>
          </div>
          <div className="flex items-center my-1">
            <p className="text-sm font-medium leading-none capitalize">
              firebase account
            </p>
            <div className="ml-auto font-medium">-</div>
          </div>
          <div className="flex items-center my-1">
            <p className="text-sm font-medium leading-none capitalize">
              privacy policy
            </p>
            <div className="ml-auto font-medium">-</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppDetails;
