import { Button as MuiButton } from "@mui/material";
import MuiTypography from "../Typography";
import { ButtonProps } from "@mui/material/Button";

const Button = ({ children, ...restProps }: ButtonProps) => {
  return (
    <MuiButton {...restProps}>
      <MuiTypography variant="body2" children={children} />
    </MuiButton>
  );
};

export default Button;
