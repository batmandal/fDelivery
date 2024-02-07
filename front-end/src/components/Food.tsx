import { Stack, Typography } from "@mui/material";
import { Food } from "./Foods";

type FoodProps = {
  onClick: (food: Food) => void;
} & Food;

export function Food(props: FoodProps) {
  const { onClick, ...food } = props;

  const handleClick = () => {
    onClick(food);
  };

  return (
    <Stack onClick={handleClick} sx={{ cursor: "pointer" }} gap="14px">
      <Stack borderRadius={2} overflow="hidden" height="186px" width="100%">
        <img
          src={food.image}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Stack>
      <Stack>
        <Typography fontWeight={600} fontSize="18px">
          {food.name}
        </Typography>
        <Typography fontWeight={600} fontSize="18px" color="primary">
          {food.price}₮
        </Typography>
      </Stack>
    </Stack>
  );
}
