import { Star } from "@/assets/svg/Star";
import { AddCategory } from "@/components/AddCategory";
import { CreateFood } from "@/components/CreateFood";
import { Basket } from "@/components/Drawer";
import Page from "@/components/upload/UploadImage";
import { Stack, Typography } from "@mui/material";
// import { SelectInput } from "../foodOrder/page";

export default function DeliveryArea() {
  return (
    <>
      {/* <Stack></Stack>
      <Stack>
        <Star /> Хүргэлтийн бүс дэх хаягууд
      </Stack>
      <Stack>
        <Stack sx={{ padding: "24px 24px 24px 64px" }} gap={2}>
          <Typography
            fontWeight={590}
            fontSize="20px"
            py={8}
            border="1px solid primary"
          >
            А бүс
          </Typography>
          <Stack></Stack>
        </Stack>
      </Stack> */}
      <Page />
      {/* <SelectInput /> */}
    </>
  );
}
