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
