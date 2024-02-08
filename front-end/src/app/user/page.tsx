import { Stack, Typography } from "@mui/material";

import { Action, UserInput } from "@/components/UserInput";
import {
  ForwardToInboxOutlined,
  HistoryOutlined,
  LogoutOutlined,
  PersonOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

const userInformation = [
  { label: "Таны нэр", icon: <PersonOutlined />, text: "УгтахБаяр" },
  { label: "Утасны дугаар", icon: <PhoneOutlined />, text: "88883345" },
  {
    label: "Имэйл хаяг",
    icon: <ForwardToInboxOutlined />,
    text: "Ugtakhbayr@gmail.com",
  },
];

export default function User() {
  return (
    <Stack gap={5} alignItems="center">
      <Stack></Stack>
      <Typography fontWeight={700} fontSize="28px">
        УгтахБаяр
      </Typography>
      <Stack gap={2}>
        {userInformation.map((item) => {
          return (
            <UserInput label={item.label} icon={item.icon} text={item.text} />
          );
        })}
        <Action title="Захиалгын түүх" icon2={<HistoryOutlined />} />
        <Action title="Гарах" icon2={<LogoutOutlined />} />
      </Stack>
    </Stack>
  );
}
