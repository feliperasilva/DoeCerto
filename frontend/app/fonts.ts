import { Roboto, Darker_Grotesque } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap"
});

export const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-darker-grotesque",
  display: "swap"
});