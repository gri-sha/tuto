"use client";

import { Container, Box, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        gap={2}
      >
        <Image
          src="/logo.svg"
          alt="tuto logo"
          width={0}
          height={0}
          style={{ width: "300px", height: "auto" }}
        />
        <Button variant="contained">Tuto</Button>
      </Box>
    </Container>
  );
}

