"use client";

import Button from "@mui/material/Button";
import Link from "next/link";

export default function TipJarButton() {
  return (
    <Button
      component={Link}
      href="/tips"
      variant="contained"
      size="large"
      sx={{
        borderRadius: 24,
        px: 6.25,
        py: 1.25,
        fontSize: "1.17rem",
        fontWeight: 700,
        color: "#ffffff",
        backgroundColor: "#3b34b5",
        "&:hover": { backgroundColor: "#2f2994" },
      }}
    >
      Tip Jar
    </Button>
  );
}
