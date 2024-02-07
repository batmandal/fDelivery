"use client";

import { Stack, Typography, Container } from "@mui/material";
import { CustomInput } from "@/components/Input";
import { Choice } from "@/components";
import {
  ShoppingBasketOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Pinecone } from "@/assets/svg/Pinecone";
import { useRouter } from "next/navigation";

import * as React from "react";
import Modal from "@mui/material/Modal";
import { LogInModal } from "./LogIn";
import { useAuth } from "./AuthProvider";

export function Header() {
  const router = useRouter();
  const { isLogged } = useAuth();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      direction="row"
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "30",
        top: "0",
        height: "57px",
      }}
      bgcolor="white"
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row" style={{ alignItems: "center" }}>
          <Pinecone />
          <Stack direction="row" gap={1}>
            <Typography
              fontWeight={700}
              fontSize="14px"
              padding="12px 16px"
              onClick={() => {
                router.push("home-page");
              }}
              sx={{ cursor: "pointer" }}
            >
              нүүр
            </Typography>
            <Typography
              fontWeight={700}
              fontSize="14px"
              padding="12px 16px"
              onClick={() => {
                router.push("menu-page");
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              хоолны цэс
            </Typography>
            <Typography
              fontWeight={700}
              fontSize="14px"
              padding="12px 16px"
              sx={{ cursor: "pointer" }}
            >
              хүргэлтийн бүс
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={1} style={{ alignItems: "center" }}>
          <CustomInput placeholder="хайх" size="small" />
          <Choice
            name="сагс"
            icon={<ShoppingBasketOutlined />}
            onClick={() => {}}
          />
          {isLogged === true ? (
            <Choice
              name="Хэрэглэгч"
              icon={<PersonOutlineOutlined />}
              onClick={() => {}}
            />
          ) : (
            <Choice
              name="нэвтрэх"
              icon={<PersonOutlineOutlined />}
              onClick={handleOpen}
            />
          )}
        </Stack>
      </Container>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          sx={{ display: "grid", placeContent: "center" }}
        >
          <LogInModal />
        </Modal>
      </div>
    </Stack>
  );
}
