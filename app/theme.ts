"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#000000", paper: "#000000" },
    text: { primary: "#ffffff" },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    body1: { fontSize: "18px" },
    ...Object.fromEntries(
      ["h1", "h2", "h3", "h4", "h5", "h6"].map((v) => [
        v,
        { fontFamily: '"Playfair Display", serif', fontWeight: 900 },
      ]),
    ),
  },
});

export default theme;
