import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { CustomButton } from ".";

export type CardType = {
  name: String;
  price: String;
  image: String;
  ingredient: String;
  count: number;
};

export function Card({ image, name, price, ingredient, count }: CardType) {
  return (
    <Stack direction="row" gap={2}>
      <Stack width="50%">
        <img src={`${image}`} />
      </Stack>
      <Stack gap={1} justifyContent="space-between">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography fontSize="18px" fontWeight={600}>
              {name}
            </Typography>
            <Typography color="#18BA51" fontWeight={600} fontSize="18px">
              {price}₮
            </Typography>
          </Stack>
          <Close />
        </Stack>

        <Typography color="#767676" fontWeight={400} fontSize="16px">
          {ingredient}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <CustomButton label="-" variant="contained" />
          <Typography
            fontWeight={500}
            fontSize="16px"
            display="grid"
            style={{ placeContent: "center" }}
          >
            {count}
          </Typography>
          <CustomButton label="+" variant="contained" />
        </Stack>
      </Stack>
    </Stack>
  );
}
