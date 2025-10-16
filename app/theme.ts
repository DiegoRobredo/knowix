"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});

export default theme;
