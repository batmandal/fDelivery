"use client";

import { Food } from "@/components/Food";
import { FoodType } from "@/components/Foods";
import { useFetch } from "@/hooks/useFetch";
import { Container, Drawer, Grid, Stack } from "@mui/material";
import { useState } from "react";

const tabs = [
  { text: "Breakfast" },
  { text: "Soup" },
  { text: "Dessert" },
  { text: "Beverage" },
];

export default function MenuPage() {
  const { allFood } = useFetch<FoodType[]>("http://localhost:3008/foods");
  const [menu, setMenu] = useState<string>("Breakfast");
  const [activeTab, setActiveTab] = useState<any>(tabs[0]);
  // console.log(activeTab);

  const typeTranslate = () => {
    if (menu === "Breakfast") {
      return "breakfast";
    }
    if (menu === "Soup") {
      return "main";
    }
    if (menu === "Dessert") {
      return "appetizer";
    }
    if (menu === "Beverage") {
      return "beverage";
    }
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" py={4}>
        {tabs.map((item) => {
          return (
            <Stack
              borderRadius="8px"
              border="1px solid #D6D8DB"
              fontSize="18x"
              fontWeight="600"
              py={1}
              width="23%"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              bgcolor={`${activeTab === item ? "#18BA51" : null}`}
              color={`${activeTab === item ? "#fff" : null}`}
              onClick={() => {
                setMenu(item.text), setActiveTab(item);
              }}
            >
              {item.text}
            </Stack>
          );
        })}
      </Stack>
      <Stack>
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: "105px", marginTop: "54px" }}
        >
          {allFood
            .filter((f) => f.type === typeTranslate())
            .map((item) => {
              return (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Food {...item} onClick={() => {}} />
                </Grid>
              );
            })}
        </Grid>
      </Stack>
    </Container>
  );
}
