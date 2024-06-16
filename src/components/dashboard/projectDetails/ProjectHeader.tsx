import { pinProjectCardType } from "@/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { abbreviateNumber } from "@/utils/abbreviateNumber";

const ProjectHeader = ({ appData }: { appData: pinProjectCardType }) => {
  return (
    <div>
      <div className="flex px-5 justify-between">
        <div className="flex items-center">
          <Image
            src={appData.icon}
            alt={appData.title}
            width={80}
            height={80}
            className="rounded-lg max-w-[80px] max-h-[80px] shadow-2xl dark:shadow-2xl dark:shadow-slate-600"
            unoptimized={true}
          />
          <div className="max-w-2xl mt-2 ml-5">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-bold mb-2">{appData.title}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="15"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#FFD43B"
                  d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
                />
              </svg>
            </div>
            <p className="text-lg mb-4 text-gray-400 flex items-center gap-5">
              {appData.developer}
              <Link href={appData.url} className="mr-2" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#FFD43B"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  />
                </svg>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-between items-center">
          <div className="flex flex-row gap-3 justify-between items-center">
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <p className="flex items-center gap-1">
                {appData.scoreText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#FFD43B"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
              </p>
              <p className="text-gray-400">Overall Rating</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px] justify-center items-center ">
              <p>{abbreviateNumber(+appData.reviews)}+</p>
              <p className="text-gray-400">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
