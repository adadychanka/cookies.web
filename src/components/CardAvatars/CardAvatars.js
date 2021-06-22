import React from "react";
import Avatar from "../Avatar";
import "./styles.css";

const CardAvatars = ({ avatars = [] }) => {
  return (
    <div className="card-avatars">
      {avatars.map((avatar, index) => {
        return (
          <div key={index} className="card-avatars__avatar">
            <Avatar width={avatar.width} height={avatar.height} src={avatar.src} alt={avatar.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(CardAvatars);
