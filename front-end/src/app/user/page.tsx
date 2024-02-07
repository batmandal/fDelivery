import { Stack, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import {
  ForwardToInboxOutlined,
  HistoryOutlined,
  PersonOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

export default function User() {
  return (
    <Stack>
      <Stack maxWidth="432px">
        <Stack>
          <Stack></Stack>
          <Typography></Typography>
        </Stack>
        <Stack>
          <Stack
            width="100%"
            py={1}
            px="20px"
            bgcolor="#F6F6F6"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" gap={1}>
              <Stack
                borderRadius="50%"
                bgcolor="white"
                padding="12px"
                width="fit-content"
              >
                <PersonOutlined />
              </Stack>
              <Stack justifyContent="center">
                <Typography fontSize="12px" fontWeight="400" color="#888A99">
                  Таны нэр
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  T-Rex
                </Typography>
              </Stack>
            </Stack>
            <CreateIcon />
          </Stack>
          <Stack
            width="100%"
            py={1}
            px="20px"
            bgcolor="#F6F6F6"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" gap={1}>
              <Stack
                borderRadius="50%"
                bgcolor="white"
                padding="12px"
                width="fit-content"
              >
                <PhoneOutlined />
              </Stack>
              <Stack justifyContent="center">
                <Typography fontSize="12px" fontWeight="400" color="#888A99">
                  Утасны дугаар
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  99999999
                </Typography>
              </Stack>
            </Stack>
            <CreateIcon />
          </Stack>
          <Stack
            width="100%"
            py={1}
            px="20px"
            bgcolor="#F6F6F6"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" gap={1}>
              <Stack
                borderRadius="50%"
                bgcolor="white"
                padding="12px"
                width="fit-content"
              >
                <ForwardToInboxOutlined />
              </Stack>
              <Stack justifyContent="center">
                <Typography fontSize="12px" fontWeight="400" color="#888A99">
                  Имэйл хаяг
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  Rexy@mail.com
                </Typography>
              </Stack>
            </Stack>
            <CreateIcon />
          </Stack>
          <Stack
            width="100%"
            py={1}
            px="20px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" gap={1}>
              <Stack
                borderRadius="50%"
                bgcolor="white"
                padding="12px"
                width="fit-content"
                border="1px solid #F6F6F6"
              >
                <HistoryOutlined />
              </Stack>
              <Stack justifyContent="center">
                <Typography fontSize="16px" fontWeight="400">
                  Захиалгын түүх
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width="100%"
            py={1}
            px="20px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" gap={1}>
              <Stack
                borderRadius="50%"
                bgcolor="white"
                padding="12px"
                width="fit-content"
                border="1px solid #F6F6F6"
              >
                <HistoryOutlined />
              </Stack>
              <Stack justifyContent="center">
                <Typography fontSize="16px" fontWeight="400">
                  Захиалгын түүх
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
