import React from "react";
import { TextField, TextFieldProps } from "@mui/material";


const CustomTextField: React.FC<TextFieldProps> = (
  props: TextFieldProps
) => {
  return <TextField {...props} fullWidth />;
};

export default CustomTextField;
