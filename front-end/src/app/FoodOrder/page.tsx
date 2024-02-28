import { OrderBasket } from "@/components/OrderBasket";
import { OrderInformation } from "@/components/OrderInformation";
import { OrderIntro } from "@/components/OrderIntro";
import { Stack } from "@mui/material";

export default function FoodOrder() {
  return (
    <Stack
      direction="row"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      gap="180px"
    >
      <Stack gap={3}>
        {" "}
        <OrderIntro
          label="Хаягийн мэдээлэл оруулах"
          title="Алхам 1"
          text="Хүлээгдэж байна"
        />
        <OrderInformation />
      </Stack>
      <Stack>
        <OrderIntro
          label="Захиалга баталгаажуулах"
          title="Алхам 2"
          text="Хүлээгдэж байна"
        />
        <OrderBasket />
      </Stack>
    </Stack>
  );
}
