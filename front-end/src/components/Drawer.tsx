"use client";

import { Container, Drawer, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Choice, CustomButton } from ".";
import { ArrowBackIos, ShoppingBasketOutlined } from "@mui/icons-material";
import { Card } from "./Card";
import { useData } from "./providers/DataProvider";

export const Basket = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { basketFood } = useData();

  return (
    <>
      <Choice
        name="сагс"
        icon={<ShoppingBasketOutlined />}
        onClick={() => setIsDrawerOpen(true)}
      />

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Container sx={{ height: "100%", width: "586px" }}>
          <Stack direction="row" alignItems="center" padding="9px 11px ">
            <Stack
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <ArrowBackIos />
            </Stack>
            <Typography
              fontWeight={900}
              fontSize="20px"
              width="100%"
              display="grid"
              style={{ placeContent: "center" }}
            >
              Таны сагс
            </Typography>
          </Stack>
          <Stack>
            {basketFood.map(({ food, quantity }) => {
              return (
                <Card
                  name={food.name}
                  image={food.image}
                  price={food.price}
                  ingredient={food.ingredient}
                />
              );
            })}
          </Stack>
        </Container>
        <Stack
          direction="row"
          bottom={0}
          width="100%"
          padding=" 49px 32px 69px 32px"
          gap="10px"
          boxShadow="0px 0px 8px 8px #BBBECD33"
          bgcolor="white"
          position="fixed"
        >
          <Stack width="256px">
            <Typography color="#5E6166" fontWeight={400} fontSize="18px">
              Нийт төлөх дүн
            </Typography>
            <Typography color="#121316" fontWeight={700} fontSize="18px">
              34,800₮
            </Typography>
          </Stack>
          <CustomButton
            label="Захиалах"
            variant="contained"
            sx={{ width: "256px", right: "0" }}
          />
        </Stack>
      </Drawer>
    </>
  );
};
