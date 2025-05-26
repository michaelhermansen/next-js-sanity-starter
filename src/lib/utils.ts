import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "@/lib/env";
import { isArray } from "radash";
import { siteConfig } from "./site-config";

/** Manage multiple class names */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Async sleep */
export async function sleep(duration: number) {
  await new Promise((res) => setTimeout(res, duration));
}

/** Convert date string to locale date string. */
export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObj.toLocaleDateString(siteConfig.locales[0], options);
};

type Block = {
  _type: string;
  children?: Array<{ text: string }>;
};

/** Extract plain text from block content. */
export const extractPlainText = (blocks: Block[] | null): string | null => {
  if (!blocks || !isArray(blocks)) return null;

  return blocks
    .map((block) => {
      if (block._type === "block" && isArray(block.children)) {
        return block.children.map((child) => child.text).join("");
      }
      return "";
    })
    .join(" ");
};

/** Check if a URL is external. */
export function isExternalUrl(url: string | undefined): boolean {
  if (!url) return false;

  // Check if it's an absolute URL (http://, https://, //, mailto:, tel:, etc.)
  const isAbsolute =
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("//") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:");

  // If it's an absolute URL, check if it belongs to our domain
  if (isAbsolute) {
    try {
      const baseUrlHost = new URL(env.NEXT_PUBLIC_SITE_URL).hostname;
      const urlHost = new URL(url, env.NEXT_PUBLIC_SITE_URL).hostname;
      return baseUrlHost !== urlHost;
    } catch {
      // If there's any parsing error, assume it's external
      return true;
    }
  }

  // URL is relative, so it's internal
  return false;
}
