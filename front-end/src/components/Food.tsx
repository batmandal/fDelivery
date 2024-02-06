import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Food } from "./Foods";

type FoodProps = {
  onClick?: any;
} & Food;

export function Food(props: FoodProps) {
  const { name, price, onClick, image } = props;

  return (
    <Stack onClick={onClick} sx={{ cursor: "pointer" }} gap="14px">
      <Stack borderRadius={2} overflow="hidden" height="186px" width="100%">
        <img
          src={image}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
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
