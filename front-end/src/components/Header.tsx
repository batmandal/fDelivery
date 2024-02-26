"use client";

import { Stack, Typography, Container } from "@mui/material";
import { CustomInput } from "@/components/Input";
import { Choice } from "@/components";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { Pinecone } from "@/assets/svg/Pinecone";
import { useRouter } from "next/navigation";

import { LogInModal } from "./LogIn";
import { useAuth } from "./providers/AuthProvider";
import { useEffect, useState } from "react";
import { Basket } from "./Drawer";

const text = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

export function Header() {
  const router = useRouter();
  const { isLogged } = useAuth();

  const [activeTab, setActiveTab] = useState(text[0]);

  const action = () => {
    if (activeTab === text[0]) {
      return router.push("/home-page");
    }
    if (activeTab === text[1]) {
      return router.push("/menu-page");
    }
    if (activeTab === text[2]) {
      return router.push("/delivery-area");
    }
  };

  console.log(activeTab, "activeTab");

  // useEffect(() => {
  //   activeTab;
  // }, []);

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
                    setActiveTab(a), action();
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
          <CustomInput placeholder="хайх" size="small" type="search" />
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
            <LogInModal />
          )}
        </Stack>
      </Container>
    </Stack>
  );
}
