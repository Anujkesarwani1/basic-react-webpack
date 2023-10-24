import { Typography, TypographyProps } from "@mui/material";

interface TypoProps extends TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2";
  color?: string;
}

const MuiTypography = (props: TypoProps) => {
  return <Typography {...props}>{props.children}</Typography>;
};

export default MuiTypography;
