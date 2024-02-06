import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type Choices = {
  name: string;
  icon: ReactNode;
  onClick: any;
};

export function Choice(props: Choices) {
  const { name, icon, onClick } = props;

  return (
    <>
      <Stack
        style={{
          cursor: "pointer",
          width: "fit-content",
          height: "fit-content",
          padding: "8px 16px",
          gap: "8px",
        }}
        direction="row"
        onClick={onClick}
      >
        {icon}
        <Typography fontSize="14px" fontWeight={700}>
          {name}
        </Typography>
      </Stack>

      {/* <Drawer /> */}
    </>
  );
}
