"use client";

import { Food } from "@/components/Food";
import { FoodType } from "@/components/Foods";
import { FoodsModal } from "@/components/FoodsModal";
import { useFetch } from "@/hooks/useFetch";
import { Container, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { CategoryStyleType } from "../admin/page";

export default function MenuPage() {
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);
  const { datas: foodData } = useFetch<FoodType[]>(
    "http://localhost:3008/foods"
  );
  const [menu, setMenu] = useState<string>("Breakfast");
  const [activeTab, setActiveTab] = useState<any>("");
  const {
    datas: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<CategoryStyleType[]>("http://localhost:3008/categories");

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
    } else {
      null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {categoryData.map((item) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Stack
                borderRadius="8px"
                border="1px solid #D6D8DB"
                fontSize="18x"
                fontWeight="600"
                py={1}
                width="100%"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                bgcolor={`${activeTab === item ? "#18BA51" : null}`}
                color={`${activeTab === item ? "#fff" : null}`}
                onClick={() => {
                  setMenu(item.categoryName), setActiveTab(item);
                }}
              >
                {item.categoryName}
              </Stack>
            </Grid>
          );
        })}
      </Grid>

      <Stack>
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: "105px", marginTop: "54px" }}
        >
          {foodData
            .filter((f) => f.type === typeTranslate())
            .map((item) => {
              return (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Food
                    {...item}
                    onClick={() => {
                      setSelectedFood(item);
                    }}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Stack>
      <FoodsModal
        open={Boolean(selectedFood)}
        handleClose={() => setSelectedFood(null)}
        food={selectedFood}
      />
    </Container>
  );
}
