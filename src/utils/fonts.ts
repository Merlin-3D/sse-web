import { Google_Sans, Archivo } from "next/font/google";

export const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const archivoSans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
