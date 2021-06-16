import React, { memo } from "react";
import "./styles.css";

const Chip = ({ img = null, text }) => {
  const src = (img ?? "").includes("data:image") ? img : null;
  const emoji = src ? null : img;

  return (
    <div className="chip">
      {src && (
        <picture className="chip__picture">
          <source src={src} />
          <img src={src} />
        </picture>
      )}
      {emoji && <div className="chip__picture">{emoji}</div>}
      {text}
    </div>
  );
};

export default memo(Chip);
