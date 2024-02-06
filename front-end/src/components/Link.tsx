import * as React from "react";
import Link from "@mui/material/Link";

type LinksProps = {
  label: string;
};

export default function ButtonLink(props: LinksProps) {
  const { label } = props;
  return (
    <Link
      style={{ whiteSpace: "nowrap", color: "white", cursor: "pointer" }}
      underline="always"
    >
      {label}
    </Link>
  );
}
