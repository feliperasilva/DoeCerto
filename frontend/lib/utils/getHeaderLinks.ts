import { NavigationLink } from "@/types";

export function getHeaderLinks(pathname: string): NavigationLink[] {
  if (pathname === "/") {
    return [{ label: "Login", href: "/login" }];
  }

  if (pathname === "/home") {
    return [
      { label: "Home", href: "/home" },
      { label: "Logout" }, // Sem href, será renderizado como botão
    ];
  }

  return [];
}
