"use client";

import { ArrowRight } from "@/assets/svg/ArrowRIght";
import { Star } from "@/assets/svg/Star";
import { Food } from "@/components/Food";
import { Grid, Stack, Typography } from "@mui/material";

import Modal from "@mui/material/Modal";
import { ModalFood } from "./ModalFood";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";

// const allFood = [{ foodName: "bla", cost: "6700", img: "steak.jpeg" }];

type FoodsProps = {
  type?: string;
};

export type FoodType = {
  _id: string;
  name: string;
  price: string;
  discount: string;
  image: string;
  type: string;
  ingredient: string;
};

export function Foods(props: FoodsProps) {
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);

  const { allFood, loading, error, refetch } = useFetch<FoodType[]>(
    "http://localhost:3008/foods"
  );
  // console.log(allFood);

  const { type } = props;
  const typeTranslate = () => {
    if (type == "Амттан") {
      return "appetizer";
    }
    if (type == "Үндсэн хоол") {
      return "main";
    }
    if (type == "Салад ба зууш") {
      return "beverage";
    }
    if (type == "Хямдралтай") {
      return "onSale";
    }
  };

  const handleOpen = (food: FoodType) => {
    setSelectedFood(food);
  };

  const handleClose = () => {
    setSelectedFood(null);
  };

  return (
    <Stack gap={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          display="flex"
          gap={1}
          fontWeight={700}
          fontSize="22px"
          alignItems="center"
        >
          <Star />
          {type}
        </Typography>
        <Typography
          gap={1}
          display="flex"
          alignItems="center"
          fontWeight={400}
          fontSize="14px"
          color="primary"
        >
          Бүгдийг харах <ArrowRight />
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {allFood
          .filter((food) => food.type === typeTranslate())
          .map((item) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Food {...item} onClick={handleOpen} />
              </Grid>
            );
          })}
      </Grid>
      <div>
        <Modal
          open={Boolean(selectedFood)}
          onClose={handleClose}
          sx={{ display: "grid", placeContent: "center" }}
        >
          <>
            {selectedFood && (
              <ModalFood onClick={handleClose} {...selectedFood} />
            )}
          </>
        </Modal>
      </div>
    </Stack>
  );
}
