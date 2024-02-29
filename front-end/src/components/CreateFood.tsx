"use client";

import { Add, Close } from "@mui/icons-material";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";
import { Inputs } from "./FoodInputs";
import { useFormik } from "formik";
import { useData } from "./providers/DataProvider";

const inputs2 = [
  {
    label: "Хоолны нэр",
    placeholder: "Хоолны нэр",
    type: "text",
    name: "name",
  },
  // { label: "Хоолны ангилал", placeholder: "Хоолны ангилал", type: "select" },
  // { label: "Хоолны орц", placeholder: "Хоолны орц", type: "text" },
  // { label: "Хоолны үнэ", placeholder: "Хоолны үнэ", type: "number" },
  // { label: "Хямдралтай эсэх", placeholder: "Хоолны нэр", type: "number" },
  // { label: "Хоолны зураг", placeholder: "Хоолны нэр", type: "file" },
];

const validationSchema = yup.object({ name: yup.string().required() });

export function CreateFood() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const { foodPost } = useData();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(formik.values.name);
    },
  });

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
              const { placeholder, type, label, name } = inp;
              return (
                <Inputs
                  name={name}
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  type={type}
                  label={label}
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
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
