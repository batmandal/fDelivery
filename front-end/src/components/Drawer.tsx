"use client";

import { Box, Drawer, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Choice } from ".";
import { NavigateBefore, ShoppingBasketOutlined } from "@mui/icons-material";

export const Basket = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
        <Box
          width="586px"
          alignItems="center"
          justifyContent="center"
          role="presentation"
          p={2}
          borderBottom="solid 1px red"
          display="flex"
        >
          <NavigateBefore />

          <Typography fontWeight={900} fontSize="20px">
            Таны сагс
          </Typography>
        </Box>
        <Typography> hi</Typography>
      </Drawer>
    </>
  );
};
