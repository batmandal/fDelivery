"use client";

import { Container, Stack, Typography } from "@mui/material";

export default function Admin() {
  return (
    <Container maxWidth="lg" sx={{ display: "flex" }}>
      <Stack width="25%" height="100px" bgcolor="red">
        <Typography fontSize="22px" fontWeight={700}>
          Food menu{" "}
        </Typography>
      </Stack>
      <Stack width="75%" height="100px" bgcolor="pink"></Stack>
    </Container>
  );
}
