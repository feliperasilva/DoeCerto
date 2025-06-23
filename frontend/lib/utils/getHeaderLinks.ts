import { NavigationLink } from "@/types";

export function getHeaderLinks(pathname: string): NavigationLink[] {
  if (pathname === "/") {
    return [{ label: "Login", href: "/login" }];
  }

  return [];
}
