"use client";

import { Add, Close } from "@mui/icons-material";
import {
  Button,
  Container,
  Modal,
  Stack,
  TextField,
  Typography,
  TextFieldProps,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { Toggle } from "./Toggle";
import { Inputs } from "./FoodInputs";

const inputs2 = [
  { label: "Хоолны нэр", placeholder: "Хоолны нэр", type: "text" },
  { label: "Хоолны ангилал", placeholder: "Хоолны ангилал", type: "text" },
  { label: "Хоолны орц", placeholder: "Хоолны орц", type: "text" },
  { label: "Хоолны үнэ", placeholder: "Хоолны үнэ", type: "number" },
  { label: "Хямдралтай эсэх", placeholder: "Хоолны нэр", type: "number" },
  { label: "Хоолны зураг", placeholder: "Хоолны нэр", type: "file" },
];

export function CreateFood() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
        direction="row"
        gap={1}
        sx={{ color: "white" }}
        border="solid 1px #D6D8DB"
        width="fit-content"
        borderRadius={2}
        py={1}
        px={2}
        bgcolor="#18BA51"
      >
        <Add /> {"Add new food"}
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "grid", placeContent: "center" }}
      >
        <Stack width="587px" sx={{ background: "white", borderRadius: "16px" }}>
          <Stack
            direction="row"
            borderBottom="solid 1px #E0E0E0"
            padding={3}
            alignItems="center"
          >
            <Stack onClick={handleClose}>
              <Close />
            </Stack>
            <Typography
              justifyContent="center"
              display="flex"
              width="100%"
              fontWeight={700}
              fontSize="24px"
            >
              Create food
            </Typography>
          </Stack>
          <Stack padding={3} gap={2}>
            {inputs2.map((inp) => {
              return (
                <Inputs
                  placeholder={inp.placeholder}
                  type={inp.type}
                  label={inp.label}
                />
              );
            })}
          </Stack>
          <Stack
            direction="row"
            borderTop="solid 1px #E0E0E0"
            padding={3}
            gap={2}
            justifyContent="flex-end"
          >
            <Button
              sx={{ color: "#393939", fontWeight: "700", fontSize: "16px" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              sx={{ background: "#393939", color: "white" }}
            >
              Continue
            </Button>
            {/* <Toggle /> */}
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}

// type inputsType = {
//   label: string;
//   icon?: ReactNode;
//   placeholder: string;
//   src?: string;
//   type: string;
// };
// export function Inputs(props: inputsType & TextFieldProps) {
//   const { label, icon, placeholder, type, ...rest } = props;

//   const [foodImage, setFoodImage] = useState<string>("");
//   console.log(foodImage);

//   return (
//     <Stack gap={1}>
//       <Stack direction="row" alignItems="center" gap={1}>
//         <Toggle />
//         <Typography>{label}</Typography>
//       </Stack>
//       <Stack width="100%">
//         <Stack direction="row" gap={1} alignItems="center">
//           <Stack alignItems="center" gap={1} width="100%" bgcolor="#F4F4F4">
//             <Typography
//               style={{
//                 display: `${type === "file" ? "flex" : "none "}`,
//               }}
//               fontSize="16px"
//               fontWeight={700}
//             >
//               Add image for the food
//             </Typography>
//             <TextField
//               {...rest}
//               placeholder={placeholder}
//               type={type}
//               style={{ width: "100%" }}
//               onChange={(event) => setFoodImage(event.target.value)}
//             ></TextField>
//           </Stack>
//           <img
//             src={foodImage}
//             alt=""
//             style={{
//               display: `${type === "file" ? "flex" : "none "}`,
//               width: "50%",
//             }}
//           />
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }
