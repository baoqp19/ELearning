import { Manrope, Roboto } from "next/font/google";

import localfont from "next/font/local"

const manrope = Manrope({subsets: ['latin'], variable: "--font-manrope"});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
})

const fonts_dm = localfont({
    src: [
        {
          path: "../fontDM/DMSans-Regular.ttf",
          weight: "400",
        },
        {
          path: "../fontDM/DMSans-Bold.ttf",
          weight: "700",
        },
        {
          path: "../fontDM/DMSans-BoldItalic.ttf",
          weight: "700",
          style: "italic",
        },
        {
          path: "../fontDM/DMSans-Medium.ttf",
          weight: "500",
        },
        {
          path: "../fontDM/DMSans-MediumItalic.ttf",
          weight: "500",
          style: "italic",
        },
        {
          path: "../fontDM/DMSans-Italic.ttf",
          weight: "400",
          style: "italic",
        },
      ],
      display: "swap",
    });

export {manrope, roboto, fonts_dm}