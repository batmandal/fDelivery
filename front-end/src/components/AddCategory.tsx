"use client";
import { Add, Close } from "@mui/icons-material";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";

export function AddCategory() {
  const [open, setModalOpen] = useState(false);
  const handleClose = () => [setModalOpen(false)];
  return (
    <>
      <Stack
        onClick={() => {
          setModalOpen(true);
        }}
        direction="row"
        gap={1}
        sx={{ color: "#5E6166" }}
        border="solid 1px #D6D8DB"
        width="fit-content"
        borderRadius={1}
        py={1}
        px={2}
      >
        <Add /> {"Add new category"}
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "grid", placeContent: "center" }}
      >
        <Stack width="587px" sx={{ background: "white", borderRadius: "16px" }}>
          <Stack
            direction="row"
            borderBottom="solid 1px #E0E0E0"
            padding={3}
            alignItems="center"
          >
            <Stack onClick={handleClose}>
              <Close />
            </Stack>
            <Typography
              justifyContent="center"
              display="flex"
              width="100%"
              fontWeight={700}
              fontSize="24px"
            >
              Create new category
            </Typography>
          </Stack>
          <Stack></Stack>
          <Stack
            direction="row"
            borderTop="solid 1px #E0E0E0"
            padding={3}
            gap={2}
            justifyContent="flex-end"
          >
            <Button
              sx={{ color: "#393939", fontWeight: "700", fontSize: "16px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              sx={{ background: "#393939", color: "white" }}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
