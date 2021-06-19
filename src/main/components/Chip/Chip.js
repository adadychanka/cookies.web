import React, { memo } from "react";
import "./styles.css";

const Chip = ({ img = null, text }) => {
  const src = (img ?? "").includes("data:image") ? img : null;
  const emoji = src ? null : img;

  return (
    <div className="chip">
      {src && <img className="chip__picture" src={src} />}
      {emoji && <div className="chip__picture">{emoji}</div>}
      {text}
    </div>
  );
};

export default memo(Chip);
