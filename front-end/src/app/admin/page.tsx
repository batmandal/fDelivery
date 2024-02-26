"use client";

import { AddCategory } from "@/components/AddCategory";
import { CreateFood } from "@/components/CreateFood";
import { Food } from "@/components/Food";
import { FoodType } from "@/components/Foods";

import { useFetch } from "@/hooks/useFetch";
import { MoreVert } from "@mui/icons-material";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

type CategoryStyleType = {
  // _id: string;
  categoryName: string;
  onClick: () => void;
  sx: any;
};

export default function Admin() {
  const {
    datas: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch<CategoryStyleType[]>("http://localhost:3008/categories");

  console.log(categoryData, "yanada");

  const {
    datas: foodData,
    loading: foodLoading,
    error: foodError,
  } = useFetch<FoodType[]>("http://localhost:3008/foods");

  const [active, setActive] = useState("hi");

  return (
    <Container maxWidth="lg" sx={{ display: "flex", height: "fit-content" }}>
      <Stack width="25%" height="100%" paddingRight={3} gap={5}>
        <Typography fontSize="22px" fontWeight={700}>
          Food menu{" "}
        </Typography>
        <Stack gap="26px">
          {categoryData.map((item, id) => {
            return (
              <CategoryStyle
                key={id}
                categoryName={item.categoryName}
                onClick={() => setActive(item.categoryName)}
                sx={{
                  background: `${
                    active === item.categoryName ? "#18BA51" : null
                  }`,
                  color: `${active === item.categoryName ? "#fff" : null}`,
                }}
              />
            );
          })}
          <AddCategory />
        </Stack>
      </Stack>
      <Stack width="75%" height="100%" bgcolor="#D6D7DC" padding={2}>
        <Stack direction="row" justifyContent="space-between" py={2}>
          <Typography fontWeight={700} fontSize="22px">
            Breakfast
          </Typography>
          <CreateFood />
        </Stack>
        <Stack>
          <Grid container>
            {foodData.map((food) => {
              return (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Food {...food} onClick={() => {}} />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}
export function CategoryStyle(props: CategoryStyleType) {
  const { categoryName, onClick, sx } = props;

  return (
    <Stack
      direction="row"
      width="100%"
      border="solid 1px #D6D8DB"
      borderRadius={2}
      color="black"
      fontWeight={500}
      fontSize="18px"
      justifyContent={"space-between"}
      alignItems="center"
      px={2}
      py={1}
      onClick={onClick}
      sx={sx}
    >
      {categoryName}
      <Stack>
        <MoreVert />
      </Stack>
    </Stack>
  );
}
