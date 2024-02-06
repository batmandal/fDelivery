import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

import { CustomButton } from "@/components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";

type ModalProps = {
  title: string;
  cost: ReactNode;
  ingredient: string;
  onClick: any;
};

export function ModalFood(props: ModalProps) {
  const { title, cost, ingredient, onClick } = props;
  return (
    <Stack
      padding={4}
      direction="row"
      gap="33px"
      borderRadius={4}
      width="fit-content"
      bgcolor="white"
    >
      <Stack width="100%">
        <Image src={"/Pizza.png"} width={500} height={500} alt="pizza" />
      </Stack>
      <Stack gap="27px">
        <Stack alignItems="end" onClick={onClick}>
          <CloseOutlinedIcon />
        </Stack>
        <Stack gap={4} width="384px">
          <Stack>
            <Typography fontWeight={700} fontSize="28px">
              {title}
            </Typography>
            <Typography fontWeight={600} fontSize="18px" color="primary">
              {cost}₮
            </Typography>
          </Stack>
          <Stack gap="12px">
            <Typography fontWeight={600} fontSize="18px">
              Орц
            </Typography>
            <Stack
              padding={1}
              bgcolor=" #F6F6F6"
              sx={{ fontSize: "16px", fontWeight: "400", color: "#767676" }}
              borderRadius={1}
            >
              {ingredient}
            </Stack>
          </Stack>
          <Typography fontWeight={600} fontSize="18px">
            Тоо
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomButton
              label="-"
              variant="contained"
              sx={{ width: "fit-content" }}
            />
            {1}
            <CustomButton
              label="+"
              variant="contained"
              sx={{ width: "fit-content" }}
            />
          </Stack>
          <CustomButton label="Сагслах" variant="contained" />
        </Stack>
      </Stack>
    </Stack>
  );
}
