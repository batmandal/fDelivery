import { Container, Grid, Stack } from "@mui/material";

const menues = [
  { text: "Main course" },
  { text: "Appetizer" },
  { text: "Beverage" },
  { text: "On sale" },
];

export default function MenuPage() {
  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" py={4}>
        {menues.map((item) => {
          return (
            <Stack
              borderRadius="16px"
              border="1px solid #D6D8DB"
              fontSize="18x"
              fontWeight="600"
              py={1}
              width="23%"
              alignItems="center"
            >
              {item.text}
            </Stack>
          );
        })}
      </Stack>
      <Stack></Stack>
    </Container>
  );
}
