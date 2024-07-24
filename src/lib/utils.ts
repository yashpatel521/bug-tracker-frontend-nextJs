import { toast } from "@/components/ui/use-toast";
import { User } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}

export function customToast(
  message: string = "",
  type: "error" | "success" | "default" = "default"
) {
  const variant: any = type == "error" ? "destructive" : type;
  toast({
    variant,
    title: message,
    description: type,
  });
}

export function newVersionNumber(versionNumber: string): string {
  const versionParts = versionNumber.split(".");
  const lastPart = versionParts.pop();
  if (lastPart === undefined || isNaN(parseInt(lastPart))) {
    throw new Error("Invalid version number format");
  }
  const incrementedPart = (parseInt(lastPart) + 1).toString();
  versionParts.push(incrementedPart);
  const newVersion = versionParts.join(".");
  return newVersion;
}

export function checkRoleAccess(type: string[]) {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const user: User = JSON.parse(storedUser);
    if (
      (user.role && type.includes(user.role.name)) ||
      (user.subRole && type.includes(user.subRole.name))
    )
      return true;
    else return false;
  } else return false;
}

export function dateToString(date: string) {
  // format dd-MM-yyyy
  const d = new Date(date);
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}
