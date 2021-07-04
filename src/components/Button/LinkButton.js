import React from "react";
import cn from "classnames";
import { variants } from "./utils";
import "./styles.css";

const LinkButton = ({ className, onClick, variant, value, name, href }) => {
  return (
    <a href={href} name={name} onClick={onClick} className={cn("button", className, `button_variant-${variant}`)}>
      {value}
    </a>
  );
};

LinkButton.defaultProps = {
  variant: variants.primary,
  onClick: () => {},
  href: "void(0);",
};

export default LinkButton;
