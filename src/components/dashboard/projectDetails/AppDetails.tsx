import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const AppDetails = () => {
  return (
    <div className="m-1 col-span-1 ">
      <Card>
        <CardHeader>
          <CardTitle className="mb-1 flex justify-between">
            App Details
            <div title="App Download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="var(--themeColor)"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
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
