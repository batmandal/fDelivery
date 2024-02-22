"use client";

import { AddCategory } from "@/components/AddCategory";
import { CreateFood } from "@/components/CreateFood";
import { Food } from "@/components/Food";
import { FoodType } from "@/components/Foods";

import { useFetch } from "@/hooks/useFetch";
import { MoreVert } from "@mui/icons-material";
import { Container, Grid, Stack, Typography } from "@mui/material";

type CategoryStyleType = {
  // _id: string;
  categoryName: string;
};

export default function Admin() {
  const { datas, loading, error } = useFetch<CategoryStyleType[]>(
    "http://localhost:3008/categories"
  );

  const {
    datas: foodData,
    loading: foodLoading,
    error: foodError,
  } = useFetch<FoodType[]>("http://localhost:3008/foods");

  console.log(datas);

  return (
    <Container maxWidth="lg" sx={{ display: "flex", height: "100vh" }}>
      <Stack width="25%" height="100%" paddingRight={3} gap={5}>
        <Typography fontSize="22px" fontWeight={700}>
          Food menu{" "}
        </Typography>
        <Stack gap="26px">
          {datas.map((item, id) => {
            return <CategoryStyle key={id} categoryName={item.categoryName} />;
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
  const { categoryName } = props;

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
    >
      {categoryName}
      <Stack>
        <MoreVert />
      </Stack>
    </Stack>
  );
}
