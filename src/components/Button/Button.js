import React from "react";
import cn from "classnames";
import "./styles.css";

export const variants = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ className, onClick, variant, value, name }) => {
  return (
    <button name={name} onClick={onClick} className={cn("button", className, `button_variant-${variant}`)}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  variant: variants.primary,
  onClick: () => {},
};

export default Button;
