import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const loginuser = {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5ODgwMzMyLCJleHAiOjE3MjA3NDQzMzJ9.yFRZEk28ewVVNWJ88GG2YbBUC4UELuqKZvscDuwKHBg",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5ODgwMzMyLCJleHAiOjE3MjI0NzIzMzJ9.1XZkNuM-l5U3Z09QxtBqWeAIygPvfl6ixjv4gNHHUiw",
    user: {
      id: 1,
      firstName: "Yash",
      lastName: "Patel",
      email: "yash@example.com",
      profile: "https://github.com/shadcn.png",
      password: "$2b$12$qwDXJEk89Xk7VSPC59ulye5NC3RpssmbzHurvyfsK0MMJbl0UUiWq",
      status: "active",
      createdAt: "2024-06-30T19:00:12.351Z",
      role: {
        id: 1,
        name: "admin",
        createdAt: "2024-06-30T18:40:40.602Z",
      },
      subRole: {
        id: 25,
        name: "admin",
        createdAt: "2024-06-30T18:48:14.268Z",
      },
    },
  };
  return loginuser;
}
