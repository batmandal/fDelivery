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

import Modal from "@mui/material/Modal";
import { LogInModal } from "./LogIn";
import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { Basket } from "./Drawer";

const text = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export function Header() {
  const router = useRouter();
  const { isLogged } = useAuth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [textClick, setTextClick] = useState<string>();

  const action = () => {
    if (textClick === "НҮҮР") {
      return router.push("/home-page");
    }
    if (textClick === "ХООЛНЫ ЦЭС") {
      return router.push("/menu-page");
    }
    if (textClick === "ХҮРГЭЛТИЙН БҮС") {
      return router.push("/delivery-area");
    }
  };

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
            {text.map((a, i) => {
              return (
                <Typography
                  key={i}
                  fontWeight={700}
                  fontSize="14px"
                  padding="12px 16px"
                  onClick={() => {
                    setTextClick(a), action();
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  {a}
                </Typography>
              );
            })}
          </Stack>
        </Stack>
        <Stack direction="row" gap={1} style={{ alignItems: "center" }}>
          <CustomInput placeholder="хайх" size="small" />
          <Basket />
          {isLogged === true ? (
            <Choice
              name="Хэрэглэгч"
              icon={<PersonOutlineOutlined />}
              onClick={() => {
                router.push("/user");
              }}
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
