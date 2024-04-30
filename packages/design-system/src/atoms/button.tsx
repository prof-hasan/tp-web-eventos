// import { Button as BaseButton, ButtonProps } from "@mui/material";
import { Button as BaseButton, type ButtonProps } from "antd";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};
