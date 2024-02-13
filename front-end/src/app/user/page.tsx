import { Stack, Typography } from "@mui/material";

import { Action, UserInput } from "@/components/UserInput";
import {
  CreateOutlined,
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
    <Stack gap={5} alignItems="center" margin={8}>
      <Stack position="relative">
        <Stack width="120px" borderRadius="50%" overflow="hidden">
          <img src="Avatar.jpg" />
        </Stack>
        <Stack
          color="#18BA51"
          border="solid 1px #D6D8DB"
          borderRadius="50%"
          width="34px"
          height="34px"
          display="grid"
          sx={{ placeContent: "center", background: "white" }}
          position="absolute"
          right={0}
          bottom={0}
        >
          <CreateOutlined />
        </Stack>
      </Stack>
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
