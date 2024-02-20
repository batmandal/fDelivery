import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { CustomButton } from ".";

export function Card() {
  return (
    <Stack direction="row" gap={2}>
      <Stack width="50%">
        <img src="cocktail.jpeg" />
      </Stack>
      <Stack gap={1} justifyContent="space-between">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography fontSize="18px" fontWeight={600}>
              Main Pizza{" "}
            </Typography>
            <Typography color="#18BA51" fontWeight={600} fontSize="18px">
              34,800₮
            </Typography>
          </Stack>
          <Close />
        </Stack>

        <Typography color="#767676" fontWeight={400} fontSize="16px">
          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <CustomButton label="-" variant="contained" />
          <Typography
            fontWeight={500}
            fontSize="16px"
            display="grid"
            style={{ placeContent: "center" }}
          >
            1
          </Typography>
          <CustomButton label="+" variant="contained" />
        </Stack>
      </Stack>
    </Stack>
  );
}
