import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Food } from "./Foods";

type FoodProps = {
  onClick?: any;
} & Food;

export function Food(props: FoodProps) {
  const { name, price, onClick, image } = props;

  return (
    <Stack onClick={onClick} sx={{ cursor: "pointer" }}>
      <Stack borderRadius={2} overflow="hidden" maxHeight="186px">
        <img src={image} alt="" />
      </Stack>
      <Stack>
        <Typography fontWeight={600} fontSize="18px">
          {name}
        </Typography>
        <Typography fontWeight={600} fontSize="18px" color="primary">
          {price}₮
        </Typography>
      </Stack>
    </Stack>
  );
}
