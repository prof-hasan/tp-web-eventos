import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args));
};

export { cn, cn as classname}