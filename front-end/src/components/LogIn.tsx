import { Stack, Typography } from "@mui/material";
import { CustomButton, CustomInput } from ".";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "./AuthProvider";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
type TypeModal = {
  onClick?: any;
};

export function LogInModal(props: TypeModal) {
  const { onClick } = props;
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
      // console.log(values.email, values.password);
    },
  });

  const router = useRouter();
  return (
    <Stack
      gap={6}
      padding={4}
      bgcolor="white"
      style={{
        width: "fit-content",
        borderRadius: "16px",
      }}
    >
      <Typography fontWeight={700} fontSize={"28px"} textAlign="center">
        Нэвтрэх
      </Typography>
      <Stack gap={2}>
        <CustomInput
          name="email"
          label="Имэйл"
          value={formik.values.email}
          placeholder="Имэйл хаягаа оруулна уу"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          type="text"
        />
        <CustomInput
          name="password"
          label="Нууц үг"
          placeholder="Нууц үг"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type="password"
          text="нууц үг сэргээх"
          onClick={() => {
            router.push("pass-recovery");
          }}
        />
      </Stack>
      <Stack gap={6}>
        <CustomButton
          variant="contained"
          label="Нэвтрэх"
          disabled={!formik.values.email || !formik.values.password}
          sx={{
            color: "#fff",
            width: "384px",
            height: "48px",
          }}
          onClick={() => {
            formik.handleSubmit();
          }}
        />
        <Typography
          style={{ width: "384px", alignContent: "center" }}
          fontWeight={400}
          fontSize={"14px"}
          textAlign="center"
        >
          Эсвэл
        </Typography>
        <CustomButton
          label="Бүртгүүлэх"
          variant="outlined"
          onClick={() => {
            router.push("sign-up");
          }}
          sx={{
            width: "384px",
            height: "48px",
            border: "1px #18BA51 solid",
          }}
        />
      </Stack>
    </Stack>
  );
}